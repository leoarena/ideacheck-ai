import type { BusinessIdeaComparison, BusinessIdeaComparisonSectionKey, RecommendedIdea } from "@/types/compare";

type ComparisonSectionDefinition = {
  key: BusinessIdeaComparisonSectionKey | "recommendedIdea" | "comparativeScores";
  aliases: string[];
};

const comparisonSectionDefinitions: ComparisonSectionDefinition[] = [
  {
    key: "comparativeSummary",
    aliases: ["resumo comparativo", "síntese comparativa", "sintese comparativa", "comparativo geral"]
  },
  {
    key: "recommendedIdea",
    aliases: ["ideia recomendada", "recomendação", "recomendacao", "melhor ideia"]
  },
  {
    key: "recommendationJustification",
    aliases: ["justificativa da recomendação", "justificativa da recomendacao", "justificativa"]
  },
  {
    key: "ideaAAdvantages",
    aliases: ["vantagens da ideia a", "vantagens ideia a", "pontos fortes da ideia a"]
  },
  {
    key: "ideaBAdvantages",
    aliases: ["vantagens da ideia b", "vantagens ideia b", "pontos fortes da ideia b"]
  },
  {
    key: "ideaARisks",
    aliases: ["riscos da ideia a", "riscos ideia a", "pontos de atenção da ideia a", "pontos de atencao da ideia a"]
  },
  {
    key: "ideaBRisks",
    aliases: ["riscos da ideia b", "riscos ideia b", "pontos de atenção da ideia b", "pontos de atencao da ideia b"]
  },
  {
    key: "targetAudienceDifferences",
    aliases: [
      "diferenças de público-alvo",
      "diferencas de publico-alvo",
      "diferenças de publico alvo",
      "diferencas de publico alvo",
      "público-alvo",
      "publico-alvo"
    ]
  },
  {
    key: "nextSteps",
    aliases: ["próximos passos", "proximos passos", "próximos passos sugeridos", "proximos passos sugeridos"]
  },
  {
    key: "comparativeScores",
    aliases: ["notas individuais", "critérios comparativos", "criterios comparativos", "notas ou critérios"]
  }
];

function normalizeText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[*_`#]/g, "")
    .trim()
    .replace(/^[-–—]\s*/, "")
    .replace(/^\d+[.)-]?\s*/, "")
    .trim();
}

function identifyComparisonSection(line: string): ComparisonSectionDefinition["key"] | null {
  const normalizedLine = normalizeText(line);

  for (const definition of comparisonSectionDefinitions) {
    const matchesAlias = definition.aliases.some((alias) => normalizedLine.startsWith(normalizeText(alias)));

    if (matchesAlias) {
      return definition.key;
    }
  }

  return null;
}

function getInlineSectionContent(line: string): string {
  const colonIndex = line.indexOf(":");

  if (colonIndex < 0) {
    return "";
  }

  return line
    .slice(colonIndex + 1)
    .replace(/[*_`]/g, "")
    .trim();
}

function buildEmptyComparisonSections(): Record<ComparisonSectionDefinition["key"], string[]> {
  return {
    comparativeSummary: [],
    recommendedIdea: [],
    recommendationJustification: [],
    ideaAAdvantages: [],
    ideaBAdvantages: [],
    ideaARisks: [],
    ideaBRisks: [],
    targetAudienceDifferences: [],
    nextSteps: [],
    comparativeScores: []
  };
}

export function parseRecommendedIdea(value: string): RecommendedIdea | null {
  const normalizedValue = normalizeText(value);

  if (!normalizedValue) {
    return null;
  }

  if (/\b(empate|equilibrad[ao]s?|ambas|nenhuma)\b/.test(normalizedValue)) {
    return "tie";
  }

  if (/\b(ideia a|opcao a|opção a|primeira ideia|primeira)\b/.test(normalizedValue)) {
    return "ideaA";
  }

  if (/\b(ideia b|opcao b|opção b|segunda ideia|segunda)\b/.test(normalizedValue)) {
    return "ideaB";
  }

  if (normalizedValue === "a") {
    return "ideaA";
  }

  if (normalizedValue === "b") {
    return "ideaB";
  }

  return null;
}

export function parseBusinessIdeaComparison(rawText: string): BusinessIdeaComparison | null {
  const sections = buildEmptyComparisonSections();
  let currentSection: ComparisonSectionDefinition["key"] | null = null;

  for (const rawLine of rawText.split(/\r?\n/)) {
    const line = rawLine.trim();

    if (!line) {
      continue;
    }

    const detectedSection = identifyComparisonSection(line);

    if (detectedSection) {
      currentSection = detectedSection;
      const inlineContent = getInlineSectionContent(line);

      if (inlineContent) {
        sections[currentSection].push(inlineContent);
      }

      continue;
    }

    if (currentSection) {
      sections[currentSection].push(line.replace(/^[-*]\s*/, ""));
    }
  }

  const recommendedIdeaText = sections.recommendedIdea.join("\n").trim();
  const recommendedIdea = parseRecommendedIdea(recommendedIdeaText);

  if (!recommendedIdea) {
    return null;
  }

  return {
    comparativeSummary: sections.comparativeSummary.join("\n").trim(),
    recommendedIdea,
    recommendationJustification: sections.recommendationJustification.join("\n").trim(),
    ideaAAdvantages: sections.ideaAAdvantages.join("\n").trim(),
    ideaBAdvantages: sections.ideaBAdvantages.join("\n").trim(),
    ideaARisks: sections.ideaARisks.join("\n").trim(),
    ideaBRisks: sections.ideaBRisks.join("\n").trim(),
    targetAudienceDifferences: sections.targetAudienceDifferences.join("\n").trim(),
    nextSteps: sections.nextSteps.join("\n").trim(),
    comparativeScores: sections.comparativeScores.join("\n").trim(),
    rawText: rawText.trim()
  };
}

export function hasRequiredComparisonSections(comparison: BusinessIdeaComparison): boolean {
  return Boolean(
    comparison.comparativeSummary &&
      comparison.recommendationJustification &&
      comparison.ideaAAdvantages &&
      comparison.ideaBAdvantages &&
      comparison.ideaARisks &&
      comparison.ideaBRisks &&
      comparison.targetAudienceDifferences &&
      comparison.nextSteps
  );
}
