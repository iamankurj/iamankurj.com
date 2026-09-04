import { describe, expect, it } from "vitest";
import { headerNav, heroCtas, isHeaderPathSelected } from "./headerNav";

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

describe("heroCtas", () => {
  it("puts Explore Projects first and links to /projects", () => {
    expect(heroCtas[0].label).toBe("Explore Projects");
    expect(heroCtas[0].href).toBe(headerNav.primary[1].href);
    expect(heroCtas[0].href).toBe("/projects");
  });

  it("puts View Engineering & Experience second and links to /experience", () => {
    expect(heroCtas[1].label).toBe("View Engineering & Experience");
    expect(heroCtas[1].href).toBe(headerNav.primary[0].href);
    expect(heroCtas[1].href).toBe("/experience");
  });
});
