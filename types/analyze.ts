export interface AnalyzeRequest {
  idea: string;
}

export interface BusinessIdeaAnalysis {
  problemResolved: string;
  targetAudience: string;
  basicCompetition: string;
  attentionPoints: string;
}

export interface AnalyzeSuccessResponse {
  analysis: BusinessIdeaAnalysis;
}

export interface AnalyzeErrorResponse {
  error: string;
}

export type AnalyzeResponse = AnalyzeSuccessResponse | AnalyzeErrorResponse;
