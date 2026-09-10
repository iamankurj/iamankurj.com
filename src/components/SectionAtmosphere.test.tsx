/** @vitest-environment jsdom */
import "@testing-library/jest-dom/vitest";
import { cleanup, render } from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

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
    height?: string;
    "aria-hidden"?: boolean | "true" | "false";
  }) => (
    <div
      data-testid={
        rest.background != null && children == null
          ? "section-atmosphere-base"
          : "section-atmosphere-effect"
      }
      data-position={rest.position}
      data-top={rest.top}
      data-left={rest.left}
      data-pointer-events={rest.pointerEvents}
      data-background={rest.background}
      data-height={rest.height}
    >
      {children}
    </div>
  ),
}));

import { SectionAtmosphere } from "./SectionAtmosphere";

afterEach(() => {
  cleanup();
});

describe("SectionAtmosphere", () => {
  it("pins a non-interactive effect shell and renders children", () => {
    const { getByTestId, queryByTestId } = render(
      <SectionAtmosphere maxHeight="100dvh">
        <span>effect</span>
      </SectionAtmosphere>,
    );

    expect(queryByTestId("section-atmosphere-base")).not.toBeInTheDocument();
    const shell = getByTestId("section-atmosphere-effect");
    expect(shell).toHaveAttribute("data-position", "fixed");
    expect(shell).toHaveAttribute("data-top", "0");
    expect(shell).toHaveAttribute("data-left", "0");
    expect(shell).toHaveAttribute("data-pointer-events", "none");
    expect(shell).toHaveTextContent("effect");
  });

  it("paints a full-viewport base colour separate from the effect shell", () => {
    const { getByTestId } = render(
      <SectionAtmosphere background="surface" maxHeight="100dvh">
        <span>effect</span>
      </SectionAtmosphere>,
    );

    const base = getByTestId("section-atmosphere-base");
    expect(base).toHaveAttribute("data-background", "surface");
    expect(base).toHaveAttribute("data-height", "100vh");
    expect(base).toHaveAttribute("data-pointer-events", "none");

    const shell = getByTestId("section-atmosphere-effect");
    expect(shell).not.toHaveAttribute("data-background");
    expect(shell).toHaveTextContent("effect");
  });
});
