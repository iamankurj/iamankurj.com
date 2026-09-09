export type MarkdownLinkKind = "internal" | "hash" | "external" | "blocked";

const DANGEROUS_SCHEME = /^(javascript|data|vbscript|file):/i;

/** True when the href must not be rendered as a navigable link. */
export function isBlockedMarkdownHref(href: string | undefined): boolean {
  if (!href?.trim()) {
    return true;
  }

  return DANGEROUS_SCHEME.test(href.trim());
}

/** Classify markdown `href` for Once UI vs blocked rendering. */
export function classifyMarkdownHref(href: string | undefined): MarkdownLinkKind {
  if (isBlockedMarkdownHref(href)) {
    return "blocked";
  }

  if (!href || href.startsWith("#")) {
    return "hash";
  }

  if (href.startsWith("/")) {
    return "internal";
  }

  return "external";
}

/** Stable heading id from visible text (English-oriented; no transliteration dep). */
export function slugifyHeadingText(text: string): string {
  return text
    .trim()
    .replace(/&/g, " and ")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
