import type { BusinessIdeaAnalysis } from "@/types/analyze";
import type { BusinessIdeaComparison, RecommendedIdea } from "@/types/compare";

const recommendedIdeaLabels: Record<RecommendedIdea, string> = {
  ideaA: "Ideia A",
  ideaB: "Ideia B",
  tie: "Empate"
};

type MarkdownSection = {
  title: string;
  content: string;
  list?: boolean;
};

function cleanContent(content: string): string {
  return content.trim();
}

function stripListMarker(content: string): string {
  return content
    .replace(/^[-*]\s+/, "")
    .replace(/^\d+[.)-]?\s+/, "")
    .trim();
}

function stripTrailingPeriod(content: string): string {
  return content.replace(/[.]$/, "").trim();
}

function capitalizeListItem(content: string): string {
  return content.charAt(0).toUpperCase() + content.slice(1);
}

function splitListContent(content: string): string[] {
  return content
    .split(/\r?\n/)
    .flatMap((line) => line.split(";"))
    .flatMap((line) => {
      const cleanedLine = stripListMarker(line);

      if (!cleanedLine.includes(" e ")) {
        return cleanedLine;
      }

      return cleanedLine.split(/\s+e\s+/);
    })
    .map((item) => capitalizeListItem(stripTrailingPeriod(stripListMarker(item))))
    .filter(Boolean);
}

function formatMarkdownSection({ title, content, list = false }: MarkdownSection): string | null {
  const cleanedContent = cleanContent(content);

  if (!cleanedContent) {
    return null;
  }

  if (list) {
    const items = splitListContent(cleanedContent);

    if (items.length === 0) {
      return null;
    }

    return `## ${title}\n${items.map((item) => `- ${item}`).join("\n")}`;
  }

  return `## ${title}\n${cleanedContent}`;
}

function joinMarkdown(title: string, sections: Array<MarkdownSection | null>): string {
  const formattedSections = sections
    .filter((section): section is MarkdownSection => Boolean(section))
    .map(formatMarkdownSection)
    .filter((section): section is string => Boolean(section));

  return [`# ${title}`, ...formattedSections].join("\n\n");
}

export function formatAnalysisAsMarkdown(analysis: BusinessIdeaAnalysis): string {
  return joinMarkdown("Análise da ideia de negócio", [
    { title: "Problema resolvido", content: analysis.problemResolved },
    { title: "Público-alvo", content: analysis.targetAudience },
    { title: "Concorrência básica", content: analysis.basicCompetition },
    { title: "Pontos de atenção", content: analysis.attentionPoints, list: true },
    { title: "Próximos passos", content: analysis.nextSteps, list: true },
    { title: "Nota de viabilidade", content: analysis.viabilityScore }
  ]);
}

export function formatComparisonAsMarkdown(comparison: BusinessIdeaComparison): string {
  return joinMarkdown("Comparação de ideias de negócio", [
    { title: "Ideia recomendada", content: recommendedIdeaLabels[comparison.recommendedIdea] },
    { title: "Resumo comparativo", content: comparison.comparativeSummary },
    { title: "Justificativa", content: comparison.recommendationJustification },
    { title: "Vantagens da ideia A", content: comparison.ideaAAdvantages, list: true },
    { title: "Vantagens da ideia B", content: comparison.ideaBAdvantages, list: true },
    { title: "Riscos da ideia A", content: comparison.ideaARisks, list: true },
    { title: "Riscos da ideia B", content: comparison.ideaBRisks, list: true },
    { title: "Diferenças de público-alvo", content: comparison.targetAudienceDifferences },
    { title: "Próximos passos", content: comparison.nextSteps, list: true },
    { title: "Critérios comparativos", content: comparison.comparativeScores, list: true }
  ]);
}
