import {
  Background,
  Badge,
  Column,
  Heading,
  Icon,
  IconButton,
  Row,
  SmartLink,
  Text,
} from "@once-ui-system/core";

import { footerContact } from "@/components/footerContact";
import { footerSocials } from "@/components/footerSocials";

export function Footer() {
  const year = new Date().getFullYear();
  const { title, availability, linkedInCta } = footerContact;

  return (
    <Column as="footer" fillWidth>
      <Column fillWidth horizontal="center" paddingY="48" paddingX="16">
        <Background
          position="absolute"
          top="0"
          left="0"
          fill
          pointerEvents="none"
          gradient={{
            display: true,
            colorStart: "brand-alpha-weak",
            colorEnd: "static-transparent",
            x: 12,
            y: 88,
            width: 180,
            height: 160,
            tilt: 45,
            opacity: 40,
          }}
          dots={{
            display: true,
            color: "brand-alpha-weak",
            size: "12",
            opacity: 50,
          }}
        />
        <Column
          zIndex={1}
          maxWidth="m"
          gap="20"
          fillWidth
          horizontal="center"
          align="center"
        >
          <Heading as="h2" variant="heading-medium-l" align="center">
            {title}
          </Heading>
          <Column maxWidth="xs" fillWidth horizontal="center">
            <Text
              variant="body-default-m"
              onBackground="neutral-weak"
              align="center"
              wrap="balance"
            >
              {availability}
            </Text>
          </Column>
          <SmartLink
            href={linkedInCta.href}
            target="_blank"
            rel="noopener noreferrer"
            unstyled
          >
            <Badge
              id={linkedInCta.id}
              arrow={false}
              background="overlay"
              border="neutral-alpha-medium"
              onBackground="neutral-strong"
              textVariant="label-normal-s"
              vertical="center"
              gap="8"
            >
              {linkedInCta.label}
              <Icon name="arrowUpRight" size="xs" onBackground="brand-medium" />
            </Badge>
          </SmartLink>
        </Column>
      </Column>

      <Row
        fillWidth
        padding="8"
        horizontal="center"
        s={{ direction: "column" }}
      >
        <Row
          maxWidth="m"
          paddingY="8"
          paddingX="16"
          gap="16"
          horizontal="between"
          vertical="center"
          s={{
            direction: "column",
            horizontal: "center",
            align: "center",
          }}
        >
          <Text variant="body-default-s" onBackground="neutral-weak">
            © {year} Ankur Jain. Built with{" "}
            <SmartLink href="https://nextjs.org/">Next.js</SmartLink> &{" "}
            <SmartLink href="https://once-ui.com">Once UI</SmartLink>.
          </Text>
          <Row gap="16">
            {footerSocials.map((social) => (
              <IconButton
                key={social.href}
                href={social.href}
                icon={social.icon}
                tooltip={social.name}
                size="s"
                variant="ghost"
              />
            ))}
          </Row>
        </Row>
        <Row hide height="80" s={{ hide: false }} />
      </Row>
    </Column>
  );
}
