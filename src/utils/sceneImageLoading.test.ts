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
    // Use an intentionally invalid effect value to simulate an extreme case
    const extremeTimeout = getSceneLoadingTimeout("extreme-overload" as any);
    expect(extremeTimeout).toBeLessThanOrEqual(14000);
  });
});
