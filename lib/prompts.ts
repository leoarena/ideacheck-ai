export function buildIdeaAnalysisPrompt(idea: string): string {
  return `Você é um analista de negócios especializado em validação inicial de ideias.

Analise a ideia de negócio abaixo e retorne uma resposta objetiva, em português, organizada nas seguintes seções:

1. Problema que resolve
2. Público-alvo
3. Concorrência básica
4. Pontos de atenção
5. Próximos passos sugeridos
6. Nota inicial de viabilidade de 0 a 10

Ideia de negócio:
${idea}`;
}
