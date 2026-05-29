export function normalizeIdeaInput(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}
