import type {
  AnalyzeErrorResponse,
  AnalyzeSuccessResponse,
  BusinessIdeaAnalysis,
  BusinessIdeaAnalysisSectionKey
} from "@/types/analyze";

const requiredAnalysisFields: Array<BusinessIdeaAnalysisSectionKey | "rawText"> = [
  "problemResolved",
  "targetAudience",
  "basicCompetition",
  "attentionPoints",
  "nextSteps",
  "viabilityScore",
  "rawText"
];

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
  return requiredAnalysisFields.every((field) => typeof analysis[field] === "string");
}

export function isAnalyzeSuccessResponse(value: unknown): value is AnalyzeSuccessResponse {
  if (!value || typeof value !== "object") {
    return false;
  }

  return isBusinessIdeaAnalysis((value as Partial<AnalyzeSuccessResponse>).analysis);
}
