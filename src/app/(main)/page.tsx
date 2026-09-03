import { baseURL, meta } from "@/resources/seo";
import {
  Badge,
  Button,
  Column,
  Heading,
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
      <Column maxWidth="s" horizontal="center" gap="l" align="center">
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
        <Heading variant="display-strong-xl" marginTop="24">
          Presence that doesn't beg for attention
        </Heading>
        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          wrap="balance"
          marginBottom="16"
        >
          Build with clarity, speed, and quiet confidence
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
    </Column>
  );
}
