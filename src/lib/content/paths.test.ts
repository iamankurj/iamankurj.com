import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  CONTENT_COLLECTIONS,
  CONTENT_DIR,
  collectionDir,
  contentRoot,
} from "./paths";

describe("content paths", () => {
  const cwd = "/repo";

  it("resolves content root under cwd", () => {
    expect(contentRoot(cwd)).toBe(path.join(cwd, CONTENT_DIR));
  });

  it("resolves each collection under content/", () => {
    for (const name of CONTENT_COLLECTIONS) {
      expect(collectionDir(name, cwd)).toBe(
        path.join(cwd, CONTENT_DIR, name),
      );
    }
  });

  it("defaults cwd to process.cwd()", () => {
    expect(contentRoot()).toBe(path.join(process.cwd(), CONTENT_DIR));
    expect(collectionDir("projects")).toBe(
      path.join(process.cwd(), CONTENT_DIR, "projects"),
    );
  });
});
