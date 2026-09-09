import { describe, expect, it } from "vitest";
import { projectMediaMode } from "./projectMediaMode";

describe("projectMediaMode", () => {
  it("returns none when there are no images", () => {
    expect(projectMediaMode(0)).toBe("none");
    expect(projectMediaMode(-1)).toBe("none");
  });

  it("returns single for exactly one image", () => {
    expect(projectMediaMode(1)).toBe("single");
  });

  it("returns carousel for two or more images", () => {
    expect(projectMediaMode(2)).toBe("carousel");
    expect(projectMediaMode(3)).toBe("carousel");
  });
});
