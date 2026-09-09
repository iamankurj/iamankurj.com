import {
  Column,
  Heading,
  Row,
  SmartLink,
  Text,
} from "@once-ui-system/core";

import { ProjectMedia } from "./ProjectMedia";
import { projectMediaMode } from "./projectMediaMode";

export type ProjectCardProps = {
  href: string;
  title: string;
  summary: string;
  images?: string[];
  link?: string;
  publishedAtLabel?: string;
};

/**
 * Interactive list row for a project. Links to the case study; optional external product URL.
 */
export function ProjectCard({
  href,
  title,
  summary,
  images = [],
  link,
  publishedAtLabel,
}: ProjectCardProps) {
  const mode = projectMediaMode(images.length);
  const media = (
    <ProjectMedia images={images} alt={`${title} cover`} />
  );

  return (
    <Column fillWidth gap="16" paddingBottom="24">
      {mode === "single" ? (
        <SmartLink href={href}>{media}</SmartLink>
      ) : (
        media
      )}

      <Column gap="8" fillWidth>
        {publishedAtLabel ? (
          <Text variant="label-default-s" onBackground="neutral-weak">
            {publishedAtLabel}
          </Text>
        ) : null}

        <SmartLink href={href}>
          <Heading as="h2" variant="heading-strong-l" wrap="balance">
            {title}
          </Heading>
        </SmartLink>

        <Text variant="body-default-m" onBackground="neutral-medium" wrap="balance">
          {summary}
        </Text>

        <Row gap="24" wrap marginTop="8">
          <SmartLink href={href} suffixIcon="chevronRight">
            <Text variant="body-default-s">Read case study</Text>
          </SmartLink>
          {link ? (
            <SmartLink
              href={link}
              suffixIcon="arrowUpRight"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text variant="body-default-s">View project</Text>
            </SmartLink>
          ) : null}
        </Row>
      </Column>
    </Column>
  );
}
