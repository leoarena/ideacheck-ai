"use client";

import { FormEvent, useState } from "react";
import { getApiErrorMessage, isAnalyzeSuccessResponse } from "@/lib/api";
import type { BusinessIdeaAnalysis } from "@/types/analyze";
import { AnalysisResult } from "./AnalysisResult";

type RequestStatus = "idle" | "loading" | "success" | "error";

const emptyIdeaMessage = "Descreva uma ideia de negócio antes de solicitar a análise.";
const pendingIntegrationMessage =
  "A integração com IA via Ollama ainda será conectada na próxima etapa. Nenhuma análise simulada foi gerada.";

export function IdeaForm() {
  const [idea, setIdea] = useState("");
  const [status, setStatus] = useState<RequestStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<BusinessIdeaAnalysis | null>(null);

  const isLoading = status === "loading";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedIdea = idea.trim();
    setAnalysis(null);

    if (!trimmedIdea) {
      setStatus("error");
      setMessage(emptyIdeaMessage);
      return;
    }

    setStatus("loading");
    setMessage("Enviando a ideia para a rota local de análise...");

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ idea: trimmedIdea })
      });

      const payload: unknown = await response.json().catch(() => null);

      if (!response.ok) {
        setStatus("error");

        if (response.status === 400) {
          setMessage(getApiErrorMessage(payload) || emptyIdeaMessage);
          return;
        }

        if (response.status === 501) {
          setMessage(getApiErrorMessage(payload) || pendingIntegrationMessage);
          return;
        }

        setMessage(getApiErrorMessage(payload) || "Não foi possível processar a solicitação.");
        return;
      }

      if (!isAnalyzeSuccessResponse(payload)) {
        setStatus("error");
        setMessage("A resposta da API não está no formato esperado para exibição da análise.");
        return;
      }

      setAnalysis(payload.analysis);
      setStatus("success");
      setMessage("Análise recebida com sucesso.");
    } catch {
      setStatus("error");
      setMessage("Não foi possível conectar à rota local de análise.");
    }
  }

  return (
    <div className="space-y-5">
      <form onSubmit={handleSubmit} className="rounded-lg border border-line bg-panel p-5 shadow-soft sm:p-6">
        <div className="space-y-2">
          <label htmlFor="idea" className="text-sm font-semibold text-ink">
            Ideia de negócio
          </label>
          <textarea
            id="idea"
            name="idea"
            value={idea}
            onChange={(event) => setIdea(event.target.value)}
            placeholder="Exemplo: uma plataforma local para pequenos restaurantes preverem demanda e reduzirem desperdício."
            rows={8}
            disabled={isLoading}
            className="min-h-48 w-full resize-y rounded-lg border border-line bg-white px-4 py-3 text-base leading-7 text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:bg-surface"
          />
        </div>

        {message ? (
          <p
            className={`mt-4 rounded-lg border px-4 py-3 text-sm leading-6 ${
              status === "error"
                ? "border-amber-300 bg-amber-50 text-warning"
                : "border-line bg-surface text-muted"
            }`}
          >
            {message}
          </p>
        ) : null}

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">A chamada real ao Ollama será conectada em uma etapa posterior.</p>
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1d5b52] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? "Solicitando análise..." : "Solicitar análise"}
          </button>
        </div>
      </form>

      <AnalysisResult analysis={analysis} isLoading={isLoading} />
    </div>
  );
}
