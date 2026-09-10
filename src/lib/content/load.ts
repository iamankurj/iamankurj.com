import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import { assertMarkdownLinksAllowed } from "./lintMarkdownLinks";
import { collectionDir, type ContentCollection } from "./paths";
import {
  parseProjectFrontmatter,
  type ProjectFrontmatter,
} from "./schemas";

export type ContentEntry<TMeta> = {
  slug: string;
  metadata: TMeta;
  body: string;
};

export type LoadOptions = {
  /** Override project root (defaults to `process.cwd()`). Useful in tests. */
  cwd?: string;
  /**
   * When false, entries with `draft: true` are omitted.
   * Default: include drafts unless `NODE_ENV === "production"`.
   */
  includeDrafts?: boolean;
};

type ProjectEntry = ContentEntry<ProjectFrontmatter>;

function includeDrafts(options?: LoadOptions): boolean {
  return options?.includeDrafts ?? process.env.NODE_ENV !== "production";
}

function parseMetadata(
  collection: ContentCollection,
  data: unknown,
): ProjectFrontmatter {
  switch (collection) {
    case "projects":
      return parseProjectFrontmatter(data);
    default:
      throw new Error(
        `No frontmatter schema registered for collection "${collection}"`,
      );
  }
}

function listMarkdownFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".md")
    .sort();
}

function readMarkdownEntry(
  collection: ContentCollection,
  filePath: string,
): ProjectEntry {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const slug = path.basename(filePath, path.extname(filePath));

  const body = content.trim();

  try {
    const metadata = parseMetadata(collection, data);
    assertMarkdownLinksAllowed(body, filePath);
    return {
      slug,
      metadata,
      body,
    };
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.startsWith("Invalid markdown link")
    ) {
      throw error;
    }

    const detail =
      error instanceof Error ? error.message : "Unknown validation error";
    throw new Error(`Invalid frontmatter in ${filePath}: ${detail}`, {
      cause: error,
    });
  }
}

function byProjectListOrder(a: ProjectEntry, b: ProjectEntry): number {
  const byOrder = a.metadata.order - b.metadata.order;
  if (byOrder !== 0) {
    return byOrder;
  }

  const byDate = b.metadata.publishedAt.localeCompare(a.metadata.publishedAt);
  if (byDate !== 0) {
    return byDate;
  }

  return a.slug.localeCompare(b.slug);
}

/**
 * Load all markdown entries for a collection.
 * Missing directory → `[]`. Invalid frontmatter → throws (includes file path).
 * Does not call Next.js `notFound()`.
 */
export function getCollection(
  collection: ContentCollection,
  options?: LoadOptions,
): ProjectEntry[] {
  const dir = collectionDir(collection, options?.cwd);
  const allowDrafts = includeDrafts(options);

  return listMarkdownFiles(dir)
    .map((file) => readMarkdownEntry(collection, path.join(dir, file)))
    .filter((entry) => allowDrafts || !entry.metadata.draft)
    .sort(byProjectListOrder);
}

/**
 * Load one entry by slug (filename without `.md`).
 * Missing / filtered draft → `null`. Invalid frontmatter → throws.
 */
export function getEntry(
  collection: ContentCollection,
  slug: string,
  options?: LoadOptions,
): ProjectEntry | null {
  const filePath = path.join(
    collectionDir(collection, options?.cwd),
    `${slug}.md`,
  );

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const entry = readMarkdownEntry(collection, filePath);

  if (!includeDrafts(options) && entry.metadata.draft) {
    return null;
  }

  return entry;
}
