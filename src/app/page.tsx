"use client";


import { Footer } from '@/components/layout/Footer';
import { MainSection } from '@/components/layout/MainSection';
import { PageLayout } from '@/components/layout/PageLayout';
import { Flex, Grid, Heading, Icon, InlineCode, LetterFx, SmartImage, Text } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {

  const links = [
    {
      href: "/singing",
      title: "Vocal Vibes",
      description: "The Singer in Me",
    },
    {
      href: "/tech",
      title: "Tech Tracks",
      description: "The Techie in Me",
    },
    {
      href: "/finance",
      title: "Finance Fanatic",
      description: "The Money Nerd in Me",
    },
    {
      href: "/fitness",
      title: "Fit Frenzy",
      description: "The Fitness Buff in Me",
    },
  ];

  return (
    <PageLayout>
      <MainSection>
        <Flex
          as="main"
          direction="column" justifyContent="center"
          fillWidth fillHeight padding="l" gap="l">
          <Flex /* top */
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
                Welcome to <span className="brand-on-background-medium">My World!</span>
              </InlineCode>
              <Heading
                wrap="balance"
                variant="display-strong-s">
                <span className="font-code">
                  <LetterFx
                    trigger="instant">
                    a sneak peek at the passions I geek out about
                  </LetterFx>
                </span>
              </Heading>
            </Flex>
          </Flex>
          <Grid /* bottom */
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
      </MainSection>
      <Footer></Footer>
    </PageLayout>
  );
}
