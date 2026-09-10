import { describe, expect, it } from "vitest";
import { stripHtmlComments } from "./stripHtmlComments";

describe("stripHtmlComments", () => {
  it("removes HTML comments from prose", () => {
    const body = `<!-- author note -->

## Overview

Hello.
`;
    expect(stripHtmlComments(body)).toBe(`

## Overview

Hello.
`);
  });

  it("removes multiline HTML comments", () => {
    const body = `<!--
  publishedAt: estimate
  draft: true until images exist
-->

## Overview
`;
    expect(stripHtmlComments(body)).not.toContain("publishedAt");
    expect(stripHtmlComments(body)).toContain("## Overview");
  });

  it("keeps HTML comment text inside fenced code blocks", () => {
    const body = `Intro

\`\`\`html
<!-- keep this -->
\`\`\`
`;
    expect(stripHtmlComments(body)).toContain("<!-- keep this -->");
  });
});
