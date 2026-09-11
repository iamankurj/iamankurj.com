export type ExperienceTextSegment = {
  text: string;
  strong?: boolean;
};

export type ExperienceLine = {
  segments: ExperienceTextSegment[];
  subItems?: ExperienceLine[];
};

export type WorkTimelineState = "default" | "active";

export type WorkExperience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  roleFocus: string;
  tags: string[];
  /** Timeline marker state; omit or use `"default"` for past roles. */
  state?: WorkTimelineState;
  achievements: ExperienceLine[];
};

export type TestimonialAuthor = {
  name?: string;
  linkedInHref?: string;
};

export type TestimonialItem = {
  quote: string;
  author?: TestimonialAuthor;
};

export type ImpactMetric = {
  value: string;
  label: string;
  description: string;
};

/** Props for BlockQuote author/link; omits empty placeholders so nothing renders. */
export function testimonialAttribution(author?: TestimonialAuthor): {
  author?: { name: string };
  link?: { href: string; label: string };
} {
  const name = author?.name?.trim();
  const href = author?.linkedInHref?.trim();

  return {
    ...(name ? { author: { name } } : {}),
    ...(href ? { link: { href, label: "LinkedIn" } } : {}),
  };
}

/** Prefer strong heading; drop to body when a quote would overflow the fixed slide. */
export function testimonialQuoteVariant(
  quote: string,
): "heading-strong-s" | "body-default-m" {
  return quote.length > 140 ? "body-default-m" : "heading-strong-s";
}

