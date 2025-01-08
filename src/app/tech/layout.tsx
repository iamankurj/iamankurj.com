import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { techSocials } from '@/content/tech/home';
import { Flex } from '@/once-ui/components';

export default function TechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Flex
        fillWidth
        minHeight="16">
      </Flex>
      <Header />
      <Flex
        zIndex={0}
        fillWidth paddingY="l" paddingX="l"
        justifyContent="center" flex={1}>
        <Flex
          justifyContent="center"
          fillWidth minHeight="0">
          {children}
        </Flex>
      </Flex>
      <Footer socials={techSocials} />
      <Flex height="80" show="s"></Flex>
    </>
  );
}
