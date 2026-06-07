export const uiMessages = {
  emptyIdea: "Descreva uma ideia de negócio antes de solicitar a análise.",
  emptyComparisonIdeas: "Preencha as duas ideias de negócio antes de solicitar a comparação.",
  identicalComparisonIdeas: "Informe duas ideias diferentes para gerar uma comparação.",
  loadingAnalysis: "Gerando análise com apoio de IA...",
  loadingComparison: "Gerando comparação com apoio de IA...",
  successAnalysis: "Análise gerada com sucesso.",
  successComparison: "Comparação gerada com sucesso.",
  routeConnectionError: "Não foi possível gerar a análise agora.",
  comparisonRouteConnectionError: "Não foi possível gerar a comparação agora.",
  genericAnalysisError: "Não foi possível gerar a análise agora.",
  genericComparisonError: "Não foi possível gerar a comparação agora."
} as const;

export const apiMessages = {
  invalidJson: "Envie uma requisição JSON válida.",
  emptyIdea: "O campo idea é obrigatório para solicitar uma análise.",
  emptyComparisonIdeas: "Os campos ideaA e ideaB são obrigatórios para solicitar uma comparação.",
  identicalComparisonIdeas: "As ideias informadas devem ser diferentes para comparação.",
  ollamaUnavailable:
    "Não foi possível gerar a resposta agora. Tente novamente em instantes.",
  unexpectedAnalysis:
    "A IA respondeu, mas a análise não veio no formato estruturado esperado. Tente reformular a ideia e enviar novamente.",
  unexpectedComparison:
    "A IA respondeu, mas a comparação não veio no formato estruturado esperado. Tente reformular as ideias e enviar novamente.",
  genericAnalysisFailure: "Não foi possível gerar a análise neste momento. Tente novamente em instantes.",
  genericComparisonFailure: "Não foi possível gerar a comparação neste momento. Tente novamente em instantes."
} as const;
