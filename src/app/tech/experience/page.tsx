import {
  Column,
  Heading,
  LetterFx,
  Meta,
  RevealFx,
  Schema,
  Text,
} from "@once-ui-system/core";

import { ExperienceMetrics } from "@/components/ExperienceMetrics";
import { ExperienceTestimonials } from "@/components/ExperienceTestimonials";
import { ExperienceWork } from "@/components/ExperienceWork";
import { experienceContent } from "@/resources/experience";
import { baseURL, meta } from "@/resources/seo";

export async function generateMetadata() {
  return Meta.generate({
    title: meta.experience.title,
    description: meta.experience.description,
    baseURL,
    path: meta.experience.path,
    image: meta.experience.image,
    robots: meta.experience.robots,
  });
}

export default function Experience() {
  const { hero } = experienceContent;

  return (
    <Column fillWidth horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={meta.experience.path}
        title={meta.experience.title}
        description={meta.experience.description}
        image={meta.experience.image}
      />

      <Column maxWidth="m" gap="xl" fillWidth>
        <Column gap="12" fillWidth>
          <Heading as="h1" variant="display-strong-s" marginBottom="20">
            <LetterFx speed="medium" trigger="instant">
              {hero.title}
            </LetterFx>
          </Heading>
          <Column gap="12" maxWidth="xs" fillWidth>
            <RevealFx delay={0.1}>
              <Text variant="body-default-l" onBackground="neutral-medium">
                {hero.subheadline}
              </Text>
            </RevealFx>
            <RevealFx delay={0.2}>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {hero.lead}
              </Text>
            </RevealFx>
          </Column>
        </Column>

        <RevealFx delay={0.3}>
          <ExperienceMetrics />
        </RevealFx>

        <ExperienceTestimonials />

        <ExperienceWork />
      </Column>
    </Column>
  );
}
