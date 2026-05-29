import { beforeEach, describe, expect, it, vi } from "vitest";
import { OllamaUnavailableError } from "@/lib/ollama";

const { generateTextWithOllamaMock } = vi.hoisted(() => ({
  generateTextWithOllamaMock: vi.fn()
}));

vi.mock("@/lib/ollama", async () => {
  const actual = await vi.importActual<typeof import("@/lib/ollama")>("@/lib/ollama");

  return {
    ...actual,
    generateTextWithOllama: generateTextWithOllamaMock
  };
});

async function createPostRequest(idea: string | null) {
  return new Request("http://localhost/api/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(idea === null ? {} : { idea })
  });
}

describe("POST /api/analyze", () => {
  beforeEach(() => {
    generateTextWithOllamaMock.mockReset();
  });

  it("retorna erro 400 quando a ideia está vazia", async () => {
    const { POST } = await import("@/app/api/analyze/route");

    const response = await POST(await createPostRequest(""));
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe("O campo idea é obrigatório para solicitar uma análise.");
    expect(generateTextWithOllamaMock).not.toHaveBeenCalled();
  });

  it("retorna erro 503 quando o Ollama está indisponível", async () => {
    const { POST } = await import("@/app/api/analyze/route");
    generateTextWithOllamaMock.mockRejectedValueOnce(new OllamaUnavailableError());

    const response = await POST(await createPostRequest("Aplicativo para reduzir desperdício em restaurantes"));
    const body = await response.json();

    expect(response.status).toBe(503);
    expect(body.error).toMatch(/não foi possível conectar ao ollama local/i);
    expect(generateTextWithOllamaMock).toHaveBeenCalledTimes(1);
  });
});
