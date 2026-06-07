import { describe, expect, it } from "vitest";
import { formatAnalysisAsMarkdown, formatComparisonAsMarkdown } from "@/lib/result-markdown";
import type { BusinessIdeaAnalysis } from "@/types/analyze";
import type { BusinessIdeaComparison } from "@/types/compare";

describe("formatAnalysisAsMarkdown", () => {
  it("gera Markdown legível para uma análise individual", () => {
    const analysis: BusinessIdeaAnalysis = {
      problemResolved: "Dificuldade de pequenos restaurantes em prever demanda.",
      targetAudience: "Restaurantes locais.",
      basicCompetition: "",
      attentionPoints: "Qualidade dos dados e adesão inicial.",
      nextSteps: "Validar o problema com cinco restaurantes.",
      viabilityScore: "8",
      rawText: "Resposta original."
    };

    expect(formatAnalysisAsMarkdown(analysis)).toBe(`# Análise da ideia de negócio

## Problema resolvido
Dificuldade de pequenos restaurantes em prever demanda.

## Público-alvo
Restaurantes locais.

## Pontos de atenção
- Qualidade dos dados
- Adesão inicial

## Próximos passos
- Validar o problema com cinco restaurantes

## Nota de viabilidade
8`);
  });

  it("omite seções vazias", () => {
    const analysis: BusinessIdeaAnalysis = {
      problemResolved: "Problema claro.",
      targetAudience: "",
      basicCompetition: "",
      attentionPoints: "",
      nextSteps: "",
      viabilityScore: "",
      rawText: "Resposta original."
    };

    expect(formatAnalysisAsMarkdown(analysis)).toBe(`# Análise da ideia de negócio

## Problema resolvido
Problema claro.`);
  });
});

describe("formatComparisonAsMarkdown", () => {
  it("gera Markdown legível para uma comparação de ideias", () => {
    const comparison: BusinessIdeaComparison = {
      comparativeSummary: "",
      recommendedIdea: "ideaA",
      recommendationJustification: "Problema mais específico e público-alvo mais claro.",
      ideaAAdvantages: "Nicho definido.",
      ideaBAdvantages: "Mercado amplo.",
      ideaARisks: "Dependência de dados.",
      ideaBRisks: "Concorrência elevada.",
      targetAudienceDifferences: "",
      nextSteps: "Entrevistar potenciais usuários.",
      comparativeScores: "",
      rawText: "Resposta original."
    };

    expect(formatComparisonAsMarkdown(comparison)).toBe(`# Comparação de ideias de negócio

## Ideia recomendada
Ideia A

## Justificativa
Problema mais específico e público-alvo mais claro.

## Vantagens da ideia A
- Nicho definido

## Vantagens da ideia B
- Mercado amplo

## Riscos da ideia A
- Dependência de dados

## Riscos da ideia B
- Concorrência elevada

## Próximos passos
- Entrevistar potenciais usuários`);
  });
});
