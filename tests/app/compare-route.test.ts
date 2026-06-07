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

const validComparisonText = `1. Resumo comparativo: A ideia A tem validação mais direta, enquanto a ideia B depende de rede de parceiros.
2. Ideia recomendada: Ideia A
3. Justificativa da recomendação: A ideia A resolve um problema operacional claro e tem público inicial mais acessível.
4. Vantagens da ideia A: Dor recorrente, impacto financeiro mensurável e ciclo de teste curto.
5. Vantagens da ideia B: Maior potencial de rede local e posicionamento comunitário.
6. Riscos da ideia A: Depende de dados confiáveis e rotina de uso pelos restaurantes.
7. Riscos da ideia B: Precisa equilibrar oferta e demanda desde o início.
8. Diferenças de público-alvo: A ideia A atende donos de restaurantes; a ideia B atende produtores e consumidores locais.
9. Próximos passos: Entrevistar restaurantes, validar métricas de desperdício e criar um protótipo simples.
10. Critérios comparativos: Ideia A 8/10; Ideia B 7/10.`;

async function createPostRequest(body: unknown) {
  return new Request("http://localhost/api/compare", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
}

describe("POST /api/compare", () => {
  beforeEach(() => {
    generateTextWithOllamaMock.mockReset();
  });

  it("retorna erro 400 quando uma das ideias está vazia", async () => {
    const { POST } = await import("@/app/api/compare/route");

    const response = await POST(await createPostRequest({ ideaA: "Marketplace local", ideaB: "" }));
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe("Os campos ideaA e ideaB são obrigatórios para solicitar uma comparação.");
    expect(generateTextWithOllamaMock).not.toHaveBeenCalled();
  });

  it("retorna erro 400 quando as ideias são idênticas após normalização", async () => {
    const { POST } = await import("@/app/api/compare/route");

    const response = await POST(
      await createPostRequest({ ideaA: "  Plataforma para restaurantes  ", ideaB: "plataforma para restaurantes" })
    );
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe("As ideias informadas devem ser diferentes para comparação.");
    expect(generateTextWithOllamaMock).not.toHaveBeenCalled();
  });

  it("retorna erro 503 quando o Ollama está indisponível", async () => {
    const { POST } = await import("@/app/api/compare/route");
    generateTextWithOllamaMock.mockRejectedValueOnce(new OllamaUnavailableError());

    const response = await POST(
      await createPostRequest({ ideaA: "App para restaurantes", ideaB: "Marketplace para produtores locais" })
    );
    const body = await response.json();

    expect(response.status).toBe(503);
    expect(body.error).toMatch(/não foi possível gerar a resposta agora/i);
    expect(generateTextWithOllamaMock).toHaveBeenCalledTimes(1);
  });

  it("retorna comparação estruturada para respostas válidas do modelo local", async () => {
    const { POST } = await import("@/app/api/compare/route");
    generateTextWithOllamaMock.mockResolvedValueOnce(validComparisonText);

    const response = await POST(
      await createPostRequest({ ideaA: "App para restaurantes", ideaB: "Marketplace para produtores locais" })
    );
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.comparison.recommendedIdea).toBe("ideaA");
    expect(body.comparison.comparativeSummary).toMatch(/ideia A tem validação/i);
    expect(body.comparison.ideaBAdvantages).toMatch(/rede local/i);
    expect(body.comparison.nextSteps).toMatch(/entrevistar restaurantes/i);
    expect(generateTextWithOllamaMock).toHaveBeenCalledTimes(1);
  });
});
