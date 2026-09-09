import {
  Column,
  Heading,
  Meta,
  Schema,
  Text,
} from "@once-ui-system/core";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { getCollection } from "@/lib/content/load";
import {
  formatProjectDate,
  projectPath,
  projectsPageContent,
} from "@/resources/projects";
import { baseURL, meta } from "@/resources/seo";

export async function generateMetadata() {
  return Meta.generate({
    title: meta.projects.title,
    description: meta.projects.description,
    baseURL,
    path: meta.projects.path,
    image: meta.projects.image,
    robots: meta.projects.robots,
  });
}

export default function ProjectsPage() {
  const projects = getCollection("projects");

  return (
    <Column fillWidth horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={meta.projects.path}
        title={meta.projects.title}
        description={meta.projects.description}
        image={meta.projects.image}
      />

      <Column maxWidth="m" gap="40" fillWidth>
        <Column gap="12" fillWidth>
          <Heading as="h1" variant="display-strong-s">
            {projectsPageContent.title}
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-medium">
            {projectsPageContent.description}
          </Text>
        </Column>

        {projects.length === 0 ? (
          <Text variant="body-default-m" onBackground="neutral-weak">
            No projects published yet.
          </Text>
        ) : (
          <Column gap="40" fillWidth>
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                href={projectPath(project.slug)}
                title={project.metadata.title}
                summary={project.metadata.summary}
                images={project.metadata.images}
                link={project.metadata.link}
                publishedAtLabel={formatProjectDate(project.metadata.publishedAt)}
              />
            ))}
          </Column>
        )}
      </Column>
    </Column>
  );
}
