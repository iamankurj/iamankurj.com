import { Column } from "@once-ui-system/core";
import type { ComponentProps, ReactNode } from "react";

type ColumnProps = ComponentProps<typeof Column>;

type SectionAtmosphereProps = {
  children?: ReactNode;
  /**
   * Full-viewport base colour for this section (home, /tech, …).
   * Independent of the shared body `background="page"` fallback.
   */
  background?: ColumnProps["background"];
} & Omit<
  ColumnProps,
  "children" | "position" | "top" | "left" | "pointerEvents" | "background"
>;

/**
 * Viewport-fixed atmosphere for a first-level section.
 * - `background`: full-page colour for this section only
 * - other props + children: decorative effect shell (Mask, MatrixFx, …)
 */
export function SectionAtmosphere({
  children,
  background,
  style,
  ...rest
}: SectionAtmosphereProps) {
  return (
    <>
      {background != null ? (
        <Column
          position="fixed"
          top="0"
          left="0"
          fillWidth
          height="100vh"
          background={background}
          pointerEvents="none"
          aria-hidden
        />
      ) : null}
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
    </>
  );
}
