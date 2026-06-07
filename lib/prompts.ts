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

export function buildIdeaComparisonPrompt(ideaA: string, ideaB: string): string {
  return `Você é um analista de negócios especializado em comparação inicial de ideias.

Compare as duas ideias de negócio abaixo e retorne uma resposta objetiva, em português, organizada exatamente nas seguintes seções:

1. Resumo comparativo
2. Ideia recomendada
3. Justificativa da recomendação
4. Vantagens da ideia A
5. Vantagens da ideia B
6. Riscos da ideia A
7. Riscos da ideia B
8. Diferenças de público-alvo
9. Próximos passos
10. Critérios comparativos

Na seção "Ideia recomendada", responda somente com "Ideia A", "Ideia B" ou "Empate".
Trate a resposta como apoio exploratório, não como validação definitiva de mercado.

Ideia A:
${ideaA}

Ideia B:
${ideaB}`;
}
