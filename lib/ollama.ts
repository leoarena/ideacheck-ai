import type { OllamaGenerateRequest, OllamaGenerateResponse } from "@/types/ollama";

const OLLAMA_GENERATE_URL = "http://localhost:11434/api/generate";
const DEFAULT_OLLAMA_MODEL = "llama3.2:3b";

export class OllamaUnavailableError extends Error {
  constructor(message = "Ollama indisponível") {
    super(message);
    this.name = "OllamaUnavailableError";
  }
}

export class OllamaUnexpectedResponseError extends Error {
  constructor(message = "Resposta inesperada do Ollama") {
    super(message);
    this.name = "OllamaUnexpectedResponseError";
  }
}

export function getOllamaModel(): string {
  return process.env.OLLAMA_MODEL?.trim() || DEFAULT_OLLAMA_MODEL;
}

function parseJsonPayload(payload: string): unknown {
  try {
    return JSON.parse(payload) as unknown;
  } catch {
    return null;
  }
}

function getOllamaErrorMessage(payload: unknown): string | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const maybeError = (payload as Partial<OllamaGenerateResponse>).error;
  return typeof maybeError === "string" && maybeError.trim() ? maybeError : null;
}

function getOllamaResponseText(payload: unknown): string | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const maybeResponse = (payload as Partial<OllamaGenerateResponse>).response;
  return typeof maybeResponse === "string" && maybeResponse.trim() ? maybeResponse.trim() : null;
}

export async function generateTextWithOllama(prompt: string): Promise<string> {
  const model = getOllamaModel();
  const body: OllamaGenerateRequest = {
    model,
    prompt,
    stream: false
  };

  let response: Response;

  try {
    response = await fetch(OLLAMA_GENERATE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
  } catch {
    throw new OllamaUnavailableError();
  }

  const responseBody = await response.text();
  const payload = parseJsonPayload(responseBody);

  if (!response.ok) {
    const ollamaMessage = getOllamaErrorMessage(payload);
    throw new OllamaUnavailableError(ollamaMessage || "Não foi possível obter resposta do Ollama.");
  }

  const generatedText = getOllamaResponseText(payload);

  if (!generatedText) {
    throw new OllamaUnexpectedResponseError();
  }

  return generatedText;
}
