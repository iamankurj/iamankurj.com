export const headerNav = {
  home: {
    href: "/",
    label: "Home",
    prefixIcon: "home",
  },
  primary: [
    {
      href: "/tech/experience",
      label: "Experience",
      prefixIcon: "briefcase",
    },
    {
      href: "/tech/projects",
      label: "Projects",
      prefixIcon: "rocket",
    },
  ],
  external: {
    href: "https://gaayak.org",
    label: "Gaayak.org",
    prefixIcon: "music",
  },
} as const;

export const heroCtas = [
  {
    href: headerNav.primary[1].href,
    label: "Explore Projects",
  },
  {
    href: headerNav.primary[0].href,
    label: "View Experience",
  },
] as const;

export function isHeaderPathSelected(pathname: string, href: string): boolean {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return false;
  }

  // Home must match exactly so it does not stay selected on every page.
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
