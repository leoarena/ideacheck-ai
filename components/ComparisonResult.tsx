import type { BusinessIdeaComparison, BusinessIdeaComparisonSectionKey, RecommendedIdea } from "@/types/compare";

interface ComparisonResultProps {
  comparison: BusinessIdeaComparison | null;
  isLoading: boolean;
}

const recommendedIdeaLabels: Record<RecommendedIdea, string> = {
  ideaA: "Ideia A",
  ideaB: "Ideia B",
  tie: "Empate"
};

const sections: Array<{
  title: string;
  key: BusinessIdeaComparisonSectionKey | "comparativeScores";
}> = [
  { title: "Resumo comparativo", key: "comparativeSummary" },
  { title: "Justificativa da recomendação", key: "recommendationJustification" },
  { title: "Vantagens da ideia A", key: "ideaAAdvantages" },
  { title: "Vantagens da ideia B", key: "ideaBAdvantages" },
  { title: "Riscos da ideia A", key: "ideaARisks" },
  { title: "Riscos da ideia B", key: "ideaBRisks" },
  { title: "Diferenças de público-alvo", key: "targetAudienceDifferences" },
  { title: "Próximos passos", key: "nextSteps" },
  { title: "Critérios comparativos", key: "comparativeScores" }
];

function renderContent(content: string | undefined) {
  if (!content) {
    return "Esta seção não foi identificada na resposta da IA.";
  }

  return content;
}

export function ComparisonResult({ comparison, isLoading }: ComparisonResultProps) {
  return (
    <section aria-live="polite" className="rounded-lg border border-line bg-panel p-5 shadow-soft">
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-ink">Resultado da comparação</h2>
          <p className="text-sm text-muted">Comparação estruturada gerada com apoio de IA.</p>
        </div>
      </div>

      <article className="mb-3 rounded-lg border border-line bg-surface p-4">
        <h3 className="text-sm font-semibold text-ink">Ideia recomendada</h3>
        {isLoading ? (
          <div className="mt-4 h-4 w-32 animate-pulse rounded bg-line" aria-label="Carregando recomendação" />
        ) : (
          <p className="mt-3 text-sm leading-6 text-muted">
            {comparison ? recommendedIdeaLabels[comparison.recommendedIdea] : "A recomendação aparecerá após a comparação."}
          </p>
        )}
      </article>

      <div className="grid gap-3 sm:grid-cols-2">
        {sections.map((section) => {
          const content = comparison?.[section.key];

          return (
            <article key={section.key} className="min-h-36 rounded-lg border border-line bg-surface p-4">
              <h3 className="text-sm font-semibold text-ink">{section.title}</h3>
              {isLoading ? (
                <div className="mt-4 space-y-2" aria-label="Carregando seção da comparação">
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
