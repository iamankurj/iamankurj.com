"use client";

import { Footer } from '@/components/layout/Footer';
import { MainSection } from '@/components/layout/MainSection';
import { PageLayout } from '@/components/layout/PageLayout';
import { Flex, Heading, InlineCode, RevealFx, SmartImage } from '@/once-ui/components';

export default function FitnessHome() {
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
                Flexing those <span className="brand-on-background-medium">Muscles</span> soon!
              </InlineCode>
              <RevealFx>
                <Heading
                  wrap="balance"
                  variant="display-strong-s">
                  <span className="font-code">
                    let's try to uncomplicate the unnecessarily complicated world of fitness...
                  </span>
                </Heading>
                <Heading
                  paddingTop='l'
                  wrap="balance"
                  variant="body-default-m">
                  <span className="font-code">
                    both mental and physical :)
                  </span>
                </Heading>
              </RevealFx>
            </Flex>
          </Flex>
        </Flex>
      </MainSection>
      <Footer></Footer>
    </PageLayout>
  );
}
