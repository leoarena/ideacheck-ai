import { NextResponse } from "next/server";
import { analyzeBusinessIdea, InvalidAnalysisFormatError } from "@/lib/analysis-service";
import { apiMessages } from "@/lib/messages";
import { OllamaUnavailableError, OllamaUnexpectedResponseError } from "@/lib/ollama";
import { normalizeIdeaInput } from "@/lib/validation";
import type { AnalyzeRequest } from "@/types/analyze";

function toRequestBody(payload: unknown): Partial<AnalyzeRequest> {
  return payload && typeof payload === "object" ? (payload as Partial<AnalyzeRequest>) : {};
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: apiMessages.invalidJson }, { status: 400 });
  }

  const idea = normalizeIdeaInput(toRequestBody(payload).idea);

  if (!idea) {
    return NextResponse.json({ error: apiMessages.emptyIdea }, { status: 400 });
  }

  try {
    const analysis = await analyzeBusinessIdea(idea);
    return NextResponse.json({ analysis });
  } catch (error) {
    if (error instanceof OllamaUnavailableError) {
      return NextResponse.json({ error: apiMessages.ollamaUnavailable }, { status: 503 });
    }

    if (error instanceof OllamaUnexpectedResponseError || error instanceof InvalidAnalysisFormatError) {
      return NextResponse.json({ error: apiMessages.unexpectedAnalysis }, { status: 500 });
    }

    return NextResponse.json({ error: apiMessages.genericAnalysisFailure }, { status: 500 });
  }
}
