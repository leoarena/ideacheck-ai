import { apiMessages, uiMessages } from "@/lib/messages";
import type {
  AnalyzeErrorResponse,
  AnalyzeSuccessResponse,
  BusinessIdeaAnalysis,
  BusinessIdeaAnalysisSectionKey
} from "@/types/analyze";
import type {
  BusinessIdeaComparison,
  CompareIdeasErrorResponse,
  CompareIdeasSuccessResponse,
  RecommendedIdea
} from "@/types/compare";

export const ANALYZE_API_ENDPOINT = "/api/analyze";
export const COMPARE_API_ENDPOINT = "/api/compare";

const requiredAnalysisFields: Array<BusinessIdeaAnalysisSectionKey | "rawText"> = [
  "problemResolved",
  "targetAudience",
  "basicCompetition",
  "attentionPoints",
  "nextSteps",
  "viabilityScore",
  "rawText"
];

const requiredComparisonFields: Array<keyof BusinessIdeaComparison> = [
  "comparativeSummary",
  "recommendedIdea",
  "recommendationJustification",
  "ideaAAdvantages",
  "ideaBAdvantages",
  "ideaARisks",
  "ideaBRisks",
  "targetAudienceDifferences",
  "nextSteps",
  "comparativeScores",
  "rawText"
];

export class AnalyzeApiError extends Error {
  constructor(
    message: string,
    public readonly status?: number
  ) {
    super(message);
    this.name = "AnalyzeApiError";
  }
}

export class CompareApiError extends Error {
  constructor(
    message: string,
    public readonly status?: number
  ) {
    super(message);
    this.name = "CompareApiError";
  }
}

export function getApiErrorMessage(payload: unknown): string | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const maybeError = payload as Partial<AnalyzeErrorResponse | CompareIdeasErrorResponse>;
  return typeof maybeError.error === "string" ? maybeError.error : null;
}

function isRecommendedIdea(value: unknown): value is RecommendedIdea {
  return value === "ideaA" || value === "ideaB" || value === "tie";
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

export function isBusinessIdeaComparison(value: unknown): value is BusinessIdeaComparison {
  if (!value || typeof value !== "object") {
    return false;
  }

  const comparison = value as Partial<Record<keyof BusinessIdeaComparison, unknown>>;
  return requiredComparisonFields.every((field) => {
    if (field === "recommendedIdea") {
      return isRecommendedIdea(comparison[field]);
    }

    return typeof comparison[field] === "string";
  });
}

export function isCompareIdeasSuccessResponse(value: unknown): value is CompareIdeasSuccessResponse {
  if (!value || typeof value !== "object") {
    return false;
  }

  return isBusinessIdeaComparison((value as Partial<CompareIdeasSuccessResponse>).comparison);
}

function getFallbackErrorMessage(status: number): string {
  if (status === 400) {
    return uiMessages.emptyIdea;
  }

  if (status === 503) {
    return apiMessages.ollamaUnavailable;
  }

  return uiMessages.genericAnalysisError;
}

function getComparisonFallbackErrorMessage(status: number): string {
  if (status === 400) {
    return uiMessages.emptyComparisonIdeas;
  }

  if (status === 503) {
    return apiMessages.ollamaUnavailable;
  }

  return uiMessages.genericComparisonError;
}

export async function requestIdeaAnalysis(idea: string): Promise<BusinessIdeaAnalysis> {
  let response: Response;

  try {
    response = await fetch(ANALYZE_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ idea })
    });
  } catch {
    throw new AnalyzeApiError(uiMessages.routeConnectionError);
  }

  const payload: unknown = await response.json().catch(() => null);

  if (!response.ok) {
    throw new AnalyzeApiError(
      getApiErrorMessage(payload) || getFallbackErrorMessage(response.status),
      response.status
    );
  }

  if (!isAnalyzeSuccessResponse(payload)) {
    throw new AnalyzeApiError("A resposta da API não está no formato esperado para exibição da análise.");
  }

  return payload.analysis;
}

export async function requestIdeaComparison(ideaA: string, ideaB: string): Promise<BusinessIdeaComparison> {
  let response: Response;

  try {
    response = await fetch(COMPARE_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ideaA, ideaB })
    });
  } catch {
    throw new CompareApiError(uiMessages.comparisonRouteConnectionError);
  }

  const payload: unknown = await response.json().catch(() => null);

  if (!response.ok) {
    throw new CompareApiError(
      getApiErrorMessage(payload) || getComparisonFallbackErrorMessage(response.status),
      response.status
    );
  }

  if (!isCompareIdeasSuccessResponse(payload)) {
    throw new CompareApiError("A resposta da API não está no formato esperado para exibição da comparação.");
  }

  return payload.comparison;
}
