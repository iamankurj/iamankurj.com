export type ProjectMediaMode = "none" | "single" | "carousel";

/** Decide how project frontmatter images should render. */
export function projectMediaMode(imageCount: number): ProjectMediaMode {
  if (imageCount <= 0) {
    return "none";
  }
  if (imageCount === 1) {
    return "single";
  }
  return "carousel";
}

export const PROJECT_MEDIA_ASPECT_RATIO = "16 / 9";
export const PROJECT_MEDIA_SIZES = "(max-width: 960px) 100vw, 720px";
