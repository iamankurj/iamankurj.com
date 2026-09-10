import { Column, Grid, Text } from "@once-ui-system/core";

import { experienceContent } from "@/resources/experience";

export function ExperienceMetrics() {
  const { metrics } = experienceContent;

  return (
    <Grid columns="4" gap="16" m={{ columns: 2 }} s={{ columns: 1 }} fillWidth>
      {metrics.items.map((metric) => (
        <Column
          key={`${metric.value}-${metric.label}`}
          background="surface"
          border="neutral-alpha-weak"
          radius="l"
          padding="24"
          gap="12"
          fillWidth
        >
          <Column gap="4">
            <Text variant="display-strong-s">{metric.value}</Text>
            <Text variant="label-default-s" onBackground="brand-medium">
              {metric.label}
            </Text>
          </Column>
          <Text variant="body-default-s" onBackground="neutral-weak">
            {metric.description}
          </Text>
        </Column>
      ))}
    </Grid>
  );
}
