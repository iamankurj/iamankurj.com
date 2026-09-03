import { describe, expect, it } from "vitest";
import { homeLinks } from "./home";

describe("homeLinks", () => {
  it("keeps the four legacy homepage destinations", () => {
    expect(homeLinks).toEqual([
      {
        href: "/singing",
        title: "Vocal Vibes",
        description: "The Singer in Me",
      },
      {
        href: "/tech",
        title: "Tech Tracks",
        description: "The Techie in Me",
      },
      {
        href: "/finance",
        title: "Finance Fanatic",
        description: "The Money Nerd in Me",
      },
      {
        href: "/fitness",
        title: "Fit Frenzy",
        description: "The Fitness Buff in Me",
      },
    ]);
  });
});
