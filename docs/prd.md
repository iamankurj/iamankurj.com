# Product Specification Document: Personal Website Revamp

## 1. Project Overview & Rationale

### Objective

Redesign [iamankurj.com](https://www.iamankurj.com/) to serve as a cohesive personal brand hub. The site must balance a high-rigor technical portfolio with personal passions (vocal training, finance, fitness), presenting a warm, authentic, and grounded narrative without relying on superficial hype or "buzzwords."

### Architectural Decision: Single-Domain Sub-paths (`/tech/work`, `/tech/hustle`)

* **Decision:** Use single-domain sub-paths (`[iamankurj.com/tech/](https://iamankurj.com/tech/)...`) rather than separate subdomains (`tech.iamankurj.com`).
* **Rationale:** Maximizes root-domain SEO authority, maintains cross-site analytics simplicity, and offers a unified, polished user experience without redirecting users off-site.

### Design & Tone Rationale

* **Tone:** Warm, relatable, pragmatic, and grounded in long-term discipline.
* **Refinement:** Replaced playful catchphrases ("Vocal Vibes", "Tech Tracks", "Finance Fanatic", "Fit Frenzy") with clean, direct descriptions that explicitly convey core philosophies:
* **Product Engineering over Over-Engineering:** Solving real-world problems with practical, high-quality code.
* **Singer at Heart:** An approachable, authentic journey in vocal craft, tailored for adult late-starters via [Gaayak.org](https://gaayak.org).
* **Evidence-Based Finance & Sustainable Fitness:** No quick fixes, gimmicks, or fad trends; focused on long-term consistency.



---

## 2. Global Metadata & SEO Configuration

```yaml
Browser Tab Title: "Ankur Jain | Product Engineer, Builder & Singer at Heart"
Meta Description: "Personal site of Ankur Jain. Product Engineer with 10+ years of experience building scalable tools, creator of CourseCorrect.fyi, and founder of Gaayak.org."
OG Title: "Ankur Jain — Product Engineer & Builder"
OG Description: "10+ years of engineering experience, vocal learning resources, and practical approaches to software, finance, and fitness."
Favicon: "/favicon.ico"
Language: "en"

```

---

## 3. Page Structure & Copy Specifications

### 3.1 Homepage (`/`)

#### Layout & Navigation Bar

* **Logo/Brand:** Ankur Jain
* **Header Links:**
* `Engineering` (`/tech/work`)
* `Projects` (`/tech/hustle`)
* `Gaayak` (`[https://gaayak.org](https://gaayak.org)` - External)
* `Writing` (`/writing`)



#### Section 1: Hero

* **Header:** Hi, I'm Ankur.
* **Sub-headline:** Product Engineer, Builder, and Singer at Heart.
* **Bio Copy:**
> "I’m a product engineer with over 10 years of experience crafting systems that solve real-world problems. I focus on practical architecture, long-term stability, and delivering value without over-engineering. Outside of software, I’m building a resource for late-starter singers and applying a balanced, long-term approach to fitness and personal finance."


* **Primary CTAs:**
* Button 1: `[ View Engineering & Experience ]` $\rightarrow$ Target: `/tech/work`
* Button 2: `[ Explore Projects ]` $\rightarrow$ Target: `/tech/hustle`



#### Section 2: Core Pillars (4-Card Grid Layout)

* **Card 1: Software Engineering & Products**
* **Title:** Product Engineering & Architecture
* **Description:** 10+ years of software experience, practical system design choices, and shipped products like CourseCorrect.fyi.
* **Link Title/CTA:** `Explore Work & Projects →`
* **Target:** `/tech/work`


* **Card 2: Singing & Voice (Gaayak)**
* **Title:** Gaayak — Vocal Craft for Late-Starters
* **Description:** Building a resource and structured path for adults navigating the mechanics, mindset, and practice of learning to sing.
* **Link Title/CTA:** `Visit Gaayak.org ↗`
* **Target:** `[https://gaayak.org](https://gaayak.org)` (Opens in new tab)


* **Card 3: Personal Finance**
* **Title:** Evidence-Based Personal Finance
* **Description:** Thoughtful, sustainable wealth management. Focused on long-term discipline, scientific principles, and avoiding speculation or quick fixes.
* **Link Title/CTA:** `Read Writing →`
* **Target:** `/writing?tag=finance`


* **Card 4: Fitness & Well-being**
* **Title:** Sustainable Fitness & Lifestyle
* **Description:** Physical and mental health built around long-term habits, natural movement, strength training, and activities you genuinely enjoy.
* **Link Title/CTA:** `Read Writing →`
* **Target:** `/writing?tag=fitness`



#### Section 3: Footer

* **Copyright:** `© 2026 Ankur Jain. Built with Next.js & Once UI.`
* **Social Links:** LinkedIn, GitHub, X (Twitter), YouTube.

---

### 3.2 Engineering Sub-path (`/tech/*`)

*Note: Uses the Once UI Magic Portfolio layout style.*

#### Header Navigation (`/tech/*`)

* `← Back to Main Site` (`/`)
* `Work` (`/tech/work`)
* `Hustle` (`/tech/hustle`)

#### Page: Engineering Work (`/tech/work`)

* **Hero Title:** Software Engineering & Experience
* **Tagline:** 10+ years of engineering systems, solving complex architectural challenges, and delivering practical quality.
* **Content Components:**
* **Career Timeline:** Detailed chronological breakdown of software roles, responsibilities, impact, and technology stacks over the last decade.
* **Core Competencies:** System Architecture, Distributed Systems, API Design, Performance Optimization, Product UI/UX.



#### Page: Projects & Side-Hustles (`/tech/hustle`)

* **Hero Title:** Projects & Product Experiments
* **Featured Project Case Study: CourseCorrect.fyi**
* **Overview:** Interactive career and course correction tool designed to help users navigate professional transitions.
* **Architecture & System Design:** System diagram, state management flow, and data handling setup.
* **Tech Stack & Rationale:** Framework choice (e.g., Next.js/TypeScript), backend database design, hosting, and performance tuning.
* **Engineering Trade-offs:** Detailed explanation of trade-offs made to keep the system simple, maintainable, and efficient without over-engineering.



---

## 4. Technical Stack & Implementation Guidelines for Cursor/IDE

* **Framework:** Next.js (App Router preferred for sub-path routing).
* **Styling & UI Kit:** Once UI Magic Portfolio components / Tailwind CSS.
* **Routing Configuration:**
* `/` $\rightarrow$ `app/page.tsx` (Root Homepage)
* `/tech/work` $\rightarrow$ `app/tech/work/page.tsx`
* `/tech/hustle` $\rightarrow$ `app/tech/hustle/page.tsx`
* `/writing` $\rightarrow$ `app/writing/page.tsx`


* **Accessibility & UX:**
* High contrast ratios for dark theme legibility.
* External links (`gaayak.org`) must explicitly set `target="_blank"` and `rel="noopener noreferrer"`.
* Fully responsive 1-column mobile breakdown for card grids.
