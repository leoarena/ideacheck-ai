import type { RecommendedIdea } from "@/types/compare";

const recommendedIdeaLabels: Record<RecommendedIdea, string> = {
  ideaA: "Ideia A",
  ideaB: "Ideia B",
  tie: "Empate"
};

export function getRecommendedIdeaLabel(recommendedIdea: RecommendedIdea): string {
  return recommendedIdeaLabels[recommendedIdea];
}
