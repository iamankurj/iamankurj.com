import path from "node:path";

/** Top-level folder for all markdown collections (repo-root relative). */
export const CONTENT_DIR = "content";

/**
 * Named collections under `content/`.
 * URL routes (`/tech/projects`, `/fitness`, …) are separate from these folder names.
 */
export const CONTENT_COLLECTIONS = ["projects", "fitness", "finance"] as const;

export type ContentCollection = (typeof CONTENT_COLLECTIONS)[number];

/** Absolute path to `content/` (resolved from `process.cwd()`). */
export function contentRoot(cwd: string = process.cwd()): string {
  return path.join(cwd, CONTENT_DIR);
}

/** Absolute path to `content/<collection>/`. */
export function collectionDir(
  collection: ContentCollection,
  cwd: string = process.cwd(),
): string {
  return path.join(contentRoot(cwd), collection);
}
