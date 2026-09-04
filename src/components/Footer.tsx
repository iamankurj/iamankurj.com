import { IconButton, Row, SmartLink, Text } from "@once-ui-system/core";

import { footerSocials } from "@/components/footerSocials";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
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
          © {year} Ankur Jain. Built with <SmartLink href="https://nextjs.org/">Next.js</SmartLink> & <SmartLink href="https://once-ui.com">Once UI</SmartLink>.
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
  );
}
