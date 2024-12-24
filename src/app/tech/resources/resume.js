import { person } from "@/resources/content";

const StrongText = ({ children }) => (
  <span className="neutral-on-background-strong">{children}</span>
);

const resume = {
  title: 'Resume',
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false
  },
  avatar: {
    display: true
  },
  calendar: {
    display: true,
    link: 'https://calendar.app.google/27r9rX47penQ1PWD8'
  },
  socials: [
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/iamankurj/',
      icon: 'linkedin'
    },
    {
      title: 'GitHub',
      href: 'https://github.com/iamankurj',
      icon: 'github'
    },
    {
      title: 'Email',
      href: 'mailto:ankurjain.2989@gmail.com',
      icon: 'email'
    },
  ],
  tldr: {
    display: true,
    title: 'TL;DR',
    items: [
      { line: <>9+ years of experience in the software industry, demonstrating strong problem-solving, technical, and interpersonal skills</> },
      { line: <>Developed features impacting over 900 million users using at Meta</> },
      { line: <>5+ years of experience developing and maintaining scalable microservices in GoLang</> },
      { line: <>3+ years of experience developing backend applications with Java/J2EE, REST, and Spring Boot</> },
      { line: <>1 year of experience in UI development using ExtJS, JS, HTML, CSS, and Java backend</> }
    ]
  },
  work: {
    display: true,
    title: 'Work Experience',
    experiences: [
      {
        company: "Flybits",
        role: 'Senior Software Engineering Consultant',
        location: 'Canada',
        startDate: "Apr '23",
        endDate: 'Present',
        items: [
          {
            line: <><StrongText>Engineering Lead</StrongText> for</>,
            subItems: [
              { line: <><StrongText>Flow Visualizer</StrongText>: A mission-critical project central to enhancing marketer experience, and the company’s top priority</> },
              { line: <><StrongText>Merchant Offers Solution</StrongText>: A new project enabling local merchants to deliver personalized rewards programs efficiently to end users</> }
            ]
          },
          { line: <><StrongText>Technical Influence</StrongText>: Leveraging technical expertise to shape UX, UI, and product design decisions</> },
          { line: <><StrongText>Collaboration</StrongText>: Partnering closely with the Solutions team to develop user experiences and flows for complex workflows</> },
          { line: <><StrongText>Content Prioritization</StrongText>: Actively contributing to the discovery and design phases of a key feature impacting content positioning and ranking for users</> },
          { line: <><StrongText>Coding & Reviews</StrongText>: Hands-on coding contributions and code reviews</> },
          { line: <><StrongText>Mentorship</StrongText>: Mentoring junior engineers on coding practices, code quality, system design, and efficiency</> },
        ],
      },
      {
        company: "Meta",
        role: 'Server Engineer, Remote - Well-Being Engineering',
        location: 'Canada',
        startDate: "Feb '22",
        endDate: "May '23",
        items: [
          { line: <>Owned the team’s <StrongText>mission critical end-to-end encryption projects</StrongText> for Messenger and Instagram Direct</> },
          { line: <>Implemented new well-being features for Messenger group chat and community messaging</> },
          { line: <>More than 80% overall test coverage and 100% significant code coverage for the new code</> },
          { line: <>0 QA bugs identified in the new code</> },
          { line: <>Heavy cross-functional collaboration with several teams</> },
          { line: <>One of the top Docuthon contributors from the Well-Being org.</> },
          { line: <>One of the top 25% privacy contributors at Meta</> },
          { line: <>Responsible for mentoring interns in the team</> },
        ],
      },
      {
        company: "Flybits",
        role: 'Senior Backend Engineer',
        location: 'Canada',
        startDate: "Apr '23",
        endDate: 'Present',
        items: [
          {
            line: <>Owned/designed/implemented/supervised multiple complex projects, each spanning multiple services</>,
            subItems: [
              { line: <>Dynamic location based content and push lifecycle management, saving over 98% of manual time spent per campaign for the biggest client (also making the process far less error prone)</> },
              { line: <>Templatization 2.0 - Creation of user journeys making it super easy for users to use the product</> },
              { line: <>Scaled push notifications to support over 6 million users per campaign while ensuring system resilience with starvation prevention, failure recovery and automatic resumption</> },
            ]
          },
          { line: <>Mentored juniors on design principles, code quality, domain knowledge, testing best practices</> },
          { line: <>GoLang, Postgres, MongoDB, AWS, Kubernetes, Docker</> },
        ],
      },
      {
        company: "Morgan Stanley",
        role: 'Senior Associate Developer, Collateral Management - PBIT, Mumbai',
        location: 'India',
        startDate: "Aug '17",
        endDate: "April '19",
        items: [
          { line: <>S/w development for OneSource (a data warehouse for Collateral Management) and for UMR (Uncleared Margin Rules) Phase 4 - Java 8, IBM DB2, Sybase and Scala</> },
        ],
      },
      {
        company: "Credit Suisse",
        role: 'Technical Analyst',
        location: 'India',
        startDate: "July '15",
        endDate: "July '17",
        items: [
          {
            line: <>Prime Services IT, Mumbai (Aug ’16 - July ‘17)</>,
            subItems: [
              { line: <>S/w development for Client Workstation, a client-driven, consolidated view for the CSRs to be able to better manage their day to day work - JavaScript (ExtJS 6), Java 8 (Spring Boot), MongoDB</> }
            ]
          },
          {
            line: <>Trade Management, Pune (July ’15 - July ’16)</>,
            subItems: [
              { line: <>Support and software development for FOCash (Front Office Cash Sourcing) system - C#.net, VBA and Java 6</> }
            ]
          },
        ],
      },
      {
        company: "Raw Engineering (Built.io),",
        role: 'Softwrae Development Intern - Node.js, React',
        location: 'India',
        startDate: "Jan '15",
        endDate: "June '15",
      },
    ]
  },
  testimonials: {
    display: true,
    title: 'Testimonials',
    items: [
      { line: <>One of the brightest minds and one of the best engineers I worked with</> },
      { line: <>His tenacity, problem solving, technical abilities and commitment make him an invaluable team player</> },
      { line: <>Never lacked dedication and always had "go-to" attitude</> },
      { line: <>Energetic, full of new ideas, and stakeholders appreciated working with him</> },
      { line: <>Delivered on multiple projects with great efficiency</> },
      { line: <>Exceeded expectations on many occasions</> },
      { line: <>Very proactive person who makes sure the job gets done and is always ready to share ideas openly anddiscuss through</> },
    ]
  },
  education: {
    display: true,
    title: 'Education',
    qualifications: [
      {
        name: "Master's Degree in Computer Applications",
        university: "VJTI - University of Mumbai",
        start: "2012",
        end: "2015"
      }
    ]
  },
}

const structure = [
  {
    title: resume.tldr.title, display: true,
    items: []
  },
  {
    title: resume.work.title, display: resume.work.display,
    items: resume.work.experiences.map(work => work.company)
  },
  {
    title: resume.testimonials.title, display: resume.testimonials.display,
    items: resume.testimonials.items.map(testimonial => testimonial.name)
  },
  {
    title: resume.education.title, display: resume.education.display,
    items: resume.education.qualifications.map(qualification => qualification.name)
  }
]

export { resume, structure };
