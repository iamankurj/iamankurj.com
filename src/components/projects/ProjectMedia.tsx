import { Carousel, Media } from "@once-ui-system/core";

import {
  PROJECT_MEDIA_ASPECT_RATIO,
  PROJECT_MEDIA_SIZES,
  projectMediaMode,
} from "./projectMediaMode";

export type ProjectMediaProps = {
  images: string[];
  /** Used for Media alt and each carousel slide alt. */
  alt: string;
  priority?: boolean;
  sizes?: string;
  aspectRatio?: string;
};

/**
 * Renders project frontmatter images:
 * - 0 → nothing
 * - 1 → Once UI Media
 * - 2+ → Once UI Carousel
 */
export function ProjectMedia({
  images,
  alt,
  priority = false,
  sizes = PROJECT_MEDIA_SIZES,
  aspectRatio = PROJECT_MEDIA_ASPECT_RATIO,
}: ProjectMediaProps) {
  const mode = projectMediaMode(images.length);

  if (mode === "none") {
    return null;
  }

  if (mode === "single") {
    return (
      <Media
        priority={priority}
        src={images[0]}
        alt={alt}
        aspectRatio={aspectRatio}
        radius="m"
        border="neutral-alpha-medium"
        sizes={sizes}
      />
    );
  }

  return (
    <Carousel
      fillWidth
      priority={priority}
      aspectRatio={aspectRatio}
      sizes={sizes}
      indicator="line"
      controls
      items={images.map((slide) => ({
        slide,
        alt,
      }))}
    />
  );
}
