export function normalizeIdeaInput(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function normalizeIdeaForComparison(value: unknown): string {
  return normalizeIdeaInput(value).toLowerCase();
}

export function areIdeasEquivalent(firstIdea: unknown, secondIdea: unknown): boolean {
  const normalizedFirstIdea = normalizeIdeaForComparison(firstIdea);
  const normalizedSecondIdea = normalizeIdeaForComparison(secondIdea);

  return Boolean(normalizedFirstIdea && normalizedSecondIdea && normalizedFirstIdea === normalizedSecondIdea);
}
