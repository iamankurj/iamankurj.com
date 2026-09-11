import {
  Column,
  Heading,
  LetterFx,
  RevealFx,
  Text,
} from "@once-ui-system/core";

import { ExperienceMetrics } from "@/components/ExperienceMetrics";
import { ExperienceTestimonials } from "@/components/ExperienceTestimonials";
import { ExperienceWork } from "@/components/ExperienceWork";
import { experienceContent } from "@/resources/experience";

export default function Experience() {
  const { hero } = experienceContent;

  return (
    <Column fillWidth horizontal="center">
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
