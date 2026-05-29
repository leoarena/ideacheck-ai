import { hasRequiredAnalysisSections, parseBusinessIdeaAnalysis } from "@/lib/analysis";
import { generateTextWithOllama } from "@/lib/ollama";
import { buildIdeaAnalysisPrompt } from "@/lib/prompts";
import type { BusinessIdeaAnalysis } from "@/types/analyze";

export class InvalidAnalysisFormatError extends Error {
  constructor(message = "Análise fora do formato esperado") {
    super(message);
    this.name = "InvalidAnalysisFormatError";
  }
}

export async function analyzeBusinessIdea(idea: string): Promise<BusinessIdeaAnalysis> {
  const prompt = buildIdeaAnalysisPrompt(idea);
  const generatedText = await generateTextWithOllama(prompt);
  const analysis = parseBusinessIdeaAnalysis(generatedText);

  if (!hasRequiredAnalysisSections(analysis)) {
    throw new InvalidAnalysisFormatError();
  }

  return analysis;
}
