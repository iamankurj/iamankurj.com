"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, SmartImage, LetterFx } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
  const links = [
    {
      href: "https://once-ui.com/docs/theming",
      title: "Vocal Vibes",
      description: "The Singer in Me",
    },
    {
      href: "https://once-ui.com/docs/flexComponent",
      title: "Tech Tracks",
      description: "The Techie in Me",
    },
    {
      href: "https://once-ui.com/docs/typography",
      title: "Money Maven",
      description: "The Finance Fanatic in Me",
    },
    {
      href: "https://once-ui.com/docs/typography",
      title: "Fit Frenzy",
      description: "The Fitness Buff in Me",
    },
  ];

  return (
    <Flex
      fillWidth paddingTop="l" paddingX="l"
      direction="column" alignItems="center" flex={1}>
      <Flex
        position="relative"
        as="section" overflow="hidden"
        fillWidth minHeight="0" maxWidth={68}
        direction="column" alignItems="center" flex={1}>
        <Flex
          as="main"
          direction="column" justifyContent="center"
          fillWidth fillHeight padding="l" gap="l">
          <Flex
            mobileDirection="column"
            fillWidth gap="24">
            <Flex
              position="relative"
              flex={2} paddingTop="56" paddingX="xl">
              <Flex
                minHeight={10} minWidth={10}
                maxWidth={10} maxHeight={10}>
                <SmartImage
                  src="/images/me_by_the_river.jpg"
                  alt="Ankur J"
                  aspectRatio="1"
                  radius="full"
                  objectFit="cover"
                />
              </Flex>
            </Flex>
            <Flex
              position="relative"
              flex={4} gap="24" marginBottom="104"
              direction="column">
              <InlineCode
                className="shadow-m"
                style={{
                  width: 'fit-content',
                  padding: 'var(--static-space-8) var(--static-space-16)',
                  backdropFilter: 'blur(var(--static-space-1))'
                }}>
                Start by editing <span className="brand-on-background-medium">app/page.tsx</span>
              </InlineCode>
              <Heading
                wrap="balance"
                variant="display-strong-s">
                <span className="font-code">
                  <LetterFx
                    trigger="instant">
                    Welcome to My World! Dive in for a sneak peek at the passions I geek out about.
                  </LetterFx>
                </span>
              </Heading>
              {/* <Button
                id="readDocs"
                href="https://once-ui.com/docs"
                variant="secondary">
                <Flex alignItems="center">
                  Read docs
                  <Arrow trigger="#readDocs" />
                </Flex>
              </Button> */}
            </Flex>
          </Flex>
          <Grid
            radius="l"
            border="neutral-medium"
            borderStyle="solid-1"
            columns="repeat(4, 1fr)"
            tabletColumns="2col"
            mobileColumns="1col"
            gap="m"
            fillWidth>
            {links.map((link) => (
              <Link
                target="_blank"
                style={{ padding: 'var(--responsive-space-m)' }}
                key={link.href}
                href={link.href}>
                <Flex
                  fillWidth paddingY="8" gap="8"
                  direction="column">
                  <Flex
                    fillWidth gap="8"
                    alignItems="center">
                    <Text
                      variant="body-strong-m" onBackground="neutral-strong">
                      {link.title}
                    </Text>
                    <Icon size="s" name="arrowUpRight" />
                  </Flex>
                  <Text
                    variant="body-default-s" onBackground="neutral-weak">
                    {link.description}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Grid>
        </Flex>
      </Flex>
      <Flex
        as="footer"
        position="relative"
        fillWidth paddingX="l" paddingY="m"
        justifyContent="space-between">
        <Text
          variant="body-default-s" onBackground="neutral-weak">
          2024 Once UI, <Link href="https://github.com/once-ui-system/nextjs-starter?tab=MIT-1-ov-file">MIT License</Link>
        </Text>
        <Flex
          gap="12">
          <Button
            href="https://github.com/once-ui-system/nextjs-starter"
            prefixIcon="github" size="s" variant="tertiary">
            GitHub
          </Button>
          <Button
            href="https://discord.com/invite/5EyAQ4eNdS"
            prefixIcon="discord" size="s" variant="tertiary">
            Discord
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
