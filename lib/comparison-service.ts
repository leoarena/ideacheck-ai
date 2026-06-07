import { hasRequiredComparisonSections, parseBusinessIdeaComparison } from "@/lib/comparison";
import { generateTextWithOllama } from "@/lib/ollama";
import { buildIdeaComparisonPrompt } from "@/lib/prompts";
import type { BusinessIdeaComparison, CompareIdeasRequest } from "@/types/compare";

export class InvalidComparisonFormatError extends Error {
  constructor(message = "Comparação fora do formato esperado") {
    super(message);
    this.name = "InvalidComparisonFormatError";
  }
}

export async function compareBusinessIdeas({
  ideaA,
  ideaB
}: CompareIdeasRequest): Promise<BusinessIdeaComparison> {
  const prompt = buildIdeaComparisonPrompt(ideaA, ideaB);
  const generatedText = await generateTextWithOllama(prompt);
  const comparison = parseBusinessIdeaComparison(generatedText);

  if (!comparison || !hasRequiredComparisonSections(comparison)) {
    throw new InvalidComparisonFormatError();
  }

  return comparison;
}
