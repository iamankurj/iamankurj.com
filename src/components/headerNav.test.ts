import { describe, expect, it } from "vitest";
import { headerNav, heroCtas, isHeaderPathSelected } from "./headerNav";

describe("isHeaderPathSelected", () => {
  it("selects Home only on /", () => {
    expect(isHeaderPathSelected("/", headerNav.home.href)).toBe(true);
    expect(isHeaderPathSelected("/tech/experience", headerNav.home.href)).toBe(
      false,
    );
    expect(isHeaderPathSelected("/tech/projects", headerNav.home.href)).toBe(
      false,
    );
  });

  it("selects Experience on /tech/experience and nested paths", () => {
    const href = headerNav.primary[0].href;
    expect(isHeaderPathSelected("/tech/experience", href)).toBe(true);
    expect(isHeaderPathSelected("/tech/experience/extra", href)).toBe(true);
    expect(isHeaderPathSelected("/", href)).toBe(false);
    expect(isHeaderPathSelected("/tech/projects", href)).toBe(false);
  });

  it("selects Projects on /tech/projects and nested paths", () => {
    const href = headerNav.primary[1].href;
    expect(isHeaderPathSelected("/tech/projects", href)).toBe(true);
    expect(isHeaderPathSelected("/tech/projects/coursecorrect", href)).toBe(
      true,
    );
    expect(isHeaderPathSelected("/", href)).toBe(false);
    expect(isHeaderPathSelected("/tech/experience", href)).toBe(false);
  });

  it("never selects the external Gaayak.org link from the current path", () => {
    expect(isHeaderPathSelected("/", headerNav.external.href)).toBe(false);
    expect(
      isHeaderPathSelected("/tech/experience", headerNav.external.href),
    ).toBe(false);
    expect(isHeaderPathSelected("/tech/projects", headerNav.external.href)).toBe(
      false,
    );
  });
});

describe("heroCtas", () => {
  it("puts Explore Projects first and links to /tech/projects", () => {
    expect(heroCtas[0].label).toBe("Explore Projects");
    expect(heroCtas[0].href).toBe(headerNav.primary[1].href);
    expect(heroCtas[0].href).toBe("/tech/projects");
  });

  it("puts View Experience second and links to /tech/experience", () => {
    expect(heroCtas[1].label).toBe("View Experience");
    expect(heroCtas[1].href).toBe(headerNav.primary[0].href);
    expect(heroCtas[1].href).toBe("/tech/experience");
  });
});
