import { describe, expect, it } from "vitest";

import { footerContact } from "./footerContact";
import { footerSocials } from "./footerSocials";

describe("footerContact", () => {
  it("states availability and links the LinkedIn CTA to the footer social URL", () => {
    const linkedIn = footerSocials.find((social) => social.name === "LinkedIn");

    expect(footerContact.title).toBe("Interested in working together?");
    expect(footerContact.availability).toContain("senior product engineering");
    expect(footerContact.linkedInCta.label).toBe("Reach Out via LinkedIn");
    expect(footerContact.linkedInCta.href).toBe(linkedIn?.href);
    expect(footerContact.linkedInCta.id).toBe("footer-contact-linkedin");
  });
});
