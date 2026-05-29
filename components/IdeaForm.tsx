"use client";

import { FormEvent, useState } from "react";
import { requestIdeaAnalysis } from "@/lib/api";
import { uiMessages } from "@/lib/messages";
import { normalizeIdeaInput } from "@/lib/validation";
import type { BusinessIdeaAnalysis } from "@/types/analyze";
import type { RequestStatus } from "@/types/ui";
import { AnalysisResult } from "./AnalysisResult";
import { FormStatusMessage } from "./FormStatusMessage";
import { IdeaTextarea } from "./IdeaTextarea";

export function IdeaForm() {
  const [idea, setIdea] = useState("");
  const [status, setStatus] = useState<RequestStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<BusinessIdeaAnalysis | null>(null);

  const isLoading = status === "loading";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedIdea = normalizeIdeaInput(idea);
    setAnalysis(null);

    if (!normalizedIdea) {
      setStatus("error");
      setMessage(uiMessages.emptyIdea);
      return;
    }

    setStatus("loading");
    setMessage(uiMessages.loadingAnalysis);

    try {
      const generatedAnalysis = await requestIdeaAnalysis(normalizedIdea);
      setAnalysis(generatedAnalysis);
      setStatus("success");
      setMessage(uiMessages.successAnalysis);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : uiMessages.routeConnectionError);
    }
  }

  return (
    <div className="space-y-5">
      <form onSubmit={handleSubmit} className="rounded-lg border border-line bg-panel p-5 shadow-soft sm:p-6">
        <IdeaTextarea value={idea} disabled={isLoading} onChange={setIdea} />
        <FormStatusMessage status={status} message={message} />

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">A análise será gerada localmente pelo modelo configurado no Ollama.</p>
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
