import { describe, expect, it } from "vitest";
import { headerNav, isHeaderPathSelected } from "./headerNav";

describe("isHeaderPathSelected", () => {
  it("selects Home only on /", () => {
    expect(isHeaderPathSelected("/", headerNav.home.href)).toBe(true);
    expect(isHeaderPathSelected("/experience", headerNav.home.href)).toBe(false);
    expect(isHeaderPathSelected("/projects", headerNav.home.href)).toBe(false);
  });

  it("selects Experience only on /experience", () => {
    const href = headerNav.primary[0].href;
    expect(isHeaderPathSelected("/experience", href)).toBe(true);
    expect(isHeaderPathSelected("/", href)).toBe(false);
    expect(isHeaderPathSelected("/projects", href)).toBe(false);
  });

  it("selects Projects only on /projects", () => {
    const href = headerNav.primary[1].href;
    expect(isHeaderPathSelected("/projects", href)).toBe(true);
    expect(isHeaderPathSelected("/", href)).toBe(false);
    expect(isHeaderPathSelected("/experience", href)).toBe(false);
  });

  it("never selects the external Gaayak.org link from the current path", () => {
    expect(isHeaderPathSelected("/", headerNav.external.href)).toBe(false);
    expect(isHeaderPathSelected("/experience", headerNav.external.href)).toBe(false);
    expect(isHeaderPathSelected("/projects", headerNav.external.href)).toBe(false);
  });
});
