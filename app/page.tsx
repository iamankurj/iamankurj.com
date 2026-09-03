import { baseURL, meta } from "@/resources/seo";
import {
  Badge,
  Button,
  Column,
  Heading,
  LetterFx,
  Schema,
  SmartLink,
  Text
} from "@once-ui-system/core";

export default function Home() {
  return (
    <Column fillWidth minHeight="100vh" center padding="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={meta.home.title}
        description={meta.home.description}
        path={meta.home.path}
      />
      <Column maxWidth="s" horizontal="center" gap="m" align="center">
        <Badge
          textVariant="code-default-s"
          border="neutral-alpha-medium"
          onBackground="neutral-medium"
          vertical="center"
          gap="16"
        >
          {/* <Logo dark icon="/trademarks/wordmark-dark.svg" href="https://once-ui.com" size="xs" />
          <Logo light icon="/trademarks/wordmark-light.svg" href="https://once-ui.com" size="xs" />
          <Line vert background="neutral-alpha-strong" /> */}
          <Text marginX="4">
            <LetterFx trigger="instant">Hi, I'm Ankur</LetterFx>
          </Text>
        </Badge>
        <Heading variant="display-strong-m" marginTop="24">
          Software Engineer, Builder, and Singer at Heart.
        </Heading>
        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          wrap="balance"
          marginBottom="0"
        >
          I’m a product engineer with over 10 years of experience. Today, I focus on building software that solves real-world problems.
        </Text>
        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          wrap="balance"
          marginBottom="0"
        >
          As a late-starter singer myself, I’m building <SmartLink href="https://gaayak.org">Gaayak.org</SmartLink> to help others on the same journey.
        </Text>
        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          wrap="balance"
          marginBottom="16"
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
    </Column>
  );
}
