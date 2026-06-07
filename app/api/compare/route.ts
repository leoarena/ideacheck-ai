import { NextResponse } from "next/server";
import { compareBusinessIdeas, InvalidComparisonFormatError } from "@/lib/comparison-service";
import { apiMessages } from "@/lib/messages";
import { OllamaUnavailableError, OllamaUnexpectedResponseError } from "@/lib/ollama";
import { areIdeasEquivalent, normalizeIdeaInput } from "@/lib/validation";
import type { CompareIdeasRequest } from "@/types/compare";

function toRequestBody(payload: unknown): Partial<CompareIdeasRequest> {
  return payload && typeof payload === "object" ? (payload as Partial<CompareIdeasRequest>) : {};
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: apiMessages.invalidJson }, { status: 400 });
  }

  const requestBody = toRequestBody(payload);
  const ideaA = normalizeIdeaInput(requestBody.ideaA);
  const ideaB = normalizeIdeaInput(requestBody.ideaB);

  if (!ideaA || !ideaB) {
    return NextResponse.json({ error: apiMessages.emptyComparisonIdeas }, { status: 400 });
  }

  if (areIdeasEquivalent(ideaA, ideaB)) {
    return NextResponse.json({ error: apiMessages.identicalComparisonIdeas }, { status: 400 });
  }

  try {
    const comparison = await compareBusinessIdeas({ ideaA, ideaB });
    return NextResponse.json({ comparison });
  } catch (error) {
    if (error instanceof OllamaUnavailableError) {
      return NextResponse.json({ error: apiMessages.ollamaUnavailable }, { status: 503 });
    }

    if (error instanceof OllamaUnexpectedResponseError || error instanceof InvalidComparisonFormatError) {
      return NextResponse.json({ error: apiMessages.unexpectedComparison }, { status: 500 });
    }

    return NextResponse.json({ error: apiMessages.genericComparisonFailure }, { status: 500 });
  }
}
