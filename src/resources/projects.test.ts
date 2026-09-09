import { describe, expect, it } from "vitest";
import {
  PROJECTS_BASE_PATH,
  formatProjectDate,
  projectPath,
  projectsPageContent,
} from "./projects";

describe("projectPath", () => {
  it("builds root-relative detail URLs under /tech/projects", () => {
    expect(PROJECTS_BASE_PATH).toBe("/tech/projects");
    expect(projectPath("iamankurj-com")).toBe("/tech/projects/iamankurj-com");
  });
});

describe("formatProjectDate", () => {
  it("formats ISO calendar dates in en-US", () => {
    expect(formatProjectDate("2024-06-15")).toBe("June 15, 2024");
  });

  it("returns the input when the date is not YYYY-MM-DD", () => {
    expect(formatProjectDate("soon")).toBe("soon");
  });
});

describe("projectsPageContent", () => {
  it("exposes list page title copy", () => {
    expect(projectsPageContent.title).toBe("Projects");
  });
});
