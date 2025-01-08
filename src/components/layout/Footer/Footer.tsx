"use client";

import { person } from '@/content/shared/person';
import { Flex, IconButton, SmartLink, Text } from '@/once-ui/components';
import styles from './Footer.module.scss';

interface Social {
  href: string;
  icon: string;
  title: string;
}

interface FooterProps {
  socials: Social[];
}

export function Footer({ socials }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      position="relative"
      fillWidth
      padding='8'
      justifyContent="center"
      mobileDirection="column">
      <Flex
        className={styles.mobile}
        fillWidth maxWidth="m" paddingY="8" paddingX="16" gap="16"
        justifyContent="space-between" alignItems="center">
        <Text /* copyright stuff */
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
        <Flex gap="s"> {/* socials */}
          {socials.map((social) => (
            <IconButton
              key={social.href}
              href={social.href}
              icon={social.icon}
              tooltip={social.title}
              size="s"
              variant="ghost" />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
