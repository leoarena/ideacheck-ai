import { NextResponse } from "next/server";
import { hasRequiredAnalysisSections, parseBusinessIdeaAnalysis } from "@/lib/analysis";
import { generateTextWithOllama, OllamaUnavailableError, OllamaUnexpectedResponseError } from "@/lib/ollama";
import { buildIdeaAnalysisPrompt } from "@/lib/prompts";
import type { AnalyzeRequest } from "@/types/analyze";

const emptyIdeaMessage = "O campo idea é obrigatório para solicitar uma análise.";
const ollamaUnavailableMessage =
  "Não foi possível conectar ao Ollama local. Verifique se o Ollama está em execução e se o modelo configurado está disponível.";
const unexpectedResponseMessage =
  "A IA respondeu, mas a análise não veio no formato estruturado esperado. Tente reformular a ideia e enviar novamente.";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Envie uma requisição JSON válida." }, { status: 400 });
  }

  const body = payload && typeof payload === "object" ? (payload as Partial<AnalyzeRequest>) : {};
  const idea = typeof body.idea === "string" ? body.idea.trim() : "";

  if (!idea) {
    return NextResponse.json({ error: emptyIdeaMessage }, { status: 400 });
  }

  try {
    const prompt = buildIdeaAnalysisPrompt(idea);
    const generatedText = await generateTextWithOllama(prompt);
    const analysis = parseBusinessIdeaAnalysis(generatedText);

    if (!hasRequiredAnalysisSections(analysis)) {
      return NextResponse.json({ error: unexpectedResponseMessage }, { status: 500 });
    }

    return NextResponse.json({ analysis });
  } catch (error) {
    if (error instanceof OllamaUnavailableError) {
      return NextResponse.json({ error: ollamaUnavailableMessage }, { status: 503 });
    }

    if (error instanceof OllamaUnexpectedResponseError) {
      return NextResponse.json({ error: unexpectedResponseMessage }, { status: 500 });
    }

    return NextResponse.json(
      { error: "Não foi possível gerar a análise neste momento. Tente novamente em instantes." },
      { status: 500 }
    );
  }
}
