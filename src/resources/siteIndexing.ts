import { projectPath } from "@/resources/projects";
import { baseURL, meta } from "@/resources/seo";

export type SitemapProject = {
  slug: string;
  publishedAt?: string;
};

export type SitemapEntry = {
  url: string;
  lastModified?: string | Date;
};

/** Static indexable routes plus published project detail URLs. */
export function buildSitemapEntries(
  projects: SitemapProject[],
  options?: { siteBaseURL?: string; lastModified?: string | Date },
): SitemapEntry[] {
  const site = options?.siteBaseURL ?? baseURL;
  const lastModified = options?.lastModified ?? new Date();

  const staticRoutes: SitemapEntry[] = [
    { url: `${site}${meta.home.path === "/" ? "" : meta.home.path}`, lastModified },
    { url: `${site}${meta.experience.path}`, lastModified },
    { url: `${site}${meta.projects.path}`, lastModified },
  ];

  const projectRoutes = projects.map((project) => ({
    url: `${site}${projectPath(project.slug)}`,
    lastModified: project.publishedAt ?? lastModified,
  }));

  return [...staticRoutes, ...projectRoutes];
}

export function buildRobotsConfig(options?: { siteBaseURL?: string }) {
  const site = options?.siteBaseURL ?? baseURL;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${site}/sitemap.xml`,
  };
}
