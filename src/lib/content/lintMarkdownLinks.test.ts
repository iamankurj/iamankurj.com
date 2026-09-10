import { describe, expect, it } from "vitest";
import {
  assertMarkdownLinksAllowed,
  explainDisallowedMarkdownHref,
  extractMarkdownHrefs,
  stripMarkdownCode,
} from "./lintMarkdownLinks";

describe("explainDisallowedMarkdownHref", () => {
  it("allows root-relative, hash, http(s), and mailto", () => {
    expect(explainDisallowedMarkdownHref("/tech/projects/a")).toBeUndefined();
    expect(explainDisallowedMarkdownHref("#overview")).toBeUndefined();
    expect(explainDisallowedMarkdownHref("https://example.com")).toBeUndefined();
    expect(explainDisallowedMarkdownHref("mailto:a@b.com")).toBeUndefined();
  });

  it("rejects .md paths and other relative hrefs", () => {
    expect(explainDisallowedMarkdownHref("./slug.md")).toMatch(/not allowed/);
    expect(explainDisallowedMarkdownHref("slug.md")).toMatch(/not allowed/);
    expect(explainDisallowedMarkdownHref("../other")).toMatch(/Relative link/);
    expect(explainDisallowedMarkdownHref("other-page")).toMatch(/Relative link/);
  });

  it("rejects dangerous schemes", () => {
    expect(explainDisallowedMarkdownHref("javascript:alert(1)")).toMatch(
      /Dangerous/,
    );
    expect(explainDisallowedMarkdownHref("data:text/html,hi")).toMatch(
      /Dangerous/,
    );
  });
});

describe("extractMarkdownHrefs", () => {
  it("finds links and ignores fenced code examples", () => {
    const body = `
See [Projects](/tech/projects) and [live](https://example.com).

\`\`\`md
[bad](./nope.md)
\`\`\`
`;
    expect(extractMarkdownHrefs(body)).toEqual([
      "/tech/projects",
      "https://example.com",
    ]);
  });

  it("ignores links that appear only inside HTML comments", () => {
    const body = `
<!-- see [bad](./draft.md) later -->

Go [home](/).
`;
    expect(extractMarkdownHrefs(body)).toEqual(["/"]);
  });

  it("stripMarkdownCode removes fences", () => {
    expect(stripMarkdownCode("a\n```\nx\n```\nb")).toBe("a\n\nb");
  });
});

describe("assertMarkdownLinksAllowed", () => {
  it("passes clean bodies", () => {
    expect(() =>
      assertMarkdownLinksAllowed(
        "Go [home](/) or [out](https://example.com).",
        "sample.md",
      ),
    ).not.toThrow();
  });

  it("throws with file path and offending href", () => {
    expect(() =>
      assertMarkdownLinksAllowed(
        "See [other](./coursecorrect.md).",
        "content/projects/sample.md",
      ),
    ).toThrow(/content\/projects\/sample\.md[\s\S]*coursecorrect\.md/);
  });
});
