import { MainSection } from '@/components/layout/MainSection';
import TableOfContents from '@/components/TableOfContents/TableOfContents';
import { person } from '@/content/shared/person';
import { home } from '@/content/tech/home';
import { resume, structure } from '@/content/tech/work';
import { Accordion, Avatar, Flex, Heading, Icon, Tag, Text } from '@/once-ui/components';
import styles from '../about.module.scss';

export async function generateMetadata() {
  return {
    title: home.title,
    description: home.description,
  }
}

const layoutWithAvatar = false;

export default function TechWork() {
  const AccordionTitle = ({
    companyName, startDate, endDate
  }: {
    companyName: string;
    startDate: string;
    endDate: string;
  }) => (
    <Flex
      fillWidth
      justifyContent="space-between"
      alignItems="flex-end">
      <Text
        variant="body-strong-m"
        /* onBackground="brand-medium"
        marginBottom="m" */>
        {companyName}
      </Text>
      <Text
        variant="body-default-m"
        onBackground="neutral-weak">
        {`\u00A0(${startDate} - ${endDate})`}
      </Text>
    </Flex>
  );

  return (
    <>
      {!layoutWithAvatar && (
        <MainSection
        // style={{ border: '1px dotted grey' }}
        >
          {resume.tldr.display && (
            <Accordion
              title={resume.tldr.title}
              open
            >
              <Flex
                as="ul"
                direction="column" gap="m">
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
            </Accordion>
          )}

          {resume.work.display && (
            <>
              <Heading
                as="h2"
                id={resume.work.title}
                variant="heading-strong-m"
                paddingTop='l'
                marginY="l">
                {resume.work.title}
              </Heading>
              {resume.work.experiences.map((experience, index) => (
                <Accordion
                  // open
                  key={`${experience.company}-${experience.startDate}`}
                  title={
                    <AccordionTitle
                      companyName={experience.company}
                      startDate={experience.startDate}
                      endDate={experience.endDate}
                    />
                  }
                >
                  <Flex
                    direction="column"
                    fillWidth gap="xs" marginBottom="40">
                    <Flex
                      fillWidth
                      justifyContent="space-between"
                      alignItems="flex-end">
                      <Text
                        variant="body-default-s"
                        onBackground="brand-medium"
                        marginBottom="s">
                        {experience.role}
                      </Text>
                    </Flex>
                    <Flex
                      as="ul"
                      direction="column" gap="s">
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
                  </Flex>
                </Accordion>
              ))}
            </>
          )}

          {!resume.work.display && (
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
                  </Flex>
                ))}
              </Flex>
            </>
          )}

        </MainSection>
      )}

      {layoutWithAvatar && (<MainSection
      // style={{ border: '1px dotted grey' }}
      >
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
          </Flex>

          {/* right section */}
          <Flex
            className={styles.blockAlign} gap='m'
            fillWidth flex={9} maxWidth={40} direction="column">
            {resume.tldr.display && (
              <>
                <Heading
                  as="h2"
                  id={resume.tldr.title}
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
                    </Flex>
                  ))}
                </Flex>
              </>
            )}
          </Flex>
        </Flex>
      </MainSection>)}
    </>
  );
}