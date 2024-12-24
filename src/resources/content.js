import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: 'Ankur',
  lastName: 'Jain',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Software Engineer / Consultant',
  avatar: '/images/me_by_the_river.jpg',
  location: 'America/Toronto',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ['English', 'Hindi']  // optional: Leave the array empty if you don't want to display languages
}

// social links
const socials = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/iamankurj/',
    icon: 'linkedin'
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/i.am.ankur.j',
    icon: 'instagram'
  },
  {
    title: 'GitHub',
    href: 'https://github.com/iamankurj',
    icon: 'github'
  },
  {
    title: 'YouTube',
    href: 'https://youtube.com/@iamankurj',
    icon: 'youtube'
  }
]

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Design engineer and builder</>,
  subline: <>I'm Selene, a design engineer at <InlineCode>FLY</InlineCode>, where I craft intuitive<br /> user experiences. After hours, I build my own projects.</>
}

export { home, newsletter, person, socials };

