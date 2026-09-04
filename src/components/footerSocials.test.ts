import { describe, expect, it } from "vitest";

import { iconLibrary } from "../resources/icons";
import { footerSocials } from "./footerSocials";

describe("footerSocials", () => {
  it("lists LinkedIn, Instagram, GitHub, and YouTube in that order", () => {
    expect(footerSocials.map((social) => social.name)).toEqual([
      "LinkedIn",
      "Instagram",
      "GitHub",
      "YouTube",
    ]);
  });

  it("uses the live profile URLs", () => {
    expect(footerSocials.map((social) => social.href)).toEqual([
      "https://www.linkedin.com/in/iamankurj/",
      "https://instagram.com/i.am.ankur.j",
      "https://github.com/iamankurj",
      "https://youtube.com/@iamankurj",
    ]);
  });

  it("registers an icon for every social", () => {
    for (const social of footerSocials) {
      expect(iconLibrary[social.icon]).toBeDefined();
    }
  });
});
