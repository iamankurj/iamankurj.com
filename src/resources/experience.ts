export type ExperienceTextSegment = {
  text: string;
  strong?: boolean;
};

export type ExperienceLine = {
  segments: ExperienceTextSegment[];
  subItems?: ExperienceLine[];
};

export type WorkExperience = {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  items?: ExperienceLine[];
};

export const experienceContent = {
  tldr: {
    title: "TL;DR",
    items: [
      {
        segments: [
          {
            text: "10+ years of experience in the software industry, demonstrating strong problem-solving, technical, and interpersonal skills",
          },
        ],
      },
      {
        segments: [
          { text: "Developed features impacting over 900 million users (at Meta)" },
        ],
      },
      {
        segments: [
          {
            text: "4+ years of experience developing and maintaining scalable microservices in GoLang",
          },
        ],
      },
      {
        segments: [
          {
            text: "3+ years of experience developing backend applications with Java/J2EE, REST, and Spring Boot",
          },
        ],
      },
      {
        segments: [
          {
            text: "1 year of experience in UI development using ExtJS, JS, HTML, CSS, and Java backend",
          },
        ],
      },
    ] satisfies ExperienceLine[],
  },
  work: {
    title: "Work Experience",
    experiences: [
      {
        company: "Flybits",
        role: "Senior Software Engineering Consultant",
        location: "Canada",
        startDate: "Apr '23",
        endDate: "Dec 2025",
        items: [
          {
            segments: [{ text: "Engineering Lead", strong: true }, { text: " for" }],
            subItems: [
              {
                segments: [
                  { text: "Flow Visualizer", strong: true },
                  {
                    text: ": A mission-critical project central to enhancing marketer experience on the platform",
                  },
                ],
              },
              {
                segments: [
                  { text: "Merchant Offers Solution", strong: true },
                  {
                    text: ": A new project enabling local merchants to deliver personalized rewards programs efficiently to end users",
                  },
                ],
              },
            ],
          },
          {
            segments: [
              { text: "Technical Influence", strong: true },
              {
                text: ": Leveraging technical expertise to shape UX, UI, and product design decisions",
              },
            ],
          },
          {
            segments: [
              { text: "Collaboration", strong: true },
              {
                text: ": Partnering closely with the Solutions team to develop user experiences and flows for complex workflows",
              },
            ],
          },
          {
            segments: [
              { text: "Content Prioritization", strong: true },
              {
                text: ": Actively contributing to the discovery and design phases of a key feature impacting content positioning and ranking for users",
              },
            ],
          },
          {
            segments: [
              { text: "Coding & Reviews", strong: true },
              { text: ": Hands-on coding contributions and code reviews" },
            ],
          },
          {
            segments: [
              { text: "Mentorship", strong: true },
              {
                text: ": Mentoring junior engineers on coding practices, code quality, system design, and efficiency",
              },
            ],
          },
        ],
      },
      {
        company: "Meta",
        role: "Server Engineer, Remote - Well-Being Engineering",
        location: "Canada",
        startDate: "Feb '22",
        endDate: "May '23",
        items: [
          {
            segments: [
              { text: "Owned the team’s " },
              { text: "mission critical end-to-end encryption projects", strong: true },
              { text: " for Messenger and Instagram Direct" },
            ],
          },
          {
            segments: [
              {
                text: "Implemented new well-being features for Messenger group chat and community messaging",
              },
            ],
          },
          {
            segments: [
              { text: "More than " },
              { text: "80% overall test coverage", strong: true },
              { text: " and " },
              { text: "100% significant code coverage", strong: true },
              { text: " for the new code" },
            ],
          },
          {
            segments: [
              { text: "0 QA bugs", strong: true },
              { text: " identified in the new code" },
            ],
          },
          {
            segments: [
              { text: "Extensive cross-functional collaboration", strong: true },
              { text: " with several teams" },
            ],
          },
          {
            segments: [
              { text: "One of the " },
              { text: "top Docuthon contributors", strong: true },
              { text: " from the Well-Being org." },
            ],
          },
          {
            segments: [
              { text: "One of the " },
              { text: "top 25% privacy contributors", strong: true },
              { text: " at Meta" },
            ],
          },
          {
            segments: [
              { text: "Responsible for " },
              { text: "mentoring interns", strong: true },
              { text: " in the team" },
            ],
          },
        ],
      },
      {
        company: "Flybits",
        role: "Senior Backend Engineer",
        location: "Canada",
        startDate: "May '19",
        endDate: "Jan '22",
        items: [
          {
            segments: [
              { text: "Owned/designed/implemented/supervised " },
              { text: "multiple complex projects", strong: true },
              { text: ", each " },
              { text: "spanning multiple services", strong: true },
            ],
            subItems: [
              {
                segments: [
                  {
                    text: "Dynamic location based content and push lifecycle management, ",
                  },
                  { text: "saving over 98% of manual time spent", strong: true },
                  {
                    text: " per campaign for the biggest client (also making the process far less error prone)",
                  },
                ],
              },
              {
                segments: [
                  {
                    text: "Templatization 2.0 - Creation of user journeys making it super easy for users to use the product",
                  },
                ],
              },
              {
                segments: [
                  { text: "Scaled push notifications to " },
                  { text: "support over 6 million users per campaign", strong: true },
                  {
                    text: " while ensuring system resilience with starvation prevention, failure recovery and automatic resumption",
                  },
                ],
              },
            ],
          },
          {
            segments: [
              {
                text: "Mentored juniors on design principles, code quality, domain knowledge, testing best practices",
              },
            ],
          },
          {
            segments: [
              { text: "GoLang, Postgres, MongoDB, AWS, Kubernetes, Docker" },
            ],
          },
        ],
      },
      {
        company: "Morgan Stanley",
        role: "Senior Associate Developer, Collateral Management - PBIT, Mumbai",
        location: "India",
        startDate: "Aug '17",
        endDate: "Apr '19",
        items: [
          {
            segments: [
              {
                text: "S/w development for OneSource (a data warehouse for Collateral Management) and for UMR (Uncleared Margin Rules) Phase 4 - Java 8, IBM DB2, Sybase and Scala",
              },
            ],
          },
        ],
      },
      {
        company: "Credit Suisse",
        role: "Technical Analyst",
        location: "India",
        startDate: "Jul '15",
        endDate: "Jul '17",
        items: [
          {
            segments: [{ text: "Prime Services IT, Mumbai (Aug ’16 - July ‘17)" }],
            subItems: [
              {
                segments: [
                  {
                    text: "S/w development for Client Workstation, a client-driven, consolidated view for the CSRs to be able to better manage their day to day work - JavaScript (ExtJS 6), Java 8 (Spring Boot), MongoDB",
                  },
                ],
              },
            ],
          },
          {
            segments: [{ text: "Trade Management, Pune (July ’15 - July ’16)" }],
            subItems: [
              {
                segments: [
                  {
                    text: "Support and software development for FOCash (Front Office Cash Sourcing) system - C#.net, VBA and Java 6",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        company: "Built.io (Raw Eng.)",
        role: "Software Development Intern - Node.js, React",
        location: "India",
        startDate: "Jan '15",
        endDate: "Jun '15",
      },
    ] satisfies WorkExperience[],
  },
} as const;

export function experienceAccordionTitle(
  company: string,
  startDate: string,
  endDate: string,
): string {
  return `${company} (${startDate} - ${endDate})`;
}

export function experienceLinePlainText(line: ExperienceLine): string {
  return line.segments.map((segment) => segment.text).join("");
}
