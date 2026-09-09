---
title: "iamankurj.com Personal Site Revamp"
summary: "A Next.js personal brand site with a portable markdown content pipeline, typed frontmatter, and a /tech information architecture built to scale into fitness and finance without a CMS."
publishedAt: "2026-09-09"
images:
  - "/images/projects/iamankurj-com/cover-01-home.jpg"
  - "/images/projects/iamankurj-com/cover-02-experience.jpg"
  - "/images/projects/iamankurj-com/cover-03-project-detail.jpg"
link: "https://iamankurj.com"
draft: false
---

## Overview

[iamankurj.com](https://iamankurj.com) is my personal site — rebuilt from a legacy Once UI app into a clearer product: one domain that can hold engineering work, side projects, and later fitness/finance writing without collapsing into a grab-bag blog.

The audience for *this* case study is hiring managers and clients evaluating how I approach product engineering: information architecture, content systems, UI system leverage, and explicit trade-offs under solo-maintainer constraints.

Goals for the revamp:

- Present experience and projects as credible engineering work, not a résumé dump.
- Make adding a project as cheap as dropping a Markdown file — no CMS, no deploy ceremony beyond git.
- Keep the content layer portable so the same files can feed another Next.js app (e.g. MUI) later.
- Namespace tech under `/tech/*` so life pillars (`/fitness`, `/finance`) can grow beside it without URL collisions.

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

- **Routing / IA:** App Router route groups under `(main)`. Tech surfaces live at `/tech/experience` and `/tech/projects` (plus `[slug]`). Content folders are *not* mirrored under `app/` — URL namespace ≠ filesystem namespace.
- **Content kit:** `getCollection` / `getEntry` read `.md` via `fs` + `gray-matter`, validate frontmatter with Zod, derive `slug` from the filename, sort by `publishedAt`, and honor `draft` (hidden in production).
- **Link contract:** On-site markdown links must be root-relative (`/tech/...`). Relative `.md` paths and dangerous URL schemes fail at load time so bad authoring doesn’t ship quietly.
- **Rendering:** Plain Markdown + GFM (`react-markdown` / `remark-gfm`) mapped to Once UI (`Text`, `HeadingLink`, `Media`, `SmartLink`, lists, code blocks). Layout chrome (title, date, external CTA) stays in React pages — not in the markdown file.
- **Experience data:** Career timeline/testimonials remain structured TypeScript modules for now (rich nested content); projects use markdown because case studies are long-form and change independently.

![System diagram: markdown files flow through the content kit to list and detail routes, then the Once UI markdown adapter](/images/projects/iamankurj-com/architecture.png)

## Tech Stack & Rationale

| Layer           | Choice                                              | Why                                                                     |
| --------------- | --------------------------------------------------- | ----------------------------------------------------------------------- |
| Framework       | Next.js 16 (App Router)                             | File routes, SSG for project pages, solid TypeScript DX for a solo site |
| Language        | TypeScript                                          | Safer refactors as collections and schemas grow                         |
| UI              | Once UI (`@once-ui-system/core`)                    | Ship a coherent visual system without designing every primitive         |
| Content         | Markdown + gray-matter + Zod                        | Editable without a CMS; invalid posts fail loudly                       |
| Markdown render | react-markdown + remark-gfm                         | Portable body string; tables/code without MDX lock-in                   |
| Tests           | Vitest (+ Testing Library for the markdown adapter) | Loader, schemas, link lint, and path helpers stay regression-safe       |
| Hosting         | Static-friendly Next deploy                         | Project pages prerender from `generateStaticParams`                     |

Skipped on purpose: a headless CMS, MDX-in-content (React in the file), and a separate design-system package. Those add process cost before the site has enough editors or page types to justify them.

## Engineering Trade-offs

1. **Markdown over MDX for case studies** — MDX would let me embed custom React mid-article, but it couples content to this UI kit and complicates reuse on an MUI site. Interactive or one-off UI stays in route components; prose stays portable. Upgrade path: same `body` string, different renderer.

2. **Filesystem content over a CMS** — For a single author, git + Markdown is the workflow. The cost is no non-dev editing UI. The gain is versioning, PR review, and zero vendor lock-in. Zod + link lint replace “CMS required fields” with build-time guarantees.

3. **`/tech` prefix now, not later** — Renaming routes after SEO and inbound links exist is expensive. Establishing `/tech/experience` and `/tech/projects` early keeps fitness/finance free at the root and matches how I pitch the brand: engineering is one pillar, not the whole site.

4. **Once UI as accelerator, not identity** — Using a system ships faster and keeps density consistent. The risk is “template look.” Mitigations: restrained composition, content-driven project pages, and a content kit that isn’t Once-specific so the site can evolve visually without rewriting every case study.

5. **Drafts via frontmatter, not separate folders** — `draft: true` keeps WIP next to published files. Production omits drafts; local/dev can still preview. Simpler than `content/projects/_drafts/` until there are many authors.

## Key Features

- **File → page pipeline:** Add `content/projects/<slug>.md` → list card + `/tech/projects/<slug>` after build (see [Projects](/tech/projects)).
- **Typed frontmatter:** `title`, `summary`, `publishedAt`, `images`, `link`, `draft` validated before a page can render.
- **Case study chrome + body split:** Metadata drives cards, SEO, and CTAs; Markdown owns narrative depth (architecture, stack, trade-offs).
- **Safe linking rules:** Root-relative on-site paths; absolute `https://` / `mailto:` off-site; reject `./file.md`-style mistakes at load.
- **Experience surface:** Structured [Experience](/tech/experience) timeline and testimonials for hiring-context storytelling alongside projects.

## Outcome

Shipped a revamp foundation where engineering content is structured for credibility: clear IA, a reusable content kit, and case studies that emphasize system design and trade-offs — the same conversation I’d have in a contracting engagement.

**What “done” means for this iteration**

- Home, experience, and projects list/detail live under the intended URLs.
- At least one real project entry (this site) exercises every frontmatter field and the markdown renderer end-to-end.
- Content authoring docs and loader contracts exist so the next project file is mechanical, not architectural.

**Next**

- Replace image placeholders below with real captures.
- Add CourseCorrect and other product case studies with the same template.
- Extend the same loader to `/fitness` and `/finance` when those pillars are ready.

Live site: [iamankurj.com](https://iamankurj.com).

### Image placeholders (replace under `public/`)

| Path                                                         | Intended shot                                          |
| ------------------------------------------------------------ | ------------------------------------------------------ |
| `/images/projects/iamankurj-com/cover-01-home.jpg`           | Home hero / first viewport (desktop)                   |
| `/images/projects/iamankurj-com/cover-02-experience.jpg`     | Experience page — timeline or testimonials             |
| `/images/projects/iamankurj-com/cover-03-project-detail.jpg` | A project detail page with markdown body               |
| `/images/projects/iamankurj-com/architecture.png`            | Simple diagram matching the flow in Architecture above |

```ts
// Content entry shape after load (simplified) — portable across UI kits.
type ContentEntry = {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt: string; // YYYY-MM-DD
    images: string[];
    link?: string;
    draft: boolean;
  };
  body: string; // markdown, frontmatter stripped
};
```
