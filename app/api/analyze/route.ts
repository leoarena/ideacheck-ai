import { NextResponse } from "next/server";
import type { AnalyzeRequest } from "@/types/analyze";

const emptyIdeaMessage = "O campo idea é obrigatório para solicitar uma análise.";
const notImplementedMessage =
  "A integração real com Ollama será implementada na próxima etapa. Nenhuma resposta de IA foi gerada nesta versão.";

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

  return NextResponse.json({ error: notImplementedMessage }, { status: 501 });
}
