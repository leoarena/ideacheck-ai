import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { IdeaForm } from "@/components/IdeaForm";
import type { AnalyzeSuccessResponse } from "@/types/analyze";

const sampleAnalysis: AnalyzeSuccessResponse = {
  analysis: {
    problemResolved: "Ajuda pequenos restaurantes a reduzir desperdício.",
    targetAudience: "Donos e gerentes de pequenos restaurantes.",
    basicCompetition: "Planilhas e sistemas genéricos de gestão.",
    attentionPoints: "Validar qualidade dos dados e rotina de uso.",
    nextSteps: "Entrevistar restaurantes e testar um protótipo.",
    viabilityScore: "8/10",
    rawText: "Análise estruturada gerada pela IA."
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

describe("IdeaForm", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("renderiza o formulário principal da aplicação", () => {
    render(<IdeaForm />);

    expect(screen.getByLabelText(/ideia de negócio/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /solicitar análise/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /resultado da análise/i })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /copiar resultado em markdown/i })).not.toBeInTheDocument();
  });

  it("impede o envio quando o campo de ideia está vazio", async () => {
    const user = userEvent.setup();
    render(<IdeaForm />);

    await user.click(screen.getByRole("button", { name: /solicitar análise/i }));

    expect(screen.getByText(/descreva uma ideia de negócio antes de solicitar a análise/i)).toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
  });

  it("exibe estado de carregamento ao enviar uma ideia válida", async () => {
    const user = userEvent.setup();
    vi.stubGlobal("fetch", vi.fn(() => new Promise(() => undefined)));
    render(<IdeaForm />);

    await user.type(screen.getByLabelText(/ideia de negócio/i), "Marketplace para produtores locais");
    await user.click(screen.getByRole("button", { name: /solicitar análise/i }));

    expect(screen.getByText(/gerando análise com apoio de ia/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /solicitando análise/i })).toBeDisabled();
    expect(screen.queryByRole("button", { name: /copiar resultado em markdown/i })).not.toBeInTheDocument();
  });

  it("chama a rota /api/analyze com a ideia digitada", async () => {
    const user = userEvent.setup();
    const fetchMock = mockFetchWithResponse(sampleAnalysis);
    vi.stubGlobal("fetch", fetchMock);
    render(<IdeaForm />);

    await user.type(screen.getByLabelText(/ideia de negócio/i), "  App para reduzir desperdício em restaurantes  ");
    await user.click(screen.getByRole("button", { name: /solicitar análise/i }));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/analyze",
      expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ idea: "App para reduzir desperdício em restaurantes" })
      })
    );
  });

  it("exibe a análise retornada pela API", async () => {
    const user = userEvent.setup();
    vi.stubGlobal("fetch", mockFetchWithResponse(sampleAnalysis));
    render(<IdeaForm />);

    await user.type(screen.getByLabelText(/ideia de negócio/i), "App para reduzir desperdício em restaurantes");
    await user.click(screen.getByRole("button", { name: /solicitar análise/i }));

    expect(await screen.findByText(sampleAnalysis.analysis.problemResolved)).toBeInTheDocument();
    expect(screen.getByText(sampleAnalysis.analysis.targetAudience)).toBeInTheDocument();
    expect(screen.getByText(sampleAnalysis.analysis.viabilityScore)).toBeInTheDocument();
  });

  it("copia a análise em Markdown e exibe feedback de sucesso", async () => {
    const user = userEvent.setup();
    const writeText = mockClipboard();
    vi.stubGlobal("fetch", mockFetchWithResponse(sampleAnalysis));
    render(<IdeaForm />);

    await user.type(screen.getByLabelText(/ideia de negócio/i), "App para reduzir desperdício em restaurantes");
    await user.click(screen.getByRole("button", { name: /solicitar análise/i }));
    await user.click(await screen.findByRole("button", { name: /copiar resultado em markdown/i }));

    expect(writeText).toHaveBeenCalledWith(expect.stringContaining("# Análise da ideia de negócio"));
    expect(writeText).toHaveBeenCalledWith(expect.stringContaining("## Problema resolvido"));
    expect(await screen.findByText(/resultado copiado em markdown/i)).toBeInTheDocument();
  });
});
