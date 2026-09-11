# Technical Specification: Experience Page Revamp (`/tech/experience`)

## 1. Objective & Positioning

Refactor the Experience page to appeal directly to **engineering managers, technical recruiters, and prospective contracting clients**. The page must frame Ankur Jain's 10+ years of software history in terms of **business impact, technical ownership, system scalability, and engineering quality** rather than basic job descriptions.

---

## 2. Page Structure & Copy Specifications

### 2.1 Hero & Summary Section

* **Page Title:** `Career History`
* **Sub-headline:** 10+ years building resilient microservices, high-scale backend architectures, and user-facing products.
* **Hero Lead:** Senior Product & Backend Engineer with a proven track record of leading mission-critical initiatives at high-growth enterprise SaaS platforms (Flybits) and big tech (Meta, Morgan Stanley, Credit Suisse).


### 2.2 Impact Metrics Bar (Top Stat Strip)

Display a 4-column key metrics grid directly below the summary to give recruiters immediate visual proof of impact:

1. **900M+ Users:** Developed features impacting over 900M users across Messenger & Instagram Direct at Meta.
2. **4+ Yrs GoLang:** Built and maintained distributed microservices in Go, Postgres, AWS, and Kubernetes.
3. **98% Manual Savings:** Architected dynamic campaign lifecycle automation at Flybits for enterprise clients.
4. **0 QA Bugs:** Delivered end-to-end encryption workflows at Meta with 100% critical path coverage and zero post-release QA bugs.

---

### 2.3 Social Proof / Testimonials Block

Keep the existing custom carousel we have. Try to see how a highlighted blockquote with clean border styling to break up the text looks.

---

### 2.4 Work Experience Breakdown (Chronological)

**label**: {jobTitle}, {company} (for example: Senior Software Engineering Consultant, Flybits)

**description**:
"{dateFrom} - {dateTo}"

**state**: "defaut" (since all are past, none is active at this time, maybe it should come from the data though, for future active one)

**marker**:
Role focus

**children**:
List of comma separated tech stack tags (with variant info perhaps?), followed by:
List of key achievements (perhaps bulleted)

#### 1. Flybits | Senior Software Engineering Consultant

* **Dates:** Apr 2023 – Dec 2025
* **Role Focus:** Engineering Leadership, Architecture & Client Delivery
* **Tech Stack Tags:** `GoLang`, `Microservices`, `System Design`, `UI/UX Strategy`
* **Key Achievements:**
* Served as **Engineering Lead** for the **Flow Visualizer**, a mission-critical platform upgrade enhancing marketer workflows and platform usability.
* Led technical development for the **Merchant Offers Solution**, enabling local merchants to deliver targeted rewards programs.
* Influenced product design and UX strategy by bridging cross-functional collaboration between engineering and the Solutions team.
* Spearheaded discovery and architecture for core content positioning and ranking systems.
* Mentored junior engineers on clean code practices, system efficiency, and architectural patterns.



#### 2. Meta | Server Engineer (Well-Being Engineering)

* **Dates:** Feb 2022 – May 2023
* **Role Focus:** Security, Scale & Privacy Infrastructure
* **Tech Stack Tags:** `Hack/PHP`, `End-to-End Encryption`, `Distributed Systems`
* **Key Achievements:**
* Owned mission-critical **End-to-End Encryption (E2EE)** projects across Facebook Messenger and Instagram Direct platforms.
* Architected safety and well-being features for Messenger group chats and community messaging.
* Maintained exceptionally high code quality standards: achieved **>80% overall test coverage**, **100% significant code path coverage**, and **0 post-release QA bugs**.
* Recognized as a **Top 25% Privacy Contributor** at Meta and a top Docuthon contributor, and a dedicated mentor for engineering interns within the Well-Being organization.



#### 3. Flybits | Senior Backend Engineer

* **Dates:** May 2019 – Jan 2022
* **Role Focus:** Distributed Backend & Data Lifecycles
* **Tech Stack Tags:** `GoLang`, `PostgreSQL`, `MongoDB`, `AWS`, `Kubernetes`, `Docker`
* **Key Achievements:**
* Owned end-to-end design and implementation of multi-service backend features.
* Built dynamic location-based content and push notification lifecycle automation, reducing manual setup time by **98% for Flybits' largest enterprise client**.
* Scaled push notification systems to support **6M+ users per campaign**, implementing automatic failure recovery, starvation prevention, and resumption mechanisms.
* Designed Templatization 2.0 to simplify user journey creation across the platform.
* Mentored junior engineers on system design principles, clean code quality, domain knowledge, and testing best practices.



#### 4. Morgan Stanley | Senior Associate Developer (Collateral Management)

* **Dates:** Aug 2017 – Apr 2019
* **Role Focus:** Enterprise Data Warehousing & Regulatory Compliance
* **Tech Stack Tags:** `Java 8`, `IBM DB2`, `Sybase`, `Scala`
* **Key Achievements:**
* Developed core software for **OneSource** (enterprise Collateral Management data warehouse) and implemented systems for **Uncleared Margin Rules (UMR) Phase 4** regulatory compliance.



#### 5. Credit Suisse | Technical Analyst

* **Dates:** Jul 2015 – Jul 2017
* **Role Focus:** Enterprise Full-Stack Applications
* **Tech Stack Tags:** `Java 8`, `Spring Boot`, `JavaScript (ExtJS 6)`, `MongoDB`, `C#.NET`
* **Key Achievements:**
* **Prime Services IT:** Developed Client Workstation, a consolidated management portal for CSRs using JavaScript (ExtJS 6), Java 8 (Spring Boot), and MongoDB.
* **Trade Management:** Maintained and enhanced the Front Office Cash Sourcing (FOCash) system using C#.NET, VBA, and Java.



#### 6. Built.io (Raw Eng.) | Software Engineering Intern

* **Dates:** Jan 2015 – Jun 2015
* **Role Focus**: Backend Engineering & Platform Infrastructure
* **Tech Stack Tags**: `Node.js`, `JavaScript`, `Flatiron`, `React`, `Asynchronous I/O`
* **Key Achievements:**
* Worked on the core **Mobile Backend-as-a-Service (MBaaS)** product using Node.js (Flatiron framework) and React.
* Gained foundational experience with non-blocking I/O, event loop mechanics, and asynchronous architecture in JavaScript.

---

## 3. Once UI Component Implementation Instructions

When building this page in Next.js, Cursor should map the elements to the following [Once UI components](https://docs.once-ui.com/once-ui/basics/components):

1. **Page Title Animation:**
Wrap the main page heading in `<LetterFx speed="medium" trigger="instant">Engineering Experience</LetterFx>`.
2. **Impact Metrics Bar:**
Use a `<Grid columns="4" gap="m" mobileColumns="1">` containing 4 `<Card padding="m" radius="m">` elements with prominent typography for numbers.
3. **Testimonial Block:**
Wrap the quote in `<BlockQuote padding="l" radius="l">` with centered text.
4. **Experience Timeline:**
Use `<Timeline>` or `<AccordionGroup>` to nest each position. Inside each entry:
* Position title and dates aligned using `<Flex justifyContent="space-between">`.
* Role bullet points formatted cleanly using `<List>`.
* Tech stack lists rendered as a flex container of `<Tag size="s" variant="neutral">` chips.


5. **Footer & Back Links:**
Current footer is good.