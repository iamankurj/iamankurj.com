import { describe, expect, it } from "vitest";
import {
  classifyMarkdownHref,
  isBlockedMarkdownHref,
  slugifyHeadingText,
} from "./markdownLink";

describe("classifyMarkdownHref", () => {
  it("treats site paths as internal", () => {
    expect(classifyMarkdownHref("/tech/projects")).toBe("internal");
  });

  it("treats hash links as hash", () => {
    expect(classifyMarkdownHref("#overview")).toBe("hash");
  });

  it("treats absolute URLs as external", () => {
    expect(classifyMarkdownHref("https://example.com")).toBe("external");
  });

  it("blocks dangerous schemes", () => {
    expect(isBlockedMarkdownHref("javascript:alert(1)")).toBe(true);
    expect(classifyMarkdownHref("javascript:alert(1)")).toBe("blocked");
    expect(classifyMarkdownHref(undefined)).toBe("blocked");
  });
});

describe("slugifyHeadingText", () => {
  it("slugifies headings used as anchor ids", () => {
    expect(slugifyHeadingText("Architecture & System Design")).toBe(
      "architecture-and-system-design",
    );
    expect(slugifyHeadingText("  Tech Stack  ")).toBe("tech-stack");
  });
});
