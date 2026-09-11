import type { MetadataRoute } from "next";

import { getCollection } from "@/lib/content/load";
import { buildSitemapEntries } from "@/resources/siteIndexing";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getCollection("projects").map((project) => ({
    slug: project.slug,
    publishedAt: project.metadata.publishedAt,
  }));

  return buildSitemapEntries(projects);
}
