import { describe, expect, it } from "vitest";

import {
  experienceAccordionTitle,
  experienceContent,
  experienceLinePlainText,
  testimonialAttribution,
  testimonialQuoteVariant,
} from "../resources/experience";

describe("experienceContent", () => {
  it("includes the career history hero copy", () => {
    expect(experienceContent.hero).toEqual({
      title: "Career History",
      subheadline:
        "10+ years building resilient microservices, high-scale backend architectures, and user-facing products.",
      lead: "Senior Product & Backend Engineer with a proven track record of leading mission-critical initiatives at high-growth enterprise SaaS platforms (Flybits) and big tech (Meta, Morgan Stanley, Credit Suisse).",
    });
  });

  it("includes the impact metrics for the top stat strip", () => {
    expect(experienceContent.metrics.items).toHaveLength(4);
    expect(experienceContent.metrics.items.map((item) => item.value)).toEqual([
      "900M+",
      "4+",
      "98%",
      "0",
    ]);
    expect(experienceContent.metrics.items[0].label).toBe("Users");
    expect(experienceContent.metrics.items[0].description).toContain(
      "Messenger & Instagram Direct",
    );
    expect(experienceContent.metrics.items[2].label).toBe("Manual Savings");
    expect(experienceContent.metrics.items[3].description).toContain(
      "zero post-release QA bugs",
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
    expect(experienceContent.work.experiences[0].endDate).toBe("Dec 2025");
    expect(experienceContent.work.experiences.at(-1)?.role).toContain("Intern");
  });

  it("preserves nested highlights for the current Flybits role", () => {
    const lead = experienceContent.work.experiences[0].items?.[0];

    expect(lead).toBeDefined();
    expect(experienceLinePlainText(lead!)).toContain("Engineering Lead");
    expect(lead!.subItems).toHaveLength(2);
    expect(experienceLinePlainText(lead!.subItems![0])).toContain("Flow Visualizer");
  });

  it("includes the legacy testimonials for the carousel", () => {
    expect(experienceContent.testimonials.title).toBe("Testimonials");
    expect(experienceContent.testimonials.items).toHaveLength(7);
    expect(experienceContent.testimonials.items[0].quote).toContain(
      "brightest minds",
    );
    expect(experienceContent.testimonials.items[0].author).toEqual({
      name: "",
      linkedInHref: "",
    });
    expect(experienceContent.testimonials.slideMinHeight).toBeGreaterThan(0);
    expect(experienceContent.testimonials.linkedInHref).toContain("linkedin.com");
  });
});

describe("testimonialAttribution", () => {
  it("omits author and link when placeholders are blank", () => {
    expect(testimonialAttribution({ name: "", linkedInHref: "" })).toEqual({});
    expect(testimonialAttribution(undefined)).toEqual({});
  });

  it("passes BlockQuote author and LinkedIn link when filled", () => {
    expect(
      testimonialAttribution({
        name: "Alex",
        linkedInHref: "https://www.linkedin.com/in/alex/",
      }),
    ).toEqual({
      author: { name: "Alex" },
      link: {
        href: "https://www.linkedin.com/in/alex/",
        label: "LinkedIn",
      },
    });
  });
});

describe("testimonialQuoteVariant", () => {
  it("keeps strong heading for typical quote lengths", () => {
    expect(testimonialQuoteVariant("Short quote")).toBe("heading-strong-s");
  });

  it("drops to body when a quote would overflow the fixed slide", () => {
    const longQuote = "a".repeat(141);
    expect(testimonialQuoteVariant(longQuote)).toBe("body-default-m");
  });
});

describe("experienceAccordionTitle", () => {
  it("formats company and date range for accordion headers", () => {
    expect(experienceAccordionTitle("Meta", "Feb '22", "May '23")).toBe(
      "Meta (Feb '22 - May '23)",
    );
  });
});
