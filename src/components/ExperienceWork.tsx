import {
  Column,
  HeadingLink,
  List,
  ListItem,
  Row,
  Tag,
  Text,
  Timeline,
} from "@once-ui-system/core";

import { slugifyHeadingText } from "@/components/markdown/markdownLink";
import {
  experienceContent,
  experienceLinePlainText,
  workExperienceDateRange,
  workExperienceLabel,
  type ExperienceLine,
  type WorkExperience,
} from "@/resources/experience";

function AchievementSegments({ line }: { line: ExperienceLine }) {
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

function ExperienceTimelineBody({ experience }: { experience: WorkExperience }) {
  return (
    <Column gap="12" fillWidth paddingTop="8">
      <Text variant="label-default-s" onBackground="brand-medium">
        {experience.roleFocus}
      </Text>

      {experience.tags.length > 0 ? (
        <Row gap="8" wrap>
          {experience.tags.map((tag) => (
            <Tag key={tag} size="s" variant="accent" label={tag} />
          ))}
        </Row>
      ) : null}

      {experience.achievements.length > 0 ? (
        <List as="ul" gap="8">
          {experience.achievements.map((achievement) => (
            <ListItem key={experienceLinePlainText(achievement)}>
              <Text variant="body-default-s" onBackground="neutral-weak">
                <AchievementSegments line={achievement} />
              </Text>
            </ListItem>
          ))}
        </List>
      ) : null}
    </Column>
  );
}

export function ExperienceWork() {
  const { work } = experienceContent;

  return (
    <Column gap="16" fillWidth>
      <HeadingLink
        as="h2"
        id={slugifyHeadingText(work.title)}
        textVariant="heading-strong-m"
      >
        {work.title}
      </HeadingLink>

      <Timeline
        fillWidth
        alignment="left"
        items={work.experiences.map((experience) => ({
          label: workExperienceLabel(experience),
          description: workExperienceDateRange(experience),
          state: experience.state ?? "default",
          children: <ExperienceTimelineBody experience={experience} />,
        }))}
      />
    </Column>
  );
}
