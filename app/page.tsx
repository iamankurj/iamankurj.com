import { homeLinks } from "@/resources/home";
import { baseURL, meta } from "@/resources/seo";
import {
  Badge,
  Card,
  Column,
  Grid,
  Heading,
  Icon,
  LetterFx,
  Media,
  Row,
  Schema,
  SmartLink,
  Text,
} from "@once-ui-system/core";

export default function Home() {
  return (
    <Column as="main" fillWidth minHeight="100vh" horizontal="center" vertical="center" padding="l" zIndex={1}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={meta.home.title}
        description={meta.home.description}
        path={meta.home.path}
      />
      <Column fillWidth maxWidth="l" gap="l">
        <Row fillWidth gap="24" vertical="center" s={{ direction: "column", horizontal: "start" }}>
          <Column maxWidth={10} minWidth={10}>
            <Media
              src="/images/me_by_the_river.jpg"
              alt="Ankur Jain by the river"
              aspectRatio="1"
              radius="full"
              objectFit="cover"
              sizes="160px"
              priority
            />
          </Column>
          <Column gap="16" flex={4}>
            <Badge
              textVariant="code-default-s"
              border="neutral-alpha-medium"
              onBackground="neutral-medium"
              vertical="center"
              gap="16"
            >
              <Text marginX="4">
                <LetterFx trigger="instant">Hi, I&apos;m Ankur</LetterFx>
              </Text>
            </Badge>
            <Heading variant="display-strong-m" wrap="balance">
              Software Engineer, Builder, and Singer at Heart.
            </Heading>
          </Column>
        </Row>
        <Column gap="16">
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            I&apos;m a product engineer with over 10 years of experience. Today, I focus on building
            software that solves real-world problems.
          </Text>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            As a late-starter singer myself, I&apos;m building{" "}
            <SmartLink href="https://gaayak.org" target="_blank" rel="noopener noreferrer">
              Gaayak.org
            </SmartLink>{" "}
            to help others on the same journey.
          </Text>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Outside of tech, I plan to document my personal experiences with finance and fitness,
            sharing what&apos;s actually worked for me (and what hasn&apos;t) using a grounded,
            realistic approach.
          </Text>
        </Column>
        <Grid fillWidth columns="4" m={{ columns: "2" }} s={{ columns: "1" }} gap="8">
          {homeLinks.map((link) => (
            <Card key={link.href} href={link.href} fillWidth padding="m">
              <Column gap="8">
                <Row gap="8" vertical="center">
                  <Text variant="body-strong-m">{link.title}</Text>
                  <Icon name="arrowUpRight" size="s" />
                </Row>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {link.description}
                </Text>
              </Column>
            </Card>
          ))}
        </Grid>
      </Column>
    </Column>
  );
}
