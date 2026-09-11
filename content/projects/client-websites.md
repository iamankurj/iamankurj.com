---
title: "Client marketing sites: NTA Therapy & Imad Al Rifat"
summary: "Two live client websites shipped end to end: culturally attuned therapy practice site for Ontario, and a Dubai scaffolding B2B brochure site. Scope to what the business needed, pick the stack that fits, launch."
publishedAt: "2025-11-01"
order: 3
images:
  - "/images/projects/client-websites/cover-01-nta-home.webp"
  - "/images/projects/client-websites/cover-02-imad-home.webp"
  - "/images/projects/client-websites/cover-03-responsive.webp"
draft: false
---

## Overview

Freelance delivery for two real businesses: [NTA Therapy & Associates](https://www.ntatherapy.com/) (virtual, culturally attuned psychotherapy across Ontario) and [Imad Al Rifat Scaffolds Trading LLC](https://imadalrifat.ae/) (scaffolding and formwork sales/rental in Dubai).

Neither needed a product platform. Both needed a clear public site: trust, services or catalogue clarity, contact paths, and something they could own without a CMS tax. I owned design-in-code, content structure, responsive UI, basic SEO, and launch.

**What this write-up focuses on:** choosing the right thin stack per client, shipping under scope, and leaving maintainable marketing sites. Not an architecture deep-dive. For heavier systems work, see [CourseCorrect](/tech/projects/coursecorrect) and [iamankurj.com](/tech/projects/iamankurj-com).

![Placeholder: NTA Therapy homepage hero](/images/projects/client-websites/cover-01-nta-home.webp)

![Placeholder: Imad Al Rifat homepage hero](/images/projects/client-websites/cover-02-imad-home.webp)

## The two sites

### NTA Therapy ([ntatherapy.com](https://www.ntatherapy.com/))

Practice site for adults 18+ seeking trauma-informed, culturally attuned care (English / Gujarati / Hindi), with virtual sessions across Ontario and a clear path to book.

- Multi-page marketing IA: home, about, services, FAQ, contact, privacy
- Calm visual language matched to the clinical brand
- Booking and contact CTAs wired to the practice’s real workflows (Jane App / email / phone as provided)
- Next.js + MUI so content sections stay structured and easy to extend

### Imad Al Rifat ([imadalrifat.ae](https://imadalrifat.ae/))

B2B brochure for a scaffolding and formwork trading company: product range, rental value props, partners, and a direct sales contact path in Dubai.

- Compact brochure IA: home narrative, why rent, product list, about, contact
- Bilingual-aware branding (English primary; Arabic present in the logo lockup)
- Astro + Tailwind for a fast static export with sitemap support
- Emphasis on clarity and trust over interactive product UX

![Placeholder: desktop + mobile responsive pair (either site or both)](/images/projects/client-websites/cover-03-responsive.webp)

## Tech Stack & Rationale

| Site | Stack | Why |
| ---- | ----- | --- |
| NTA Therapy | Next.js 16 + React 19 + MUI | App Router pages, component density for a longer narrative marketing site, familiar React delivery |
| Imad Al Rifat | Astro 5 + Tailwind 4 | Mostly static content; ship HTML fast, keep the dependency surface small |
| Both | TypeScript where it pays off, sitemap / meta basics | Indexable brochure pages without a CMS |

Skipped on purpose for both: headless CMS, auth, dashboards, and custom booking backends. The clients already had (or did not need) those systems elsewhere.

## Engineering Trade-offs

1. **Stack per client, not one house style.** NTA’s longer, section-heavy marketing site fit Next + MUI. Imad’s brochure fit Astro static. Forcing one stack would have optimized for my convenience, not theirs.

2. **Scope discipline over portfolio flex.** These are marketing sites. Overbuilding (CMS, animations for their own sake, custom admin) would raise cost and handoff risk. The win is a live URL that matches the brief.

3. **Content structure in code.** Until a client needs non-dev editors, typed sections and markdown/static pages beat introducing a CMS. Hand-off is git + clear page files, not a training workshop.

4. **SEO as basics, not a campaign.** Titles, descriptions, sensible headings, sitemap where it helps. Enough for a new local/B2B site to be findable; not a growth-marketing engagement.

## Outcome

Two production sites live on the clients’ domains:

- [NTA Therapy & Associates](https://www.ntatherapy.com/)
- [Imad Al Rifat Scaffolds Trading LLC](https://imadalrifat.ae/)

**What this demonstrates**

- End-to-end client delivery: brief → IA → UI → launch
- Judgment about when a thin static or marketing site is the right product
- Comfort shipping in more than one frontend stack

**Not claimed here**

- Backend platforms, data pipelines, or AI systems (see other projects for that)
