"use client";

import { Flex, IconButton, SmartLink, Text } from '@/once-ui/components';
import { person, socials } from '@/resources/content';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      position="relative"
      fillWidth 
      paddingX="l" 
      paddingY="m"
      justifyContent="space-between">
      <Text style={{border: '1px solid white'}} /* left */
        variant="body-default-s"
        onBackground="neutral-strong">
        <Text
          onBackground="neutral-weak">
          © {currentYear} /
        </Text>
        <Text paddingX="4">
          {person.name}
        </Text>
        <Text onBackground="neutral-weak">
          {/* Usage of this template requires attribution. Please don't remove the link to Once UI. */}
          / Build your own with <SmartLink style={{ marginLeft: '-0.125rem' }} href="https://once-ui.com">Once UI</SmartLink>
        </Text>
      </Text>
      <Flex style={{border: '1px solid red'}} gap="12"> {/* right */}
        {socials.map((social) => (
          <IconButton
            key={social.href}
            href={social.href}
            icon={social.icon}
            size="s"
            variant="tertiary"
            tooltip={social.title} />
        ))}
      </Flex>
    </Flex>
  );
}
