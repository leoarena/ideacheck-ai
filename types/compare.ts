export interface CompareIdeasRequest {
  ideaA: string;
  ideaB: string;
}

export type RecommendedIdea = "ideaA" | "ideaB" | "tie";

export type BusinessIdeaComparisonSectionKey =
  | "comparativeSummary"
  | "recommendationJustification"
  | "ideaAAdvantages"
  | "ideaBAdvantages"
  | "ideaARisks"
  | "ideaBRisks"
  | "targetAudienceDifferences"
  | "nextSteps";

export interface BusinessIdeaComparison {
  comparativeSummary: string;
  recommendedIdea: RecommendedIdea;
  recommendationJustification: string;
  ideaAAdvantages: string;
  ideaBAdvantages: string;
  ideaARisks: string;
  ideaBRisks: string;
  targetAudienceDifferences: string;
  nextSteps: string;
  comparativeScores: string;
  rawText: string;
}

export interface CompareIdeasSuccessResponse {
  comparison: BusinessIdeaComparison;
}

export interface CompareIdeasErrorResponse {
  error: string;
}

export type CompareIdeasResponse = CompareIdeasSuccessResponse | CompareIdeasErrorResponse;
