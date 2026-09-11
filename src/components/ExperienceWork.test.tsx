/** @vitest-environment jsdom */
import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("@once-ui-system/core", () => ({
  Column: ({ children }: { children?: ReactNode }) => (
    <div data-testid="once-column">{children}</div>
  ),
  Row: ({ children }: { children?: ReactNode }) => (
    <div data-testid="once-row">{children}</div>
  ),
  HeadingLink: ({
    as: Tag = "h2",
    id,
    children,
  }: {
    as?: keyof HTMLElementTagNameMap;
    id: string;
    children?: ReactNode;
  }) => (
    <Tag data-testid="once-heading-link" id={id}>
      {children}
    </Tag>
  ),
  Timeline: ({
    items,
  }: {
    items: Array<{
      label?: ReactNode;
      description?: ReactNode;
      children?: ReactNode;
    }>;
  }) => (
    <div data-testid="once-timeline">
      {items.map((item, index) => (
        <div key={index} data-testid="once-timeline-item">
          <div>{item.label}</div>
          <div>{item.description}</div>
          <div>{item.children}</div>
        </div>
      ))}
    </div>
  ),
  Tag: ({ label }: { label?: string }) => (
    <span data-testid="once-tag">{label}</span>
  ),
  List: ({ children }: { children?: ReactNode }) => <ul>{children}</ul>,
  ListItem: ({ children }: { children?: ReactNode }) => <li>{children}</li>,
  Text: ({ children }: { children?: ReactNode }) => <span>{children}</span>,
}));

import { ExperienceWork } from "./ExperienceWork";

afterEach(() => {
  cleanup();
});

describe("ExperienceWork", () => {
  it("renders timeline entries with role, company, dates, tags, and achievements", () => {
    render(<ExperienceWork />);

    expect(screen.getByRole("heading", { name: "Career History" })).toHaveAttribute(
      "id",
      "career-history",
    );
    expect(
      screen.getByText("Senior Software Engineering Consultant, Flybits"),
    ).toBeInTheDocument();
    expect(screen.getByText("Apr 2023 - Dec 2025")).toBeInTheDocument();
    expect(
      screen.getByText("Engineering Leadership, Architecture & Client Delivery"),
    ).toBeInTheDocument();
    expect(screen.getAllByText("GoLang").length).toBeGreaterThan(0);
    expect(screen.getByText(/Flow Visualizer/)).toBeInTheDocument();
    expect(
      screen.getByText("Server Engineer (Well-Being Engineering), Meta"),
    ).toBeInTheDocument();
  });
});
