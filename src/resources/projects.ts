/** Site path for the projects index (not the content folder name). */
export const PROJECTS_BASE_PATH = "/tech/projects";

export function projectPath(slug: string): string {
  return `${PROJECTS_BASE_PATH}/${slug}`;
}

/** List-page chrome copy (body content comes from markdown files). */
export const projectsPageContent = {
  title: "Projects",
  description:
    "Product experiments and case studies — what I built, how it’s shaped, and the trade-offs along the way.",
} as const;

/** Format YYYY-MM-DD frontmatter dates for display (UTC calendar day). */
export function formatProjectDate(isoDate: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  if (!match) {
    return isoDate;
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
