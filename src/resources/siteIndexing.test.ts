import { describe, expect, it } from "vitest";

import { baseURL, meta } from "./seo";
import { buildRobotsConfig, buildSitemapEntries } from "./siteIndexing";

describe("buildSitemapEntries", () => {
  it("includes home, experience, projects, and project detail URLs", () => {
    const entries = buildSitemapEntries(
      [
        { slug: "coursecorrect", publishedAt: "2024-01-15" },
        { slug: "iamankurj-com" },
      ],
      { lastModified: "2026-09-10" },
    );

    expect(entries.map((entry) => entry.url)).toEqual([
      baseURL,
      `${baseURL}${meta.experience.path}`,
      `${baseURL}${meta.projects.path}`,
      `${baseURL}/tech/projects/coursecorrect`,
      `${baseURL}/tech/projects/iamankurj-com`,
    ]);
    expect(entries[0].lastModified).toBe("2026-09-10");
    expect(entries[3].lastModified).toBe("2024-01-15");
    expect(entries[4].lastModified).toBe("2026-09-10");
  });
});

describe("buildRobotsConfig", () => {
  it("allows all crawlers and points at the sitemap", () => {
    expect(buildRobotsConfig()).toEqual({
      rules: [{ userAgent: "*", allow: "/" }],
      sitemap: `${baseURL}/sitemap.xml`,
    });
  });
});

describe("meta", () => {
  it("defines SEO fields for every public page with a shared default OG image", () => {
    expect(meta.home.image).toBe(meta.experience.image);
    expect(meta.experience.image).toBe(meta.projects.image);
    expect(meta.experience.path).toBe("/tech/experience");
    expect(meta.experience.title).toContain("Experience");
    expect(meta.experience.description.length).toBeGreaterThan(40);
    expect(meta.home.robots).toBe("index,follow");
    expect(meta.experience.robots).toBe("index,follow");
    expect(meta.projects.robots).toBe("index,follow");
  });
});
