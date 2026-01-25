import { describe, it, expect } from "vitest";
import { getSceneLoadingTimeout } from "@/utils/sceneImageLoading";

describe("getSceneLoadingTimeout", () => {
  it("returns base timeout for default scenes", () => {
    expect(getSceneLoadingTimeout("default")).toBe(8000);
  });

  it("returns longer timeouts for heavier effects", () => {
    expect(getSceneLoadingTimeout("mystical")).toBeGreaterThan(getSceneLoadingTimeout("default"));
    expect(getSceneLoadingTimeout("dramatic")).toBeGreaterThan(getSceneLoadingTimeout("default"));
  });

  it("caps the timeout for extreme values", () => {
    expect(getSceneLoadingTimeout("mystical")).toBeLessThanOrEqual(14000);
  });
});
