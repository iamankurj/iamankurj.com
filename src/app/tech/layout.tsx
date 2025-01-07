import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header/Header';
import { PageLayout } from '@/components/layout/PageLayout';
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
      <Footer />
    </>
  );
}
