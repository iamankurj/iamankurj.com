import { footerSocials } from "@/components/footerSocials";

const linkedIn = footerSocials.find((social) => social.name === "LinkedIn");

if (!linkedIn) {
  throw new Error("LinkedIn is required in footerSocials for the contact callout");
}

/** Availability callout shown above the site footer. */
export const footerContact = {
  title: "Interested in working together?",
  availability:
    "I’m open to remote contract engagements, technical advisory, and select senior product engineering roles.",
  linkedInCta: {
    id: "footer-contact-linkedin",
    label: "Reach Out via LinkedIn",
    href: linkedIn.href,
  },
} as const;
