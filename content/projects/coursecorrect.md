---
title: "CourseCorrect: AI Learning Discovery Platform"
summary: "Live AI course discovery across Coursera, edX, Udemy, and more. As co-founder/CTO I owned it end to end: scrape/extract pipeline, Postgres FTS + vectors, hybrid search, and catalogue RAG."
publishedAt: "2025-06-01"
order: 1
images:
  - "/images/projects/coursecorrect/cover-01-home.webp"
  - "/images/projects/coursecorrect/cover-02-search.webp"
  - "/images/projects/coursecorrect/cover-03-course-detail.webp"
  - "/images/projects/coursecorrect/responsive-dual-modes.webp"
link: "https://coursecorrect.fyi"
draft: false
---

## Overview

[CourseCorrect](https://coursecorrect.fyi) is a live product that helps ambitious learners cut through MOOC overload. Instead of mirroring provider marketing pages, it builds an **editorial catalogue**: courses, programs, and degrees scraped directly from major providers, normalized with AI, searchable with hybrid keyword + semantic ranking, and explorable with an assistant (Cora) that can RAG over the full catalogue.

I am co-founder and CTO. I own the product architecture and the hard path end to end: Next.js UI, Hono API, GCP scrape/extract jobs, Postgres with full-text + vectors, hybrid search, and Cora’s catalogue RAG. The business problem is simple: people waste weekends comparing open tabs across Coursera, edX, Udemy, and friends, then still enroll with low confidence. Generic chatbots can *name* courses; they cannot reliably show fresh provider data, structured cross-provider filters, or career claims grounded in labor-market sources ([O\*NET](https://www.onetonline.org/) / [BLS](https://www.bls.gov/ooh/)).

**What shipped (user-facing):** search with filters and sort, resource detail pages with AI summaries and skills, subject pages, Firebase auth + saved courses, affiliate enroll links via Impact, and Cora (rate-limited AI chat). Monetization in this phase is affiliate commission on enroll clicks, not a paywall.

**What this write-up focuses on:** the 1.5 rebuild of our data and AI stack (direct scraping, Postgres with full-text and vector search, and RAG for Cora), since that’s where most of the hard engineering work went. Personalized learning paths (2.0) are teased on the site but left out of scope here.

![Placeholder: homepage hero: “Find the right course. Not just any course.”](/images/projects/coursecorrect/cover-01-home.webp)

## Architecture & System Design

The production shape is a small GCP system with a clear boundary between **collection**, **editorial extraction**, and **user-facing API/UI**.

![CourseCorrect architecture: providers to scrape jobs, GCS, Gemini extraction, Cloud SQL, and Next.js/Hono API with Firebase Auth and Vertex AI](/images/projects/coursecorrect/architecture.webp)

- **Client:** Next.js App Router UI (MUI). Owns search UX, detail pages, subjects, saved list, and the Cora chat panel. Talks to the 1.5 REST/SSE API.
- **Server / API:** Hono on Node. Hybrid search, resource detail, Firebase→JWT exchange, chat streaming with RAG context, usage limits. Shared Drizzle schema with the scraper so types are not duplicated.
- **Data:** Two layers: raw extraction JSON keyed to GCS HTML, and normalized `learning_resources` that power every user-facing query. Soft-delete via `is_active` so incomplete crawls never wipe the catalogue. Search uses a weighted `tsvector` trigger plus 768-d Vertex embeddings (HNSW).
- **Background jobs:** Cloud Scheduler triggers per-provider Cloud Run Jobs. Job 1 only fetches and stores HTML (rate-limited, retries). Job 2 is provider-agnostic extraction + upsert. Failed or dry runs skip stale-marking so a partial crawl cannot deactivate the world.
- **Integrations:** Firebase Auth (unchanged from v1), Vertex AI (embeddings + Gemini), Impact affiliate URL templates, O\*NET-grounded career insight generation (pipeline; on-demand UI still evolving).

## Tech Stack & Rationale

| Layer      | Choice                                                | Why                                                                                                                                                                                                                             |
| ---------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frontend   | Next.js 15 + React 19 + MUI                           | App Router SSR/SSG for SEO-heavy catalogue pages; React’s ecosystem fits a solo full-stack pace better than Angular’s heavier app model; MUI covers dense product UI (filters, lists, theming) without building a design system |
| Auth       | Firebase Auth (+ NextAuth bridge)                     | Keep v1 accounts; exchange to API JWTs for saved/chat                                                                                                                                                                           |
| API        | Hono + `@hono/node-server`                            | TypeScript-first, built-in SSE, small cold-start surface on Cloud Run                                                                                                                                                           |
| ORM / DB   | Drizzle + Cloud SQL Postgres 18                       | One system for rows, FTS (`tsvector`), and vectors (`pgvector`); replaced MongoDB Atlas + Qdrant                                                                                                                                |
| Scraper    | Crawlee + Playwright                                  | Browser lifecycle, retries, and rate limits for real provider pages                                                                                                                                                             |
| HTML store | GCS                                                   | Cheap durable snapshots; re-extract without re-scraping                                                                                                                                                                         |
| Extraction | Gemini 2.5 Flash (`responseSchema`) + JSON-LD overlay | Structured fields at low per-page cost; Schema.org Course markup overrides ratings/duration/language when present                                                                                                               |
| Embeddings | Vertex `text-embedding-004` (768-d)                   | Same GCP project/billing; HNSW cosine for semantic recall                                                                                                                                                                       |
| Hosting    | Cloud Run + Scheduler + Secret Manager                | Job/API/frontend in one ops model; secrets out of env files                                                                                                                                                                     |

Skipped on purpose for 1.5: a separate search SaaS, a headless CMS for catalogue content, and paywalled personalization (deferred to 2.0). The constraint was a small founding team that needed control over data quality and monthly run cost more than platform abstraction.

## Engineering Trade-offs

1. **Editorial layer over aggregator mirror.** Storing provider marketing copy verbatim is the easy path and the undifferentiated one. AI summaries, normalized skills/levels/durations, and a user-meaningful type taxonomy cost extraction spend and prompt iteration, but they are the product moat versus Class Central-style mirrors and versus chatbots that invent stale lists.

2. **Two-job scrape vs scrape-and-parse in one pass.** Decoupling HTML collection from Gemini extraction means prompt improvements re-run on GCS without touching providers again (“no selector maintenance” as a design goal for the editorial fields). The cost is operational complexity (two job types, run status, stale marking rules) and temporary raw rows without `extracted_data`.

3. **Postgres consolidation vs specialized stores.** Moving off MongoDB Atlas (~CAD $70/mo alone in the prior setup) plus Qdrant into one Cloud SQL instance simplified ops and cut vendor sprawl. The trade-off is owning FTS + vector tuning yourself (weights, HNSW, embedding backfills) and accepting that a mis-sized instance shows up as a single bill line, worth watching as the catalogue grows.

4. **Hybrid ranking weights chosen for relevance, not fashion.** Implemented score blends keyword and semantic signals with a keyword-only fallback when embeddings are missing. Docs and code drifted on exact coefficients during iteration; the principle that mattered was: never fail closed to empty results when vectors are cold, and never rank only on marketing popularity.

5. **Soft-delete + conservative stale marking.** Auto hard-delete is tempting for “freshness.” We soft-deactivate only after `completed`/`partial` runs, never after `failed` or dry-run subsets. That protects SEO URLs and saved items at the cost of occasional zombie rows until a clean full run.

6. **What we deferred.** LinkedIn/profile-based roadmaps, subscriptions, deep hierarchy navigation (specialization → child courses), and perfect provider coverage (Skillshare and others still opportunistic). Also known data-quality debt on some `duration_hours` for long programs. That is fixable, but not something to hide in a portfolio write-up.

```ts
// Soft-delete invariant: every user-facing catalogue query filters active rows.
// (Illustrative; real queries live in the Hono resources/search handlers.)
.where(eq(learningResources.isActive, true))
```

## Key Features

- **Hybrid catalogue search:** Keyword + semantic ranking with filters (provider, type, level, language, free, certificate) and sorts (relevance, rating, reviews, duration, newest). Cursor pagination avoids offset drift.
- **AI-normalized detail pages:** Plain-English summaries and skills aimed at decision-making, not brochure copy; enroll CTA prefers Impact `affiliate_url`, falls back to canonical `source_url`.
- **Cora (RAG chat):** SSE streaming assistant with catalogue retrieval beyond the on-screen set; daily query caps for signed-in and anonymous users so Vertex spend stays bounded.
- **Subjects / topics:** SEO topic pages backed by the topic catalogue and hybrid search (join-table density still intentionally incomplete).
- **Saved courses + auth:** Firebase identities, backend JWT, bookmarks that survive the 1.5 data migration path (including legacy URL / `legacy_mongo_id` compatibility work).
- **Ingestion observability:** Per-URL run results (outcome, error type, GCS snapshot key) so scrape failures are diagnosable instead of silent catalogue rot.

![Placeholder: search results + Cora panel on /search](/images/projects/coursecorrect/cover-02-search.webp)

![Placeholder: course detail with AI summary / skills / enroll CTA](/images/projects/coursecorrect/cover-03-course-detail.webp)

![Optional: side-by-side “CourseCorrect vs ChatGPT” marketing section from the homepage](/images/projects/coursecorrect/feature-vs-chatgpt.webp)

## Outcome

CourseCorrect is live at [coursecorrect.fyi](https://coursecorrect.fyi): a working discovery product with real provider coverage, affiliate monetization, and an AI assistant wired to catalogue data, not a demo.

**Credible engineering outcomes (no vanity growth metrics):**

- Owned the 1.5 rebuild end to end: provider scrape → GCS → Gemini extract → Postgres (FTS + pgvector) → hybrid search and catalogue RAG.
- Replaced a Class Central-dependent / multi-store data path with direct provider collection and a single Postgres system for relational data, full-text search, and vectors.
- Built a re-runnable editorial pipeline (GCS HTML → Gemini → normalized catalogue) designed for monthly refresh and prompt iteration.
- Shipped hybrid search and catalogue-RAG chat on that foundation, with auth and saved courses preserved across the rebuild.
- Kept GCP shape intentionally boring: Cloud Run services/jobs, Scheduler, Secret Manager, Firebase, operable by a small team.

**Next**

- Finish any remaining legacy → 1.5 cutover and dual-deploy cleanup.
- Fix duration normalization for long programs before leaning on duration sort.
- Deepen topic-to-resource linking for subject pages.
- Migrate Postgres from always-on Cloud SQL to Neon (scale-to-zero). Measured API traffic is mostly idle, so paying for a full Cloud SQL instance is the main leftover cost; Neon Launch is the planned fit without rewriting the app (TCP `DATABASE_URL` cutover).
- Only then invest in 2.0 personalization (profiles, LinkedIn, roadmaps) on top of a trustworthy catalogue.

Live product: [coursecorrect.fyi](https://coursecorrect.fyi).
