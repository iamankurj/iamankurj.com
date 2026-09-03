export const headerNav = {
  home: {
    href: "/",
    label: "Home",
    prefixIcon: "home",
  },
  primary: [
    {
      href: "/experience",
      label: "Experience",
      prefixIcon: "briefcase",
    },
    {
      href: "/projects",
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

export function isHeaderPathSelected(pathname: string, href: string): boolean {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return false;
  }

  return pathname === href;
}
