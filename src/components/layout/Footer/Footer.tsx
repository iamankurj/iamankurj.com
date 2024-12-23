"use client";

import React from 'react';
import Link from 'next/link';
import { Flex, Text, Button, IconButton } from '@/once-ui/components';
import { useBreakpoint } from '@/once-ui/hooks';
import { socials } from '@/resources/content'

export function Footer() {
  const breakpoint = useBreakpoint();

  return (
    <Flex 
      as="footer"
      position="relative"
      fillWidth paddingX="l" paddingY="m"
      justifyContent="space-between">
      <Text
        variant="body-default-s" onBackground="neutral-weak">
        2024 Once UI, <Link href="https://github.com/once-ui-system/nextjs-starter?tab=MIT-1-ov-file">MIT License</Link>
      </Text>
      <Flex gap="12">
        {breakpoint === 'sm' ? (
          socials.map((social) => (
            <IconButton
              key={social.href}
              href={social.href}
              icon={social.icon}
              size="s"
              variant="tertiary"
              tooltip={social.title} />
          ))
        ) : (
          socials.map((social) => (
            <Button
              key={social.href}
              href={social.href}
              prefixIcon={social.icon}
              size="s"
              variant="tertiary">
              {social.title}
            </Button>
          ))
        )}
      </Flex>
    </Flex>
  );
}
