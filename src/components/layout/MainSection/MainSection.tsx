import { Flex } from '@/once-ui/components';
import { FlexProps, SpacingProps, SizeProps, StyleProps, CommonProps, DisplayProps, ConditionalProps } from '@/once-ui/interfaces';
import { forwardRef, ReactNode } from 'react';

interface MainSectionProps extends
  FlexProps,
  SpacingProps,
  SizeProps,
  StyleProps,
  CommonProps,
  DisplayProps,
  ConditionalProps {
  children: ReactNode;
}

export const MainSection = forwardRef<HTMLDivElement, MainSectionProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Flex
        position="relative"
        as="section"
        overflow="hidden"
        fillWidth
        minHeight="0"
        maxWidth={68}
        direction="column"
        alignItems="center"
        flex={1}
        ref={ref}
        {...rest}
      >
        {children}
      </Flex>
    );
  }
);
