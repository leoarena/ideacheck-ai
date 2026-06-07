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

const validAnalysisText = `1. Problema que resolve: Ajuda restaurantes a reduzir desperdício de alimentos.
2. Público-alvo: Donos e gerentes de pequenos restaurantes.
3. Concorrência básica: Planilhas, sistemas genéricos de gestão e controles manuais.
4. Pontos de atenção: Qualidade dos dados, rotina de uso e adesão da equipe.
5. Próximos passos sugeridos: Entrevistar restaurantes e testar um protótipo simples.
6. Nota inicial de viabilidade de 0 a 10: 8/10.`;

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
    expect(body.error).toMatch(/não foi possível gerar a resposta agora/i);
    expect(generateTextWithOllamaMock).toHaveBeenCalledTimes(1);
  });

  it("retorna análise estruturada para respostas válidas do modelo local", async () => {
    const { POST } = await import("@/app/api/analyze/route");
    generateTextWithOllamaMock.mockResolvedValueOnce(validAnalysisText);

    const response = await POST(await createPostRequest("Aplicativo para reduzir desperdício em restaurantes"));
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.analysis.problemResolved).toMatch(/reduzir desperdício/i);
    expect(body.analysis.targetAudience).toMatch(/pequenos restaurantes/i);
    expect(body.analysis.basicCompetition).toMatch(/planilhas/i);
    expect(body.analysis.attentionPoints).toMatch(/qualidade dos dados/i);
    expect(body.analysis.nextSteps).toMatch(/entrevistar restaurantes/i);
    expect(body.analysis.viabilityScore).toBe("8/10.");
    expect(generateTextWithOllamaMock).toHaveBeenCalledTimes(1);
  });

  it("retorna erro 500 quando a resposta do modelo não contém a estrutura mínima", async () => {
    const { POST } = await import("@/app/api/analyze/route");
    generateTextWithOllamaMock.mockResolvedValueOnce("Resposta sem seções estruturadas suficientes.");

    const response = await POST(await createPostRequest("Aplicativo para reduzir desperdício em restaurantes"));
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body.error).toMatch(/análise não veio no formato estruturado esperado/i);
    expect(generateTextWithOllamaMock).toHaveBeenCalledTimes(1);
  });
});
