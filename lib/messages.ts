export const uiMessages = {
  emptyIdea: "Descreva uma ideia de negócio antes de solicitar a análise.",
  loadingAnalysis: "Gerando análise com IA local via Ollama...",
  successAnalysis: "Análise gerada com sucesso pelo modelo local.",
  routeConnectionError: "Não foi possível conectar à rota local de análise.",
  genericAnalysisError: "Não foi possível gerar a análise agora."
} as const;

export const apiMessages = {
  invalidJson: "Envie uma requisição JSON válida.",
  emptyIdea: "O campo idea é obrigatório para solicitar uma análise.",
  ollamaUnavailable:
    "Não foi possível conectar ao Ollama local. Verifique se o Ollama está em execução e se o modelo configurado está disponível.",
  unexpectedAnalysis:
    "A IA respondeu, mas a análise não veio no formato estruturado esperado. Tente reformular a ideia e enviar novamente.",
  genericAnalysisFailure: "Não foi possível gerar a análise neste momento. Tente novamente em instantes."
} as const;
