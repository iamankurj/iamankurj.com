import { describe, expect, it } from "vitest";
import { baseURL, meta } from "./seo";

describe("seo", () => {
  it("points home metadata at the production domain", () => {
    expect(baseURL).toBe("https://iamankurj.com");
    expect(meta.home.path).toBe("/");
    expect(meta.home.canonical).toBe(baseURL);
    expect(meta.home.image).toBe("/images/og/my-by-the-river-og.jpg");
  });
});
