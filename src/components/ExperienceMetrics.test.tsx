/** @vitest-environment jsdom */
import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("@once-ui-system/core", () => ({
  Grid: ({ children }: { children?: ReactNode }) => (
    <div data-testid="once-grid">{children}</div>
  ),
  Column: ({ children }: { children?: ReactNode }) => (
    <div data-testid="once-column">{children}</div>
  ),
  Text: ({ children }: { children?: ReactNode }) => <span>{children}</span>,
}));

import { ExperienceMetrics } from "./ExperienceMetrics";

afterEach(() => {
  cleanup();
});

describe("ExperienceMetrics", () => {
  it("renders the four impact metrics from experience content", () => {
    render(<ExperienceMetrics />);

    expect(screen.getByText("900M+")).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("4+")).toBeInTheDocument();
    expect(screen.getByText("Yrs GoLang")).toBeInTheDocument();
    expect(screen.getByText("98%")).toBeInTheDocument();
    expect(screen.getByText("Manual Savings")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("QA Bugs")).toBeInTheDocument();
    expect(
      screen.getByText(/Messenger & Instagram Direct/),
    ).toBeInTheDocument();
  });
});
