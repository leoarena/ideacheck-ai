import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ComparisonForm } from "@/components/ComparisonForm";
import type { CompareIdeasSuccessResponse } from "@/types/compare";

const sampleComparison: CompareIdeasSuccessResponse = {
  comparison: {
    comparativeSummary: "A ideia A tem validação mais direta que a ideia B.",
    recommendedIdea: "ideaA",
    recommendationJustification: "A ideia A resolve uma dor operacional mais clara no curto prazo.",
    ideaAAdvantages: "Dor recorrente, impacto mensurável e teste inicial simples.",
    ideaBAdvantages: "Potencial de rede local e apelo comunitário.",
    ideaARisks: "Depende de dados confiáveis e adesão dos restaurantes.",
    ideaBRisks: "Depende de equilibrar oferta e demanda desde o início.",
    targetAudienceDifferences: "A ideia A atende restaurantes; a ideia B atende produtores e consumidores locais.",
    nextSteps: "Entrevistar clientes, validar o problema e prototipar a solução recomendada.",
    comparativeScores: "Ideia A 8/10; Ideia B 7/10.",
    rawText: "Comparação estruturada gerada pela IA."
  }
};

function mockFetchWithResponse(payload: unknown, init?: ResponseInit) {
  return vi.fn().mockResolvedValue(
    new Response(JSON.stringify(payload), {
      status: init?.status ?? 200,
      headers: {
        "Content-Type": "application/json"
      }
    })
  );
}

describe("ComparisonForm", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("renderiza o formulário de comparação de ideias", () => {
    render(<ComparisonForm />);

    expect(screen.getByLabelText(/ideia a/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ideia b/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /comparar ideias/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /resultado da comparação/i })).toBeInTheDocument();
  });

  it("impede o envio quando uma das ideias está vazia", async () => {
    const user = userEvent.setup();
    render(<ComparisonForm />);

    await user.type(screen.getByLabelText(/ideia a/i), "App para restaurantes");
    await user.click(screen.getByRole("button", { name: /comparar ideias/i }));

    expect(screen.getByText(/preencha as duas ideias de negócio antes de solicitar a comparação/i)).toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
  });

  it("impede o envio quando as ideias são idênticas após normalização", async () => {
    const user = userEvent.setup();
    render(<ComparisonForm />);

    await user.type(screen.getByLabelText(/ideia a/i), "  Plataforma para restaurantes  ");
    await user.type(screen.getByLabelText(/ideia b/i), "plataforma para restaurantes");
    await user.click(screen.getByRole("button", { name: /comparar ideias/i }));

    expect(screen.getByText(/informe duas ideias diferentes para gerar uma comparação/i)).toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
  });

  it("chama a rota /api/compare com as duas ideias normalizadas", async () => {
    const user = userEvent.setup();
    const fetchMock = mockFetchWithResponse(sampleComparison);
    vi.stubGlobal("fetch", fetchMock);
    render(<ComparisonForm />);

    await user.type(screen.getByLabelText(/ideia a/i), "  App para restaurantes  ");
    await user.type(screen.getByLabelText(/ideia b/i), "  Marketplace para produtores locais  ");
    await user.click(screen.getByRole("button", { name: /comparar ideias/i }));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/compare",
      expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ideaA: "App para restaurantes", ideaB: "Marketplace para produtores locais" })
      })
    );
  });

  it("exibe a comparação retornada pela API", async () => {
    const user = userEvent.setup();
    vi.stubGlobal("fetch", mockFetchWithResponse(sampleComparison));
    render(<ComparisonForm />);

    await user.type(screen.getByLabelText(/ideia a/i), "App para restaurantes");
    await user.type(screen.getByLabelText(/ideia b/i), "Marketplace para produtores locais");
    await user.click(screen.getByRole("button", { name: /comparar ideias/i }));

    expect(await screen.findByText(sampleComparison.comparison.comparativeSummary)).toBeInTheDocument();
    expect(screen.getByText(sampleComparison.comparison.recommendationJustification)).toBeInTheDocument();
    expect(screen.getByText(sampleComparison.comparison.comparativeScores)).toBeInTheDocument();
  });
});
