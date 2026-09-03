import { baseURL, meta } from "@/resources/seo";
import {
  Badge,
  Button,
  Column,
  Heading,
  Media,
  Row,
  Schema,
  Text
} from "@once-ui-system/core";

export default function Home() {
  return (
    <Column fillWidth flex={1} center padding="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={meta.home.title}
        description={meta.home.description}
        path={meta.home.path}
      />
      <Column maxWidth="s" gap="40">
        <Column gap="s" align="center" horizontal="center">
          <Badge
            textVariant="code-default-s"
            background="overlay"
            border="neutral-alpha-medium"
            onBackground="neutral-strong"
            vertical="center"
            gap="16"
          >
            <Row paddingY="2">
              <Row gap="12" vertical="center">
                <Text marginLeft="4">
                  Hi, I'm
                </Text>
                <strong className="mr-4" style={{ color: "var(--brand-on-background-medium)" }}>Ankur</strong>
              </Row>
            </Row>
          </Badge>
          <Heading variant="display-strong-l" marginTop="8">
            Product Engineer, Builder, and Singer at Heart.
          </Heading>
        </Column>
        <Row fillWidth gap="32" s={{ direction: "column" }}>
          <Column paddingLeft="48" flex={1} fillWidth center s={{ paddingLeft: 0 }}>
            <Media
              src="/images/me_by_the_river.jpg"
              alt="Ankur sitting by a river"
              aspectRatio="1/1"
              radius="full"
              sizes="256px"
              maxWidth={16}
              fillWidth={false}
              priority
            />
          </Column>
          <Column flex={2} fillWidth gap="s" s={{ horizontal: "center", style: { textAlign: "center" } }}>
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              wrap="balance"
              marginBottom="1"
            >
              I’m a product engineer with over 10 years of experience. Today, I focus on building software that solves real-world problems.
            </Text>
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              wrap="balance"
              marginBottom="1"
            >
              As a late-starter singer myself, I’m building Gaayak.org to help others on the same journey.
            </Text>
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              wrap="balance"
              marginBottom="1"
            >
              Outside of tech, I plan to document my personal experiences with finance and fitness, sharing what's actually worked for me (and what hasn't) using a grounded, realistic approach.
            </Text>
            <Button
              id="docs"
              href="https://docs.once-ui.com/once-ui/quick-start"
              data-border="rounded"
              arrowIcon
            >
              Explore docs
            </Button>
          </Column>
        </Row>
      </Column>
    </Column>
  );
}
