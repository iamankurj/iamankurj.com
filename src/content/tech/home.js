import { baseURL } from "@/config/config";
import { person } from "../shared/person";
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

export { home };