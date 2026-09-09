import { describe, expect, it } from "vitest";
import { parseProjectFrontmatter, projectFrontmatterSchema } from "./schemas";

const valid = {
  title: "CourseCorrect.fyi",
  summary: "Career and course correction tool.",
  publishedAt: "2024-04-08",
} as const;

describe("projectFrontmatterSchema", () => {
  it("accepts required fields and applies defaults", () => {
    const parsed = parseProjectFrontmatter(valid);

    expect(parsed).toEqual({
      title: valid.title,
      summary: valid.summary,
      publishedAt: valid.publishedAt,
      images: [],
      draft: false,
    });
  });

  it("accepts optional images, link, and draft", () => {
    const parsed = parseProjectFrontmatter({
      ...valid,
      images: ["/images/projects/coursecorrect/cover.jpg"],
      link: "https://coursecorrect.fyi",
      draft: true,
    });

    expect(parsed.images).toEqual([
      "/images/projects/coursecorrect/cover.jpg",
    ]);
    expect(parsed.link).toBe("https://coursecorrect.fyi");
    expect(parsed.draft).toBe(true);
  });

  it("treats empty link as undefined", () => {
    const parsed = parseProjectFrontmatter({ ...valid, link: "" });
    expect(parsed.link).toBeUndefined();
  });

  it("rejects empty title or summary", () => {
    expect(() => parseProjectFrontmatter({ ...valid, title: "" })).toThrow();
    expect(() => parseProjectFrontmatter({ ...valid, summary: "" })).toThrow();
  });

  it("rejects non YYYY-MM-DD publishedAt", () => {
    expect(() =>
      parseProjectFrontmatter({ ...valid, publishedAt: "04-08-2024" }),
    ).toThrow();
    expect(() =>
      parseProjectFrontmatter({ ...valid, publishedAt: "2024/04/08" }),
    ).toThrow();
  });

  it("rejects invalid link URLs", () => {
    expect(() =>
      parseProjectFrontmatter({ ...valid, link: "not-a-url" }),
    ).toThrow();
  });

  it("exposes the same schema used by parseProjectFrontmatter", () => {
    expect(projectFrontmatterSchema.parse(valid).title).toBe(valid.title);
  });
});
