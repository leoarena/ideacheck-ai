import { apiMessages, uiMessages } from "@/lib/messages";
import type {
  AnalyzeErrorResponse,
  AnalyzeSuccessResponse,
  BusinessIdeaAnalysis,
  BusinessIdeaAnalysisSectionKey
} from "@/types/analyze";

export const ANALYZE_API_ENDPOINT = "/api/analyze";

const requiredAnalysisFields: Array<BusinessIdeaAnalysisSectionKey | "rawText"> = [
  "problemResolved",
  "targetAudience",
  "basicCompetition",
  "attentionPoints",
  "nextSteps",
  "viabilityScore",
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

function getFallbackErrorMessage(status: number): string {
  if (status === 400) {
    return uiMessages.emptyIdea;
  }

  if (status === 503) {
    return apiMessages.ollamaUnavailable;
  }

  return uiMessages.genericAnalysisError;
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
