---
title: "iamankurj.com: Personal Site Revamp"
summary: "A Next.js personal brand site with a portable markdown content pipeline, typed frontmatter, and a /tech information architecture built to scale without a CMS."
publishedAt: "2026-09-09"
images:
  - "/images/projects/iamankurj-com/cover-01-home.jpg"
  - "/images/projects/iamankurj-com/cover-02-experience.jpg"
  - "/images/projects/iamankurj-com/cover-03-project-detail.jpg"
link: "https://iamankurj.com"
draft: false
---

## Overview

[iamankurj.com](https://iamankurj.com) is my personal site, rebuilt from a legacy Once UI app into a clearer product: one domain for engineering work and side projects, with room to grow into fitness and finance writing later, without becoming a grab-bag blog.

Source is public on GitHub: [iamankurj/iamankurj.com](https://github.com/iamankurj/iamankurj.com).

Goals for the revamp:

- Present experience and projects as credible engineering work, not a résumé dump.
- Make adding a project as cheap as dropping a Markdown file: no CMS, no deploy ceremony beyond git.
- Keep the content layer portable so the same files can feed another Next.js app (for example MUI) later.
- Namespace tech under `/tech/*` so other pillars can grow at the root without URL collisions.

## Architecture & System Design

The system is intentionally thin: static-first Next.js App Router pages, a filesystem content kit, and a UI-kit-specific markdown renderer.

```text
content/projects/*.md
        │
        ▼
src/lib/content/     (portable: paths, Zod schemas, loader, link lint)
        │
        ├─► /tech/projects           list (ProjectCard)
        └─► /tech/projects/[slug]    detail chrome + MarkdownBody
                                              │
                                              ▼
                                    Once UI component map
                                    (swap later for MUI)
```

- **Routing / IA:** App Router under `(main)`. Tech surfaces live at `/tech/experience` and `/tech/projects` (plus `[slug]`). Content folders are not mirrored under `app/`. URL namespace ≠ filesystem namespace.
- **Content kit:** `getCollection` / `getEntry` read `.md` via `fs` + `gray-matter`, validate frontmatter with Zod, derive `slug` from the filename, sort by `publishedAt`, and honor `draft` (omitted in production).
- **Link contract:** On-site markdown links must be root-relative (`/tech/...`). Relative `.md` paths and dangerous URL schemes fail at load time so bad authoring does not ship quietly.
- **Rendering:** Plain Markdown + GFM mapped to Once UI. Layout chrome (title, date, external CTA) stays in React pages, not in the markdown file. Multiple frontmatter images use a carousel; a single image stays a simple media frame.
- **Experience data:** Career timeline and testimonials remain structured TypeScript for nested content; projects use markdown because case studies are long-form and change independently.

![System diagram: markdown files flow through the content kit to list and detail routes, then the Once UI markdown adapter](/images/projects/iamankurj-com/architecture.png)

## Tech Stack & Rationale

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | Next.js 16 (App Router) | File routes, SSG for project pages, strong TypeScript DX |
| Language | TypeScript | Safer refactors as collections and schemas grow |
| UI | Once UI (`@once-ui-system/core`) | Coherent visual system without designing every primitive |
| Content | Markdown + gray-matter + Zod | No CMS; invalid posts fail loudly at load/build |
| Markdown render | react-markdown + remark-gfm | Portable body string; tables and code without MDX lock-in |
| Tests | Vitest (+ Testing Library for the markdown adapter) | Loader, schemas, and link rules stay regression-safe |
| Hosting | Static-friendly Next deploy | Project pages prerender from `generateStaticParams` |

Skipped on purpose: a headless CMS, MDX-in-content, and a separate design-system package. Those add process cost before the site has enough editors or page types to justify them.

## Engineering Trade-offs

1. **Markdown over MDX for case studies.** MDX would allow custom React mid-article, but it couples content to this UI kit and complicates reuse elsewhere. Interactive UI stays in route components; prose stays portable. Upgrade path: same `body` string, different renderer.

2. **Filesystem content over a CMS.** For a single author, git + Markdown is the workflow. The cost is no non-dev editing UI. The gain is versioning, PR review, and no vendor lock-in. Zod and link lint replace CMS “required fields” with build-time guarantees.

3. **`/tech` prefix now, not later.** Renaming routes after SEO and inbound links exist is expensive. Establishing `/tech/experience` and `/tech/projects` early keeps other pillars free at the root and keeps engineering as one brand pillar, not the whole site.

4. **Once UI as accelerator, not identity.** A system ships faster and keeps density consistent. The risk is a template look. Mitigations: restrained composition, content-driven project pages, and a content kit that is not Once-specific so the site can evolve visually without rewriting every case study.

5. **Drafts via frontmatter.** `draft: true` keeps WIP next to published files. Production omits drafts; local/dev can still preview. Simpler than a separate drafts tree until there are multiple authors.

## Key Features

- **File → page pipeline:** Add `content/projects/<slug>.md` → list card + `/tech/projects/<slug>` after build (see [Projects](/tech/projects)).
- **Typed frontmatter:** `title`, `summary`, `publishedAt`, `images`, `link`, and `draft` validated before a page can render.
- **Case study chrome + body split:** Metadata drives cards, SEO, and CTAs; Markdown owns narrative depth.
- **Multi-image carousel:** One image renders as a single frame; two or more use a carousel on list and detail.
- **Safe linking rules:** Root-relative on-site paths; absolute `https://` / `mailto:` off-site; reject filesystem-style `.md` links at load.
- **Experience surface:** Structured [Experience](/tech/experience) timeline and testimonials alongside projects.

## Outcome

Shipped a revamp where engineering content is structured for credibility: clear information architecture, a reusable content kit, and case studies that emphasize system design and trade-offs.

**Shipped in this iteration**

- Home, experience, and projects list/detail under the intended URLs.
- A portable content pipeline with validation, link linting, and SSG project pages.
- This case study as a live example of the same format future projects will use.

**Next**

- Additional product case studies (including CourseCorrect) on the same template.
- Extend the same loader to `/fitness` and `/finance` when those pillars are ready.

Live site: [iamankurj.com](https://iamankurj.com) · Source: [github.com/iamankurj/iamankurj.com](https://github.com/iamankurj/iamankurj.com)
