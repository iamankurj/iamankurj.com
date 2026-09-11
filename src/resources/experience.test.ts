import { describe, expect, it } from "vitest";

import {
  experienceContent,
  experienceLinePlainText,
  testimonialAttribution,
  testimonialQuoteVariant,
  workExperienceDateRange,
  workExperienceLabel,
} from "../resources/experience";

describe("experienceContent", () => {
  it("includes the career history hero copy", () => {
    expect(experienceContent.hero).toEqual({
      title: "Experience",
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

  it("lists work experiences from the experience page spec", () => {
    const experiences = experienceContent.work.experiences;

    expect(experiences.map((experience) => experience.company)).toEqual([
      "Flybits",
      "Meta",
      "Flybits",
      "Morgan Stanley",
      "Credit Suisse",
      "Built.io (Raw Eng.)",
    ]);
    expect(experiences[0]).toMatchObject({
      role: "Senior Software Engineering Consultant",
      startDate: "Apr 2023",
      endDate: "Dec 2025",
      roleFocus: "Engineering Leadership, Architecture & Client Delivery",
      tags: ["GoLang", "Microservices", "System Design", "UI/UX Strategy"],
      state: "default",
    });
    expect(experiences[0].achievements).toHaveLength(5);
    expect(experienceLinePlainText(experiences[0].achievements[0])).toContain(
      "Flow Visualizer",
    );
    expect(experiences.at(-1)?.role).toBe("Software Engineering Intern");
    expect(experiences.at(-1)?.tags).toContain("Node.js");
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

describe("workExperienceLabel", () => {
  it("formats role and company for Timeline labels", () => {
    expect(
      workExperienceLabel({
        role: "Server Engineer (Well-Being Engineering)",
        company: "Meta",
      }),
    ).toBe("Server Engineer (Well-Being Engineering), Meta");
  });
});

describe("workExperienceDateRange", () => {
  it("formats the date range for Timeline descriptions", () => {
    expect(
      workExperienceDateRange({
        startDate: "Feb 2022",
        endDate: "May 2023",
      }),
    ).toBe("Feb 2022 - May 2023");
  });
});
