"use client";

import { FormEvent, useState } from "react";
import { requestIdeaComparison } from "@/lib/api";
import { uiMessages } from "@/lib/messages";
import { areIdeasEquivalent, normalizeIdeaInput } from "@/lib/validation";
import type { BusinessIdeaComparison } from "@/types/compare";
import type { RequestStatus } from "@/types/ui";
import { ComparisonResult } from "./ComparisonResult";
import { FormStatusMessage } from "./FormStatusMessage";
import { IdeaTextarea } from "./IdeaTextarea";

export function ComparisonForm() {
  const [ideaA, setIdeaA] = useState("");
  const [ideaB, setIdeaB] = useState("");
  const [status, setStatus] = useState<RequestStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [comparison, setComparison] = useState<BusinessIdeaComparison | null>(null);

  const isLoading = status === "loading";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedIdeaA = normalizeIdeaInput(ideaA);
    const normalizedIdeaB = normalizeIdeaInput(ideaB);
    setComparison(null);

    if (!normalizedIdeaA || !normalizedIdeaB) {
      setStatus("error");
      setMessage(uiMessages.emptyComparisonIdeas);
      return;
    }

    if (areIdeasEquivalent(normalizedIdeaA, normalizedIdeaB)) {
      setStatus("error");
      setMessage(uiMessages.identicalComparisonIdeas);
      return;
    }

    setStatus("loading");
    setMessage(uiMessages.loadingComparison);

    try {
      const generatedComparison = await requestIdeaComparison(normalizedIdeaA, normalizedIdeaB);
      setComparison(generatedComparison);
      setStatus("success");
      setMessage(uiMessages.successComparison);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : uiMessages.comparisonRouteConnectionError);
    }
  }

  return (
    <div className="space-y-5">
      <form onSubmit={handleSubmit} className="rounded-lg border border-line bg-panel p-5 shadow-soft sm:p-6">
        <div className="grid gap-4 lg:grid-cols-2">
          <IdeaTextarea
            id="ideaA"
            label="Ideia A"
            value={ideaA}
            disabled={isLoading}
            onChange={setIdeaA}
            placeholder="Exemplo: aplicativo para restaurantes preverem demanda e reduzirem desperdício."
            rows={6}
          />
          <IdeaTextarea
            id="ideaB"
            label="Ideia B"
            value={ideaB}
            disabled={isLoading}
            onChange={setIdeaB}
            placeholder="Exemplo: plataforma para conectar produtores locais a consumidores do bairro."
            rows={6}
          />
        </div>

        <FormStatusMessage status={status} message={message} />

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">A comparação será gerada com apoio de IA.</p>
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1d5b52] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? "Comparando ideias..." : "Comparar ideias"}
          </button>
        </div>
      </form>

      <ComparisonResult comparison={comparison} isLoading={isLoading} />
    </div>
  );
}
