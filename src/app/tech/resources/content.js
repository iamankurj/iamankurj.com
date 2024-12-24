import { person } from "@/resources/content";

const about = {
  label: 'About',
  title: 'About me',
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
    link: 'https://cal.com'
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: <>Selene is a Jakarta-based design engineer with a passion for transforming complex challenges into simple, elegant design solutions. Her work spans digital interfaces, interactive experiences, and the convergence of design and technology.</>
  },
  work: {
    display: true, // set to false to hide this section
    title: 'Work Experience',
    experiences: [
      {
        company: 'FLY',
        timeframe: '2022 - Present',
        role: 'Senior Design Engineer',
        achievements: [
          'Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.',
          'Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.'
        ],
        images: [ // optional: leave the array empty if you don't want to display images
          {
            src: '/images/projects/project-01/cover-01.jpg',
            alt: 'Once UI Project',
            width: 16,
            height: 9
          }
        ]
      },
    ]
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Studies',
    institutions: [
      {
        name: 'University of Jakarta',
        description: <>Studied software engineering.</>,
      },
      {
        name: 'Build the Future',
        description: <>Studied online marketing and personal branding.</>,
      }
    ]
  },
  technical: {
    display: true, // set to false to hide this section
    title: 'Technical skills',
    skills: [
      {
        title: 'Figma',
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: '/images/projects/project-01/cover-02.jpg',
            alt: 'Project image',
            width: 16,
            height: 9
          },
          {
            src: '/images/projects/project-01/cover-03.jpg',
            alt: 'Project image',
            width: 16,
            height: 9
          },
        ]
      },
      {
        title: 'Next.js',
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: '/images/projects/project-01/cover-04.jpg',
            alt: 'Project image',
            width: 16,
            height: 9
          },
        ]
      }
    ]
  }
}

export { about }
