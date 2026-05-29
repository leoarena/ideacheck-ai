import type { BusinessIdeaAnalysis, BusinessIdeaAnalysisSectionKey } from "@/types/analyze";

interface AnalysisResultProps {
  analysis: BusinessIdeaAnalysis | null;
  isLoading: boolean;
}

const sections: Array<{
  title: string;
  key: BusinessIdeaAnalysisSectionKey;
}> = [
  { title: "Problema que resolve", key: "problemResolved" },
  { title: "Público-alvo", key: "targetAudience" },
  { title: "Concorrência básica", key: "basicCompetition" },
  { title: "Pontos de atenção", key: "attentionPoints" },
  { title: "Próximos passos sugeridos", key: "nextSteps" },
  { title: "Nota inicial de viabilidade", key: "viabilityScore" }
];

function renderContent(content: string | undefined) {
  if (!content) {
    return "Esta seção não foi identificada na resposta da IA.";
  }

  return content;
}

export function AnalysisResult({ analysis, isLoading }: AnalysisResultProps) {
  return (
    <section aria-live="polite" className="rounded-lg border border-line bg-panel p-5 shadow-soft">
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-ink">Resultado da análise</h2>
          <p className="text-sm text-muted">Análise estruturada gerada localmente com IA via Ollama.</p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {sections.map((section) => {
          const content = analysis?.[section.key];

          return (
            <article key={section.key} className="min-h-36 rounded-lg border border-line bg-surface p-4">
              <h3 className="text-sm font-semibold text-ink">{section.title}</h3>
              {isLoading ? (
                <div className="mt-4 space-y-2" aria-label="Carregando seção da análise">
                  <div className="h-3 w-full animate-pulse rounded bg-line" />
                  <div className="h-3 w-11/12 animate-pulse rounded bg-line" />
                  <div className="h-3 w-2/3 animate-pulse rounded bg-line" />
                </div>
              ) : (
                <p className="mt-3 whitespace-pre-line text-sm leading-6 text-muted">{renderContent(content)}</p>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
