import { z } from "zod";

/**
 * Frontmatter contract for `content/projects/*.md`.
 * Used for list cards, detail chrome, and SEO — not the markdown body.
 */
export const projectFrontmatterSchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  /** Calendar date as YYYY-MM-DD (display + tiebreaker after `order`). */
  publishedAt: z.iso.date(),
  /**
   * Manual list position (ascending). Lower appears first.
   * Omit to fall back after explicitly ordered projects (then by publishedAt).
   */
  order: z.number().int().positive().default(Number.MAX_SAFE_INTEGER),
  /** Public paths or URLs for card/hero images. */
  images: z.array(z.string().min(1)).default([]),
  /** Optional live product URL; empty string from YAML is treated as absent. */
  link: z.preprocess(
    (value) => (value === "" || value == null ? undefined : value),
    z.url().optional(),
  ),
  /** When true, loaders should omit the entry from production listings. */
  draft: z.boolean().default(false),
});

export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;

/** Parse raw gray-matter `data`; throws ZodError on invalid frontmatter. */
export function parseProjectFrontmatter(data: unknown): ProjectFrontmatter {
  return projectFrontmatterSchema.parse(data);
}
