import { describe, expect, it } from "vitest";
import { getRecommendedIdeaLabel } from "@/lib/recommended-idea-label";
import type { RecommendedIdea } from "@/types/compare";

describe("getRecommendedIdeaLabel", () => {
  it.each<[RecommendedIdea, string]>([
    ["ideaA", "Ideia A"],
    ["ideaB", "Ideia B"],
    ["tie", "Empate"]
  ])("retorna o rótulo de exibição para %s", (recommendedIdea, label) => {
    expect(getRecommendedIdeaLabel(recommendedIdea)).toBe(label);
  });
});
