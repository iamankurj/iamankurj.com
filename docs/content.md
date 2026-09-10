# Content files

Markdown collections live under `content/<collection>/` (not under `app/`).

| Collection folder | Example site URL |
| --- | --- |
| `content/projects/slug.md` | `/tech/projects/slug` |

## Frontmatter

Validated by Zod in `src/lib/content/schemas.ts`. Unknown keys are ignored by Zod object parsing unless you extend the schema; prefer only the documented fields.

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | Card + detail heading |
| `summary` | yes | Card blurb + meta description |
| `publishedAt` | yes | `YYYY-MM-DD`; shown on the card; tiebreaker after `order` |
| `order` | no | Positive integer; lower appears first on `/tech/projects`. Default: after all explicitly ordered projects |
| `images` | no | Public paths; 1 → single frame, 2+ → carousel |
| `link` | no | Live product URL |
| `draft` | no | Default `false`; omitted from production listings when `true` |

## Body links (required contract)

On-site links must be **root-relative pathnames** (from the domain root), not filesystem paths to `.md` files.

| Allowed | Example |
| --- | --- |
| Site path | `[Projects](/tech/projects)` / `[Case study](/tech/projects/coursecorrect)` |
| In-page hash | `[Overview](#overview)` |
| Absolute URL | `[Live](https://coursecorrect.fyi)` |
| Email | `[Email](mailto:you@example.com)` |

| Not allowed | Why |
| --- | --- |
| `./slug.md`, `slug.md`, `../x` | Not mapped to routes; loader rejects them |
| `javascript:…`, `data:…` | Blocked as unsafe |

Enforcement: `assertMarkdownLinksAllowed` in `src/lib/content/lintMarkdownLinks.ts`, called from `load.ts` when reading an entry. Invalid links fail at load/build with the file path and href.

The renderer (`MarkdownBody`) also refuses dangerous schemes as defense in depth.

## HTML comments

Author-only notes may use HTML comments in the body:

```html
<!-- draft: true until cover images exist -->
```

`MarkdownBody` strips these before render (fenced code blocks are preserved). Do not use markdown `<!--` expecting it to show on the page.

## How pages use this

- List: `src/app/tech/projects/page.tsx` → `getCollection("projects")` + `ProjectCard`
- Detail: `src/app/tech/projects/[slug]/page.tsx` → `getEntry` + `MarkdownBody`
- Images: `ProjectMedia` renders nothing / single `Media` / `Carousel` from frontmatter `images` length

Add a file under `content/projects/` (see `iamankurj-com.md` as a full example), restart/rebuild, and it appears (non-draft in production).
