
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

export { person, socials };
