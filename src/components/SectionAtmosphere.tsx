import { Column } from "@once-ui-system/core";
import type { ComponentProps, ReactNode } from "react";

type SectionAtmosphereProps = {
  children?: ReactNode;
} & Omit<
  ComponentProps<typeof Column>,
  "children" | "position" | "top" | "left" | "pointerEvents"
>;

/**
 * Viewport-fixed decorative layer for a first-level section (home, /tech, …).
 * Keep aesthetics in the section layout/page; this only pins the shell.
 */
export function SectionAtmosphere({
  children,
  style,
  ...rest
}: SectionAtmosphereProps) {
  return (
    <Column
      fillWidth
      horizontal="center"
      {...rest}
      position="fixed"
      top="0"
      left="0"
      pointerEvents="none"
      style={style}
    >
      {children}
    </Column>
  );
}
