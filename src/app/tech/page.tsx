import { Carousel } from '@/components/Carousel';
import { MainSection } from '@/components/layout/MainSection';
import { baseURL } from '@/config/config';
import { person } from '@/content/shared/person';
import { home } from '@/content/tech/home';
import { resume } from '@/content/tech/work';
import { Arrow, Avatar, Button, Flex, Heading, Icon, IconButton, Tag, Text } from '@/once-ui/components';
import Link from 'next/link';
import styles from './about.module.scss';

export async function generateMetadata() {
  return {
    title: home.title,
    description: home.description,
  }
}

export default function TechHome() {
  return (
    <MainSection>
      <Flex
        fillWidth
        mobileDirection="column" justifyContent="center">
        {/* left section */}
        <Flex
          className={styles.avatar}
          minWidth="160" paddingX="l" paddingBottom="xl" gap="m"
          flex={3} direction="column" alignItems="center">
          <Avatar
            src={person.avatar}
            size="xl" />

          <Flex
            gap="8"
            alignItems="center">
            <Icon
              onBackground="accent-weak"
              name="globe" />
            {person.location}
          </Flex>

          <Flex
            wrap
            gap="8">
            {person.languages.map((language, index) => (
              <Tag
                key={index}
                size="l">
                {language}
              </Tag>
            ))}
          </Flex>

          <Button
            id="home"
            style={{
              backdropFilter: 'blur(var(--static-space-1))',
              border: '1px solid var(--brand-alpha-medium)',
              width: 'fit-content'
            }}
            data-border="rounded"
            href={`/`}
            variant="tertiary"
            size="m">
            <Flex
              gap="8"
              alignItems="center">
              <Icon name='piHouseDuotone'></Icon>
              {baseURL}
              <Arrow trigger="#home" />
            </Flex>
          </Button>
        </Flex>

        {/* right section */}
        <Flex
          className={styles.blockAlign} gap='m'
          fillWidth flex={9} maxWidth={40} direction="column">
          {/* about section */}
          <Flex
            fillWidth minHeight="160" gap='s'
            direction="column" justifyContent="center"
            marginBottom="32">
            {resume.calendar.display && (
              <Flex
                className={styles.blockAlign}
                style={{
                  backdropFilter: 'blur(var(--static-space-1))',
                  border: '1px solid var(--brand-alpha-medium)',
                  width: 'fit-content'
                }}
                alpha="brand-weak" radius="full"
                fillWidth padding="4" gap="8" marginBottom="m"
                alignItems="center">
                <Flex paddingLeft="12">
                  <Icon
                    name="calendar"
                    onBackground="brand-weak" />
                </Flex>
                <Flex
                  paddingX="8">
                  Book a meeting
                </Flex>
                <IconButton
                  href={resume.calendar.link}
                  data-border="rounded"
                  variant="tertiary"
                  icon="chevronRight" />
              </Flex>
            )}
            {/* <RevealFx translateY="4"> */}
            <Heading
              className={styles.textAlign}
              variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak">
              {home.headline}
            </Text>
            {resume.socials.length > 0 && (
              <Flex
                className={styles.blockAlign}
                paddingTop="20" paddingBottom="8" gap="8" wrap>
                {resume.socials.map((item) => (
                  item.href && (
                    <Button
                      key={item.title}
                      href={item.href}
                      prefixIcon={item.icon}
                      label={item.title}
                      size="s"
                      variant="tertiary" />
                  )
                ))}
              </Flex>
            )}
            {/* </RevealFx> */}
            <Text
              className={styles.textAlign}
              wrap="balance"
              onBackground="neutral-weak"
              variant="body-default-m">
              {home.subline}
            </Text>
          </Flex>

          {/* testimonials section */}

          <Flex
            fillWidth gap="m" marginBottom="40"
            direction="column">
            <Heading
              className={styles.textAlign}
              as="h2"
              variant="display-strong-s"
              onBackground='neutral-weak'>
              Testimonials
            </Heading>
            <Flex
              direction="column"
              gap="m"
              marginBottom='40'
              position="relative"
              overflow="hidden"
              style={{ height: "20px" }} // Adjust based on your content
            >
              <Carousel
                children={resume.testimonials.items.map((item, itemIndex) => (
                  <Flex
                    key={`testimonial-${itemIndex}`}
                    fillWidth
                    className={styles.blockAlign}>
                    <Text
                      className={styles.textAlign}
                      variant="heading-default-xs"
                      onBackground='neutral-weak'>
                      {item.line}
                    </Text>
                  </Flex>
                ))}
                interval={5000}
              />
            </Flex>
            <Text
              className={styles.textAlign}
              wrap="balance"
              onBackground="neutral-weak"
              variant="code-default-s">
              Check out my <Link
                href='https://www.linkedin.com/in/iamankurj/'
                target='_blank'>
                LinkedIn
              </Link> for more.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </MainSection>
  );
}
