import type { BusinessIdeaAnalysis, BusinessIdeaAnalysisSectionKey } from "@/types/analyze";

type SectionDefinition = {
  key: BusinessIdeaAnalysisSectionKey;
  aliases: string[];
};

const sectionDefinitions: SectionDefinition[] = [
  {
    key: "problemResolved",
    aliases: ["problema que resolve", "problema que a ideia resolve", "problema resolvido"]
  },
  {
    key: "targetAudience",
    aliases: ["público-alvo", "publico-alvo", "publico alvo", "público alvo"]
  },
  {
    key: "basicCompetition",
    aliases: ["concorrência básica", "concorrencia basica", "concorrência", "concorrencia"]
  },
  {
    key: "attentionPoints",
    aliases: ["pontos de atenção", "pontos de atencao", "atenções", "atencoes"]
  },
  {
    key: "nextSteps",
    aliases: ["próximos passos sugeridos", "proximos passos sugeridos", "próximos passos", "proximos passos"]
  },
  {
    key: "viabilityScore",
    aliases: [
      "nota inicial de viabilidade de 0 a 10",
      "nota inicial de viabilidade",
      "viabilidade",
      "nota de viabilidade"
    ]
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

function identifySection(line: string): BusinessIdeaAnalysisSectionKey | null {
  const normalizedLine = normalizeText(line);

  for (const definition of sectionDefinitions) {
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

function buildEmptySections(): Record<BusinessIdeaAnalysisSectionKey, string[]> {
  return {
    problemResolved: [],
    targetAudience: [],
    basicCompetition: [],
    attentionPoints: [],
    nextSteps: [],
    viabilityScore: []
  };
}

export function parseBusinessIdeaAnalysis(rawText: string): BusinessIdeaAnalysis {
  const sections = buildEmptySections();
  let currentSection: BusinessIdeaAnalysisSectionKey | null = null;

  for (const rawLine of rawText.split(/\r?\n/)) {
    const line = rawLine.trim();

    if (!line) {
      continue;
    }

    const detectedSection = identifySection(line);

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

  return {
    problemResolved: sections.problemResolved.join("\n").trim(),
    targetAudience: sections.targetAudience.join("\n").trim(),
    basicCompetition: sections.basicCompetition.join("\n").trim(),
    attentionPoints: sections.attentionPoints.join("\n").trim(),
    nextSteps: sections.nextSteps.join("\n").trim(),
    viabilityScore: sections.viabilityScore.join("\n").trim(),
    rawText: rawText.trim()
  };
}

export function hasRequiredAnalysisSections(analysis: BusinessIdeaAnalysis): boolean {
  return Boolean(
    analysis.problemResolved && analysis.targetAudience && analysis.basicCompetition && analysis.attentionPoints
  );
}
