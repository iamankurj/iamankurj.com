import {
  Column,
  HeadingLink,
  Meta,
  Row,
  Schema,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MarkdownBody } from "@/components/markdown/MarkdownBody";
import { slugifyHeadingText } from "@/components/markdown/markdownLink";
import { ProjectMedia } from "@/components/projects/ProjectMedia";
import { getCollection, getEntry } from "@/lib/content/load";
import {
  PROJECTS_BASE_PATH,
  formatProjectDate,
  projectPath,
  projectsPageContent,
} from "@/resources/projects";
import { baseURL, meta } from "@/resources/seo";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams(): { slug: string }[] {
  return getCollection("projects").map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getEntry("projects", slug);

  if (!project) {
    return {};
  }

  const path = projectPath(project.slug);
  const image = project.metadata.images[0] || meta.projects.image;

  return Meta.generate({
    title: `${project.metadata.title} | Ankur Jain`,
    description: project.metadata.summary,
    baseURL,
    path,
    image,
    robots: meta.projects.robots,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getEntry("projects", slug);

  if (!project) {
    notFound();
  }

  const path = projectPath(project.slug);
  const images = project.metadata.images;
  const image = images[0] || meta.projects.image;

  return (
    <Column fillWidth horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={path}
        title={project.metadata.title}
        description={project.metadata.summary}
        image={image}
      />

      <Column maxWidth="m" gap="32" fillWidth>
        <Column gap="12" fillWidth>
          <SmartLink href={PROJECTS_BASE_PATH} prefixIcon="chevronLeft">
            <Text variant="label-strong-m">{projectsPageContent.title}</Text>
          </SmartLink>

          <Text variant="body-default-xs" onBackground="neutral-weak">
            {formatProjectDate(project.metadata.publishedAt)}
          </Text>

          <HeadingLink
            as="h1"
            id={slugifyHeadingText(project.metadata.title)}
            textVariant="display-strong-s"
          >
            {project.metadata.title}
          </HeadingLink>

          <Column maxWidth="s" fillWidth>
            <Text
              variant="body-default-l"
              onBackground="neutral-medium"
              wrap="balance"
            >
              {project.metadata.summary}
            </Text>
          </Column>

          {project.metadata.link ? (
            <Row marginTop="8">
              <SmartLink
                href={project.metadata.link}
                suffixIcon="arrowUpRight"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text variant="body-default-s">View project</Text>
              </SmartLink>
            </Row>
          ) : null}
        </Column>

        <ProjectMedia
          images={images}
          alt={`${project.metadata.title} cover`}
          priority
        />

        <Column as="article" maxWidth="s" fillWidth>
          <MarkdownBody body={project.body} />
        </Column>
      </Column>
    </Column>
  );
}
