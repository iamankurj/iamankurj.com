/**
 * Site markdown link contract:
 * - On-site: root-relative pathnames only (`/tech/projects/slug`, `/tech/experience`, …)
 * - In-page: hash (`#section`)
 * - Off-site: absolute `http:` / `https:` / `mailto:`
 *
 * Not allowed: filesystem-relative links (`./x.md`, `../x`, `x.md`), or dangerous schemes.
 */

const MARKDOWN_LINK_RE =
  /\[(?:[^\]]*)\]\(\s*<?([^)\s>]+)>?(?:\s+(?:"[^"]*"|'[^']*'))?\s*\)/g;

const ALLOWED_ABSOLUTE = /^(https?:|mailto:)/i;
const DANGEROUS_SCHEME = /^(javascript|data|vbscript|file):/i;

export type MarkdownLinkIssue = {
  href: string;
  reason: string;
};

/** Remove fenced/inline code so examples inside code are not linted. */
export function stripMarkdownCode(body: string): string {
  return body
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]*`/g, "");
}

export function extractMarkdownHrefs(body: string): string[] {
  const text = stripMarkdownCode(body);
  const hrefs: string[] = [];
  for (const match of text.matchAll(MARKDOWN_LINK_RE)) {
    const href = match[1];
    if (href) {
      hrefs.push(href);
    }
  }
  return hrefs;
}

export function explainDisallowedMarkdownHref(
  href: string,
): string | undefined {
  const trimmed = href.trim();

  if (!trimmed) {
    return "Link href is empty";
  }

  if (DANGEROUS_SCHEME.test(trimmed)) {
    return `Dangerous URL scheme is not allowed (${trimmed.split(":")[0]}:)`;
  }

  if (trimmed.startsWith("#") || trimmed.startsWith("/")) {
    return undefined;
  }

  if (ALLOWED_ABSOLUTE.test(trimmed)) {
    return undefined;
  }

  if (/\.mdx?([?#].*)?$/i.test(trimmed)) {
    return `Filesystem-style markdown link "${trimmed}" is not allowed; use a root-relative site path like /tech/projects/slug`;
  }

  if (
    trimmed.startsWith("./") ||
    trimmed.startsWith("../") ||
    !trimmed.includes(":")
  ) {
    return `Relative link "${trimmed}" is not allowed; use a root-relative path (/…), hash (#…), or absolute http(s)/mailto URL`;
  }

  return `Unsupported link "${trimmed}"; use /…, #…, https://…, or mailto:…`;
}

/**
 * Throws if the body contains disallowed markdown links.
 * @param sourcePath Included in the error for easier fixes.
 */
export function assertMarkdownLinksAllowed(
  body: string,
  sourcePath: string,
): void {
  const issues: MarkdownLinkIssue[] = [];

  for (const href of extractMarkdownHrefs(body)) {
    const reason = explainDisallowedMarkdownHref(href);
    if (reason) {
      issues.push({ href, reason });
    }
  }

  if (issues.length === 0) {
    return;
  }

  const details = issues
    .map((issue) => `  - ${issue.href}: ${issue.reason}`)
    .join("\n");

  throw new Error(
    `Invalid markdown link(s) in ${sourcePath}:\n${details}`,
  );
}
