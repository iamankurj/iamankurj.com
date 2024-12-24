import { Footer } from '@/components/layout/Footer';
import { MainSection } from '@/components/layout/MainSection';
import { PageLayout } from '@/components/layout/PageLayout';
import TableOfContents from '@/components/TableOfContents/TableOfContents';
import { Avatar, Button, Flex, Heading, Icon, IconButton, SmartImage, Tag, Text } from '@/once-ui/components';
import { person } from '@/resources/content';
import { about } from './resources/content';
import { resume, structure } from './resources/resume';
import styles from './resources/resume.module.scss';

export async function generateMetadata() {
  return {
    title: 'Tech | Ankur Jain',
    description: 'Tech | Ankur Jain',
  }
}

export default function TechHome() {

  return (
    <PageLayout>
      <MainSection>
        {resume.tableOfContent.display && (
          <Flex
            style={{ left: '0', top: '50%', transform: 'translateY(-50%)' }}
            position="fixed"
            paddingLeft="24" gap="32"
            direction="column" hide="s">
            <TableOfContents
              structure={structure}
              about={resume} />
          </Flex>
        )}

        <Flex
          fillWidth
          mobileDirection="column" justifyContent="center">
          {resume.avatar.display && (
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
              {person.languages.length > 0 && (
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
              )}
            </Flex>
          )}

          <Flex
            className={styles.blockAlign}
            fillWidth flex={9} maxWidth={40} direction="column">
            <Flex
              id={resume.tldr.title}
              fillWidth minHeight="160"
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
              <Heading
                className={styles.textAlign}
                variant="display-strong-xl">
                {person.name}
              </Heading>
              <Text
                className={styles.textAlign}
                variant="display-default-xs"
                onBackground="neutral-weak">
                {person.role}
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
            </Flex>

            {resume.tldr.display && (
              <>
                <Heading
                  as="h2"
                  id={resume.work.title}
                  variant="display-strong-s"
                  marginBottom="m">
                  {resume.tldr.title}
                </Heading>
                <Flex
                  as="ul"
                  direction="column" gap="m" marginBottom='40'>
                  {resume.tldr.items.map((item, index) => (
                    <li key={`${item.line}-${index}`}>
                      <Text
                        variant="body-default-s"
                        onBackground='neutral-weak'>
                        {item.line}
                      </Text>
                    </li>
                  ))}
                </Flex>
              </>
            )}

            {resume.work.display && (
              <>
                <Heading
                  as="h2"
                  id={resume.work.title}
                  variant="display-strong-s"
                  marginBottom="m">
                  {resume.work.title}
                </Heading>
                <Flex
                  direction="column"
                  fillWidth gap="l" marginBottom="40">
                  {resume.work.experiences.map((experience, index) => (
                    <Flex
                      key={`${experience.company}-${experience.role}-${index}`}
                      fillWidth
                      direction="column">
                      <Flex
                        fillWidth
                        justifyContent="space-between"
                        alignItems="flex-end"
                        marginBottom="4">
                        <Text
                          id={experience.company}
                          variant="heading-strong-l">
                          {experience.company}, {experience.location}
                        </Text>
                        <Text
                          variant="heading-default-xs"
                          onBackground="neutral-weak">
                          {`${experience.startDate} - ${experience.endDate}`}
                        </Text>
                      </Flex>
                      <Text
                        variant="body-default-s"
                        onBackground="brand-medium"
                        marginBottom="m">
                        {experience.role}
                      </Text>
                      <Flex
                        as="ul"
                        direction="column" gap="16">
                        {experience.items && experience.items.map((item, itemIndex) => (
                          <li key={`${experience.company}-${index}-${itemIndex}`}>
                            <Text
                              variant="body-default-m"
                              onBackground='neutral-weak'
                            >
                              {item.line}
                            </Text>
                            {item.subItems && item.subItems.length > 0 && (
                              <Flex
                                as="ul"
                                direction="column"
                                gap="8"
                                paddingLeft='m'
                              >
                                {item.subItems.map((subItem, subIndex) => (
                                  <Text
                                    as="li"
                                    variant="body-default-s"
                                    onBackground='neutral-weak'
                                    marginTop='s'
                                    key={`${experience.company}-${index}-${subIndex}`}
                                  >
                                    {subItem.line}
                                  </Text>
                                ))}
                              </Flex>
                            )}
                          </li>
                        ))}
                      </Flex>
                      {/* {experience.images.length > 0 && (
                        <Flex
                          fillWidth paddingTop="m" paddingLeft="40"
                          wrap>
                          {experience.images.map((image, index) => (
                            <Flex
                              key={index}
                              border="neutral-medium"
                              borderStyle="solid-1"
                              radius="m"
                              minWidth={image.width} height={image.height}>
                              <SmartImage
                                enlarge
                                radius="m"
                                sizes={image.width.toString()}
                                alt={image.alt}
                                src={image.src} />
                            </Flex>
                          ))}
                        </Flex>
                      )} */}
                    </Flex>
                  ))}
                </Flex>
              </>
            )}

            {resume.testimonials.display && (
              <>
                <Heading
                  as="h2"
                  id={resume.testimonials.title}
                  variant="display-strong-s"
                  marginBottom="m">
                  {resume.testimonials.title}
                </Heading>
                <Flex
                  as="ul"
                  direction="column" gap="m" marginBottom='40'>
                  {resume.testimonials.items.map((testimonial, index) => (
                    <li key={`${testimonial.line}-${index}`}>
                      <Text
                        variant="heading-default-xs"
                        onBackground='neutral-weak'>
                        {testimonial.line}
                      </Text>
                    </li>
                  ))}
                </Flex>
              </>
            )}

            {resume.education.display && (
              <>
                <Heading
                  as="h2"
                  id={resume.education.title}
                  variant="display-strong-s" marginBottom="40">
                  {resume.education.title}
                </Heading>
                {resume.education.qualifications.map((qualification, index) => (
                  <Flex
                    key={`${qualification.name}-${index}`}
                    fillWidth
                    direction="column">
                    <Flex
                      fillWidth
                      justifyContent="space-between"
                      alignItems="flex-end"
                      marginBottom="4">
                      <Text
                        id={qualification.name}
                        variant="heading-strong-l">
                        {qualification.name}
                      </Text>
                      <Text
                        variant="heading-default-xs"
                        onBackground="neutral-weak">
                        {`${qualification.start} - ${qualification.end}`}
                      </Text>
                    </Flex>
                    <Text
                      variant="body-default-s"
                      onBackground="brand-medium"
                      marginBottom="m">
                      {qualification.university}
                    </Text>
                  </Flex>
                ))}
              </>
            )}
          </Flex>
        </Flex>
      </MainSection>
      <Footer></Footer>
    </PageLayout>
  );
}
