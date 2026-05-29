import type { AnalyzeErrorResponse, AnalyzeSuccessResponse, BusinessIdeaAnalysis } from "@/types/analyze";

export function getApiErrorMessage(payload: unknown): string | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const maybeError = payload as Partial<AnalyzeErrorResponse>;
  return typeof maybeError.error === "string" ? maybeError.error : null;
}

export function isBusinessIdeaAnalysis(value: unknown): value is BusinessIdeaAnalysis {
  if (!value || typeof value !== "object") {
    return false;
  }

  const analysis = value as Partial<Record<keyof BusinessIdeaAnalysis, unknown>>;

  return (
    typeof analysis.problemResolved === "string" &&
    typeof analysis.targetAudience === "string" &&
    typeof analysis.basicCompetition === "string" &&
    typeof analysis.attentionPoints === "string"
  );
}

export function isAnalyzeSuccessResponse(value: unknown): value is AnalyzeSuccessResponse {
  if (!value || typeof value !== "object") {
    return false;
  }

  return isBusinessIdeaAnalysis((value as Partial<AnalyzeSuccessResponse>).analysis);
}
