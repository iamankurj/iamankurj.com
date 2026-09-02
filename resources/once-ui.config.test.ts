import { describe, expect, it } from "vitest";
import { dataStyle, style, themeInitConfig } from "./once-ui.config";

describe("once-ui theme config", () => {
  it("uses the starter brand and accent palettes", () => {
    expect(style.theme).toBe("system");
    expect(style.brand).toBe("blue");
    expect(style.accent).toBe("indigo");
    expect(style.neutral).toBe("gray");
  });

  it("maps style tokens onto ThemeInit data attributes", () => {
    expect(themeInitConfig).toEqual({
      theme: style.theme,
      brand: style.brand,
      accent: style.accent,
      neutral: style.neutral,
      solid: style.solid,
      "solid-style": style.solidStyle,
      border: style.border,
      surface: style.surface,
      transition: style.transition,
      scaling: style.scaling,
      "viz-style": dataStyle.variant,
    });
  });
});