export const experienceContent = {
  hero: {
    title: "Experience",
    subheadline:
      "10+ years building resilient microservices, high-scale backend architectures, and user-facing products.",
    lead: "Senior Product & Backend Engineer with a proven track record of leading mission-critical initiatives at high-growth enterprise SaaS platforms (Flybits) and big tech (Meta, Morgan Stanley, Credit Suisse).",
  },
  metrics: {
    items: [
      {
        value: "900M+",
        label: "Users",
        description:
          "Developed features impacting over 900M users across Messenger & Instagram Direct at Meta.",
      },
      {
        value: "4+",
        label: "Yrs GoLang",
        description:
          "Built and maintained distributed microservices in Go, Postgres, AWS, and Kubernetes.",
      },
      {
        value: "98%",
        label: "Manual Savings",
        description:
          "Architected dynamic campaign lifecycle automation at Flybits for enterprise clients.",
      },
      {
        value: "0",
        label: "QA Bugs",
        description:
          "Delivered end-to-end encryption workflows at Meta with 100% critical path coverage and zero post-release QA bugs.",
      },
    ] satisfies ImpactMetric[],
  },
  work: {
    title: "Career History",
    experiences: [
      {
        company: "Flybits",
        role: "Senior Software Engineering Consultant",
        startDate: "Apr 2023",
        endDate: "Dec 2025",
        roleFocus: "Engineering Leadership, Architecture & Client Delivery",
        tags: ["GoLang", "Microservices", "System Design", "UI/UX Strategy"],
        state: "default",
        achievements: [
          {
            segments: [
              { text: "Served as " },
              { text: "Engineering Lead", strong: true },
              { text: " for the " },
              { text: "Flow Visualizer", strong: true },
              {
                text: ", a mission-critical platform upgrade enhancing marketer workflows and platform usability.",
              },
            ],
          },
          {
            segments: [
              { text: "Led technical development for the " },
              { text: "Merchant Offers Solution", strong: true },
              {
                text: ", enabling local merchants to deliver targeted rewards programs.",
              },
            ],
          },
          {
            segments: [
              {
                text: "Influenced product design and UX strategy by bridging cross-functional collaboration between engineering and the Solutions team.",
              },
            ],
          },
          {
            segments: [
              {
                text: "Spearheaded discovery and architecture for core content positioning and ranking systems.",
              },
            ],
          },
          {
            segments: [
              {
                text: "Mentored junior engineers on clean code practices, system efficiency, and architectural patterns.",
              },
            ],
          },
        ],
      },
      {
        company: "Meta",
        role: "Server Engineer (Well-Being Engineering)",
        startDate: "Feb 2022",
        endDate: "May 2023",
        roleFocus: "Security, Scale & Privacy Infrastructure",
        tags: ["Hack/PHP", "End-to-End Encryption", "Distributed Systems"],
        state: "default",
        achievements: [
          {
            segments: [
              { text: "Owned mission-critical " },
              { text: "End-to-End Encryption (E2EE)", strong: true },
              {
                text: " projects across Facebook Messenger and Instagram Direct platforms.",
              },
            ],
          },
          {
            segments: [
              {
                text: "Architected safety and well-being features for Messenger group chats and community messaging.",
              },
            ],
          },
          {
            segments: [
              { text: "Maintained exceptionally high code quality standards: achieved " },
              { text: ">80% overall test coverage", strong: true },
              { text: ", " },
              { text: "100% significant code path coverage", strong: true },
              { text: ", and " },
              { text: "0 post-release QA bugs", strong: true },
              { text: "." },
            ],
          },
          {
            segments: [
              { text: "Recognized as a " },
              { text: "Top 25% Privacy Contributor", strong: true },
              {
                text: " at Meta and a top Docuthon contributor, and a dedicated mentor for engineering interns within the Well-Being organization.",
              },
            ],
          },
        ],
      },
      {
        company: "Flybits",
        role: "Senior Backend Engineer",
        startDate: "May 2019",
        endDate: "Jan 2022",
        roleFocus: "Distributed Backend & Data Lifecycles",
        tags: ["GoLang", "PostgreSQL", "MongoDB", "AWS", "Kubernetes", "Docker",],
        state: "default",
        achievements: [
          {
            segments: [
              {
                text: "Owned end-to-end design and implementation of multi-service backend features.",
              },
            ],
          },
          {
            segments: [
              {
                text: "Built dynamic location-based content and push notification lifecycle automation, reducing manual setup time by ",
              },
              {
                text: "98% for Flybits' largest enterprise client",
                strong: true,
              },
              { text: "." },
            ],
          },
          {
            segments: [
              { text: "Scaled push notification systems to support " },
              { text: "6M+ users per campaign", strong: true },
              {
                text: ", implementing automatic failure recovery, starvation prevention, and resumption mechanisms.",
              },
            ],
          },
          {
            segments: [
              {
                text: "Designed Templatization 2.0 to simplify user journey creation across the platform.",
              },
            ],
          },
          {
            segments: [
              {
                text: "Mentored junior engineers on system design principles, clean code quality, domain knowledge, and testing best practices.",
              },
            ],
          },
        ],
      },
      {
        company: "Morgan Stanley",
        role: "Senior Associate Developer (Collateral Management)",
        startDate: "Aug 2017",
        endDate: "Apr 2019",
        roleFocus: "Enterprise Data Warehousing & Regulatory Compliance",
        tags: ["Java 8", "IBM DB2", "Sybase", "Scala"],
        state: "default",
        achievements: [
          {
            segments: [
              { text: "Developed core software for " },
              { text: "OneSource", strong: true },
              {
                text: " (enterprise Collateral Management data warehouse) and implemented systems for ",
              },
              {
                text: "Uncleared Margin Rules (UMR) Phase 4",
                strong: true,
              },
              { text: " regulatory compliance." },
            ],
          },
        ],
      },
      {
        company: "Credit Suisse",
        role: "Technical Analyst",
        startDate: "Jul 2015",
        endDate: "Jul 2017",
        roleFocus: "Enterprise Full-Stack Applications",
        tags: ["Java 8", "Spring Boot", "JavaScript (ExtJS 6)", "MongoDB", "C#.NET",],
        state: "default",
        achievements: [
          {
            segments: [
              { text: "Prime Services IT:", strong: true },
              {
                text: " Developed Client Workstation, a consolidated management portal for CSRs using JavaScript (ExtJS 6), Java 8 (Spring Boot), and MongoDB.",
              },
            ],
          },
          {
            segments: [
              { text: "Trade Management:", strong: true },
              {
                text: " Maintained and enhanced the Front Office Cash Sourcing (FOCash) system using C#.NET, VBA, and Java.",
              },
            ],
          },
        ],
      },
      {
        company: "Built.io (Raw Eng.)",
        role: "Software Engineering Intern",
        startDate: "Jan 2015",
        endDate: "Jun 2015",
        roleFocus: "Backend Engineering & Platform Infrastructure",
        tags: ["Node.js", "JavaScript", "Flatiron", "React", "Asynchronous I/O",],
        state: "default",
        achievements: [
          {
            segments: [
              { text: "Worked on the core " },
              {
                text: "Mobile Backend-as-a-Service (MBaaS)",
                strong: true,
              },
              {
                text: " product using Node.js (Flatiron framework) and React.",
              },
            ],
          },
          {
            segments: [
              {
                text: "Gained foundational experience with non-blocking I/O, event loop mechanics, and asynchronous architecture in JavaScript.",
              },
            ],
          },
        ],
      },
    ] satisfies WorkExperience[],
  },
  testimonials: {
    title: "Testimonials",
    linkedInHref: "https://www.linkedin.com/in/iamankurj/",
    /** Fixed slide height (rem) so autoplay doesn’t jump between quote lengths. */
    slideMinHeight: 18,
    items: [
      {
        quote:
          "One of the brightest minds and one of the best engineers I worked with",
        author: { name: "", linkedInHref: "" },
      },
      {
        quote:
          "His tenacity, problem solving, technical abilities and commitment make him an invaluable team player",
        author: { name: "", linkedInHref: "" },
      },
      {
        quote: 'Never lacked dedication and always had "go-to" attitude',
        author: { name: "", linkedInHref: "" },
      },
      {
        quote:
          "Energetic, full of new ideas, and stakeholders appreciated working with him",
        author: { name: "", linkedInHref: "" },
      },
      {
        quote: "Delivered on multiple projects with great efficiency",
        author: { name: "", linkedInHref: "" },
      },
      {
        quote: "Exceeded expectations on many occasions",
        author: { name: "", linkedInHref: "" },
      },
      {
        quote:
          "Very proactive person who makes sure the job gets done and is always ready to share ideas openly and discuss through",
        author: { name: "", linkedInHref: "" },
      },
    ] satisfies TestimonialItem[],
  },
} as const;

export function experienceLinePlainText(line: ExperienceLine): string {
  return line.segments.map((segment) => segment.text).join("");
}
