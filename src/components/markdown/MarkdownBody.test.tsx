/** @vitest-environment jsdom */
import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("@once-ui-system/core", () => ({
  Text: ({ children }: { children?: ReactNode }) => (
    <p data-testid="once-text">{children}</p>
  ),
  HeadingLink: ({
    as: Tag = "h2",
    id,
    children,
  }: {
    as?: keyof HTMLElementTagNameMap;
    id: string;
    children?: ReactNode;
  }) => <Tag data-testid="once-heading" id={id}>{children}</Tag>,
  SmartLink: ({
    href,
    children,
    ...rest
  }: {
    href?: string;
    children?: ReactNode;
    target?: string;
    rel?: string;
  }) => (
    <a data-testid="once-smart-link" href={href} {...rest}>
      {children}
    </a>
  ),
  Media: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img data-testid="once-media" src={src} alt={alt} />
  ),
  InlineCode: ({ children }: { children?: ReactNode }) => (
    <code data-testid="once-inline-code">{children}</code>
  ),
  CodeBlock: ({
    codes,
  }: {
    codes: Array<{ code: string; language: string }>;
  }) => <pre data-testid="once-code-block">{codes[0]?.code}</pre>,
  List: ({
    as: Tag = "ul",
    children,
  }: {
    as?: "ul" | "ol";
    children?: ReactNode;
  }) => <Tag data-testid="once-list">{children}</Tag>,
  ListItem: ({ children }: { children?: ReactNode }) => <li>{children}</li>,
  Line: () => <hr data-testid="once-line" />,
  Row: ({ children }: { children?: ReactNode }) => <div>{children}</div>,
}));

import { MarkdownBody } from "./MarkdownBody";

afterEach(() => {
  cleanup();
});

describe("MarkdownBody", () => {
  it("maps headings, paragraphs, links, and GFM tables to Once UI stand-ins", () => {
    render(
      <MarkdownBody
        body={`## Overview

Hello **world** with an [internal](/tech/projects) and [external](https://example.com) link.

| Layer | Choice |
| --- | --- |
| Framework | Next.js |
`}
      />,
    );

    const heading = screen.getByTestId("once-heading");
    expect(heading.tagName).toBe("H2");
    expect(heading).toHaveAttribute("id", "overview");
    expect(heading).toHaveTextContent("Overview");

    expect(screen.getByRole("link", { name: "internal" })).toHaveAttribute(
      "href",
      "/tech/projects",
    );
    const external = screen.getByRole("link", { name: "external" });
    expect(external).toHaveAttribute("href", "https://example.com");
    expect(external).toHaveAttribute("rel", "noopener noreferrer");
    expect(external).toHaveAttribute("target", "_blank");

    expect(screen.getByRole("table")).toBeTruthy();
    expect(screen.getByText("Next.js")).toBeTruthy();
  });

  it("does not render HTML comments", () => {
    render(
      <MarkdownBody
        body={`<!-- author note: keep draft until images exist -->

## Overview

Visible prose.
`}
      />,
    );

    expect(screen.queryByText(/author note/i)).toBeNull();
    expect(screen.queryByText(/keep draft/i)).toBeNull();
    expect(screen.getByTestId("once-heading")).toHaveTextContent("Overview");
    expect(screen.getByText("Visible prose.")).toBeTruthy();
  });
});
