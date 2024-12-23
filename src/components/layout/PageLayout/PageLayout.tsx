import { Flex } from '@/once-ui/components';
import { FlexProps, SpacingProps, SizeProps, StyleProps, CommonProps, DisplayProps, ConditionalProps } from '@/once-ui/interfaces';
import { forwardRef, ReactNode } from 'react';

interface PageLayoutProps extends
  FlexProps,
  SpacingProps,
  SizeProps,
  StyleProps,
  CommonProps,
  DisplayProps,
  ConditionalProps {
  children: ReactNode;
}

export const PageLayout = forwardRef<HTMLDivElement, PageLayoutProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Flex
        paddingTop="l"
        paddingX="l"
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
