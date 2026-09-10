import { SectionAtmosphere } from "@/components/SectionAtmosphere";
import { Mask, MatrixFx } from "@once-ui-system/core";
import type { ReactNode } from "react";

/**
 * Tech section atmosphere. Starts close to home; tweak `background` and the
 * Mask/MatrixFx props here only so /tech can diverge while home stays put.
 */
export default function TechLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SectionAtmosphere background="page" maxHeight="100dvh" aspectRatio="1">
        <Mask maxWidth="m" x={50} y={0} radius={50}>
          <MatrixFx
            size={1.5}
            spacing={7}
            fps={24}
            colors={["brand-on-background-weak"]}
            flicker
          />
        </Mask>
      </SectionAtmosphere>
      {children}
    </>
  );
}
