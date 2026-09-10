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
/** Matches ~maxWidth "m" project frames on desktop; 100vw below 960px. */
export const PROJECT_MEDIA_SIZES = "(max-width: 960px) 100vw, 1200px";
