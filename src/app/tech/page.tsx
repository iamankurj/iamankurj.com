import { Footer } from '@/components/layout/Footer';
import { MainSection } from '@/components/layout/MainSection';
import { PageLayout } from '@/components/layout/PageLayout';
import TableOfContents from '@/components/TableOfContents/TableOfContents';
import { Flex } from '@/once-ui/components';
import { about } from '@/resources/content';

export default function TechHome() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: []
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map(experience => experience.company)
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map(institution => institution.name)
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map(skill => skill.title)
    },
  ]

  return (
    <PageLayout>
      <MainSection>
        {about.tableOfContent.display && (
          <Flex
            style={{ left: '0', top: '50%', transform: 'translateY(-50%)' }}
            position="fixed"
            paddingLeft="24" gap="32"
            direction="column" hide="s">
            <TableOfContents
              structure={structure}
              about={about} />
          </Flex>
        )}
      </MainSection>
      <Footer></Footer>
    </PageLayout>
  );
}
