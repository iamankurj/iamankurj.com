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
        fillWidth
        flex={1}
        maxWidth="m"
        direction="column"
        ref={ref}
        {...rest}
      >
        {children}
      </Flex>
    );
  }
);
