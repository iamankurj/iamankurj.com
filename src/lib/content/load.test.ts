import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { getCollection, getEntry } from "./load";

const fixturesCwd = path.join(import.meta.dirname, "__fixtures__");
const invalidCwd = path.join(import.meta.dirname, "__fixtures__", "invalid-content");
const invalidLinksCwd = path.join(
  import.meta.dirname,
  "__fixtures__",
  "invalid-links",
);

describe("getCollection", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("returns [] when the collection directory is missing", () => {
    expect(
      getCollection("finance", { cwd: fixturesCwd, includeDrafts: true }),
    ).toEqual([]);
  });

  it("loads projects sorted by order ascending, then publishedAt", () => {
    const entries = getCollection("projects", {
      cwd: fixturesCwd,
      includeDrafts: true,
    });

    expect(entries.map((entry) => entry.slug)).toEqual([
      "beta",
      "alpha",
      "draft-only",
    ]);
    expect(entries[0]?.metadata.order).toBe(1);
    expect(entries[1]?.metadata.title).toBe("Alpha Project");
    expect(entries[1]?.metadata.images).toEqual([]);
    expect(entries[2]?.body).toContain("Draft body.");
  });

  it("omits drafts by default in production", () => {
    vi.stubEnv("NODE_ENV", "production");

    const entries = getCollection("projects", { cwd: fixturesCwd });

    expect(entries.map((entry) => entry.slug)).toEqual(["beta", "alpha"]);
  });

  it("includes drafts by default outside production", () => {
    vi.stubEnv("NODE_ENV", "development");

    const entries = getCollection("projects", { cwd: fixturesCwd });

    expect(entries.some((entry) => entry.slug === "draft-only")).toBe(true);
  });

  it("throws when any file has invalid frontmatter", () => {
    expect(() =>
      getCollection("projects", { cwd: invalidCwd, includeDrafts: true }),
    ).toThrow(/Invalid frontmatter/);
  });
});

describe("getEntry", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("returns null for a missing slug", () => {
    expect(
      getEntry("projects", "missing", {
        cwd: fixturesCwd,
        includeDrafts: true,
      }),
    ).toBeNull();
  });

  it("returns a parsed entry by slug", () => {
    const entry = getEntry("projects", "alpha", {
      cwd: fixturesCwd,
      includeDrafts: true,
    });

    expect(entry?.slug).toBe("alpha");
    expect(entry?.metadata.link).toBe("https://example.com/alpha");
    expect(entry?.body).toContain("Body for alpha.");
  });

  it("loads iamankurj-com from the real content/ tree", () => {
    const entry = getEntry("projects", "iamankurj-com");

    expect(entry?.slug).toBe("iamankurj-com");
    expect(entry?.metadata.link).toBe("https://iamankurj.com");
    expect(entry?.metadata.draft).toBe(false);
    expect(entry?.metadata.images.length).toBeGreaterThan(0);
    expect(entry?.body).toContain("## Overview");
  });

  it("returns null for drafts in production", () => {
    vi.stubEnv("NODE_ENV", "production");

    expect(getEntry("projects", "draft-only", { cwd: fixturesCwd })).toBeNull();
  });

  it("throws for invalid frontmatter on a specific file", () => {
    expect(() =>
      getEntry("projects", "invalid", {
        cwd: invalidCwd,
        includeDrafts: true,
      }),
    ).toThrow(/invalid\.md/);
  });

  it("throws for disallowed relative markdown links", () => {
    expect(() =>
      getEntry("projects", "bad-links", {
        cwd: invalidLinksCwd,
        includeDrafts: true,
      }),
    ).toThrow(/Invalid markdown link/);
  });
});
