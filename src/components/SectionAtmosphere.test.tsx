/** @vitest-environment jsdom */
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";

vi.mock("@once-ui-system/core", () => ({
  Column: ({
    children,
    ...rest
  }: {
    children?: ReactNode;
    position?: string;
    top?: string;
    left?: string;
    pointerEvents?: string;
    background?: string;
  }) => (
    <div
      data-testid="section-atmosphere"
      data-position={rest.position}
      data-top={rest.top}
      data-left={rest.left}
      data-pointer-events={rest.pointerEvents}
      data-background={rest.background}
    >
      {children}
    </div>
  ),
}));

import { SectionAtmosphere } from "./SectionAtmosphere";

describe("SectionAtmosphere", () => {
  it("pins a non-interactive fixed shell and renders children", () => {
    render(
      <SectionAtmosphere background="surface">
        <span>effect</span>
      </SectionAtmosphere>,
    );

    const shell = screen.getByTestId("section-atmosphere");
    expect(shell).toHaveAttribute("data-position", "fixed");
    expect(shell).toHaveAttribute("data-top", "0");
    expect(shell).toHaveAttribute("data-left", "0");
    expect(shell).toHaveAttribute("data-pointer-events", "none");
    expect(shell).toHaveAttribute("data-background", "surface");
    expect(shell).toHaveTextContent("effect");
  });
});
