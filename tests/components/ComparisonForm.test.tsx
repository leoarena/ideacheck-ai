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

function mockClipboard(writeText = vi.fn().mockResolvedValue(undefined)) {
  Object.defineProperty(navigator, "clipboard", {
    value: { writeText },
    configurable: true
  });

  return writeText;
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
    expect(screen.queryByRole("button", { name: /copiar resultado em markdown/i })).not.toBeInTheDocument();
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
    expect(screen.getAllByText("Ideia A")).toHaveLength(2);
    expect(screen.getByText(sampleComparison.comparison.recommendationJustification)).toBeInTheDocument();
    expect(screen.getByText(sampleComparison.comparison.ideaAAdvantages)).toBeInTheDocument();
    expect(screen.getByText(sampleComparison.comparison.ideaBAdvantages)).toBeInTheDocument();
    expect(screen.getByText(sampleComparison.comparison.ideaARisks)).toBeInTheDocument();
    expect(screen.getByText(sampleComparison.comparison.ideaBRisks)).toBeInTheDocument();
    expect(screen.getByText(sampleComparison.comparison.nextSteps)).toBeInTheDocument();
    expect(screen.getByText(sampleComparison.comparison.comparativeScores)).toBeInTheDocument();
  });

  it("copia a comparação em Markdown e exibe feedback de sucesso", async () => {
    const user = userEvent.setup();
    const writeText = mockClipboard();
    vi.stubGlobal("fetch", mockFetchWithResponse(sampleComparison));
    render(<ComparisonForm />);

    await user.type(screen.getByLabelText(/ideia a/i), "App para restaurantes");
    await user.type(screen.getByLabelText(/ideia b/i), "Marketplace para produtores locais");
    await user.click(screen.getByRole("button", { name: /comparar ideias/i }));
    await user.click(await screen.findByRole("button", { name: /copiar resultado em markdown/i }));

    expect(writeText).toHaveBeenCalledWith(expect.stringContaining("# Comparação de ideias de negócio"));
    expect(writeText).toHaveBeenCalledWith(expect.stringContaining("## Ideia recomendada"));
    expect(await screen.findByText(/resultado copiado em markdown/i)).toBeInTheDocument();
  });

  it("exibe feedback quando não é possível copiar a comparação", async () => {
    const user = userEvent.setup();
    mockClipboard(vi.fn().mockRejectedValue(new Error("Falha ao copiar")));
    vi.stubGlobal("fetch", mockFetchWithResponse(sampleComparison));
    render(<ComparisonForm />);

    await user.type(screen.getByLabelText(/ideia a/i), "App para restaurantes");
    await user.type(screen.getByLabelText(/ideia b/i), "Marketplace para produtores locais");
    await user.click(screen.getByRole("button", { name: /comparar ideias/i }));
    await user.click(await screen.findByRole("button", { name: /copiar resultado em markdown/i }));

    expect(await screen.findByText(/não foi possível copiar o resultado/i)).toBeInTheDocument();
  });
});
