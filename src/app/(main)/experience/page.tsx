import {
  Accordion,
  Column,
  Heading,
  Row,
  Text,
} from "@once-ui-system/core";

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
  const { tldr, work } = experienceContent;

  return (
    <Column fillWidth horizontal="center">
      <Column maxWidth="s" gap="24" fillWidth>
        <Accordion title={tldr.title} open>
          <ExperienceLines items={[...tldr.items]} variant="body-default-s" />
        </Accordion>

        <Heading as="h2" variant="heading-strong-m" marginTop="16">
          {work.title}
        </Heading>

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
  );
}
