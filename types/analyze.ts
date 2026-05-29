export interface AnalyzeRequest {
  idea: string;
}

export type BusinessIdeaAnalysisSectionKey =
  | "problemResolved"
  | "targetAudience"
  | "basicCompetition"
  | "attentionPoints"
  | "nextSteps"
  | "viabilityScore";

export interface BusinessIdeaAnalysis {
  problemResolved: string;
  targetAudience: string;
  basicCompetition: string;
  attentionPoints: string;
  nextSteps: string;
  viabilityScore: string;
  rawText: string;
}

export interface AnalyzeSuccessResponse {
  analysis: BusinessIdeaAnalysis;
}

export interface AnalyzeErrorResponse {
  error: string;
}

export type AnalyzeResponse = AnalyzeSuccessResponse | AnalyzeErrorResponse;
