import {
  Accordion,
  Column,
  Heading,
  HeadingLink,
  LetterFx,
  RevealFx,
  Row,
  Text
} from "@once-ui-system/core";

import { ExperienceMetrics } from "@/components/ExperienceMetrics";
import { ExperienceTestimonials } from "@/components/ExperienceTestimonials";
import { slugifyHeadingText } from "@/components/markdown/markdownLink";
import {
  experienceContent,
  type ExperienceLine,
} from "@/resources/experience";

function ExperienceSegments({ line }: { line: ExperienceLine }) {
  return (
    <>
      {line.segments.map((segment, index) =>
        segment.strong ? (
          <Text key={index} as="span" onBackground="neutral-strong">
            {segment.text}
          </Text>
        ) : (
          <Text key={index} as="span">
            {segment.text}
          </Text>
        ),
      )}
    </>
  );
}

function ExperienceLines({
  items,
  variant = "body-default-m",
}: {
  items: ExperienceLine[];
  variant?: "body-default-m" | "body-default-s";
}) {
  return (
    <Column as="ul" gap="12" fillWidth>
      {items.map((item, index) => (
        <Column as="li" key={index} gap="8" fillWidth>
          <Text variant={variant} onBackground="neutral-weak">
            <ExperienceSegments line={item} />
          </Text>
          {item.subItems && item.subItems.length > 0 && (
            <Column as="ul" gap="8" paddingLeft="m" fillWidth>
              {item.subItems.map((subItem, subIndex) => (
                <Text
                  as="li"
                  key={subIndex}
                  variant="body-default-s"
                  onBackground="neutral-weak"
                >
                  <ExperienceSegments line={subItem} />
                </Text>
              ))}
            </Column>
          )}
        </Column>
      ))}
    </Column>
  );
}

export default function Experience() {
  const { hero, work } = experienceContent;

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

        <Column gap="16" fillWidth>
          <HeadingLink
            as="h2"
            id={slugifyHeadingText(work.title)}
            textVariant="heading-strong-m"
          >
            {work.title}
          </HeadingLink>

          <Column gap="8" fillWidth>
            {work.experiences.map((experience) => (
              <Accordion
                key={`${experience.company}-${experience.startDate}`}
                title={
                  <Row fillWidth horizontal="between" vertical="end" gap="8" wrap>
                    <Text variant="body-strong-m">{experience.company}</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {`(${experience.startDate} - ${experience.endDate})`}
                    </Text>
                  </Row>
                }
              >
                <Column gap="12" fillWidth paddingBottom="16">
                  <Text variant="body-default-s" onBackground="brand-medium">
                    {experience.role}
                  </Text>
                  {experience.items && experience.items.length > 0 && (
                    <ExperienceLines items={experience.items} />
                  )}
                </Column>
              </Accordion>
            ))}
          </Column>
        </Column>
      </Column>
    </Column>
  );
}
