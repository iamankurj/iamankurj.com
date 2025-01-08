import { baseURL } from "@/config/config";
import { person, socials } from "../shared/person";
import Link from "next/link";

const role = 'Software engineer and consultant';

const home = {
  label: 'About',
  title: `Tech | ${person.name}`,
  description: `Portfolio website showcasing my work as a ${role}`,
  headline: <>{role}</>,
  subline: <>I’m Ankur, a techie on a mission to simplify life with tech (and avoid further complicating it, haha).
    Curious about my non-techie side? Check out <Link href={"/"}>{baseURL}</Link>!</>
}

const techSocials = [
  ...socials.filter(social => social.title === 'LinkedIn' || social.title === 'GitHub'),
  {
    title: 'Email',
    href: 'mailto:tech.iamankurj@gmail.com',
    icon: 'email'
  }
]

export { home, techSocials };