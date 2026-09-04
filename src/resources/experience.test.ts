import { describe, expect, it } from "vitest";

import {
  experienceAccordionTitle,
  experienceContent,
  experienceLinePlainText,
} from "../resources/experience";

describe("experienceContent", () => {
  it("includes the legacy TL;DR highlights", () => {
    expect(experienceContent.tldr.title).toBe("TL;DR");
    expect(experienceContent.tldr.items).toHaveLength(5);
    expect(experienceLinePlainText(experienceContent.tldr.items[0])).toContain(
      "9+ years of experience",
    );
    expect(experienceLinePlainText(experienceContent.tldr.items[1])).toContain(
      "900 million users",
    );
  });

  it("lists work experiences in chronological order from the legacy resume", () => {
    const companies = experienceContent.work.experiences.map(
      (experience) => experience.company,
    );

    expect(companies).toEqual([
      "Flybits",
      "Meta",
      "Flybits",
      "Morgan Stanley",
      "Credit Suisse",
      "Built.io (Raw Eng.)",
    ]);
    expect(experienceContent.work.experiences[0].endDate).toBe("Present");
    expect(experienceContent.work.experiences.at(-1)?.role).toContain("Intern");
  });

  it("preserves nested highlights for the current Flybits role", () => {
    const lead = experienceContent.work.experiences[0].items?.[0];

    expect(lead).toBeDefined();
    expect(experienceLinePlainText(lead!)).toContain("Engineering Lead");
    expect(lead!.subItems).toHaveLength(2);
    expect(experienceLinePlainText(lead!.subItems![0])).toContain("Flow Visualizer");
  });
});

describe("experienceAccordionTitle", () => {
  it("formats company and date range for accordion headers", () => {
    expect(experienceAccordionTitle("Meta", "Feb '22", "May '23")).toBe(
      "Meta (Feb '22 - May '23)",
    );
  });
});
