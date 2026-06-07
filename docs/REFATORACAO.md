# Refatoração documentada

## 1. Contexto
Foi analisado o fluxo de comparação de ideias e a funcionalidade de copiar resultado em Markdown. Esses módulos compartilham a necessidade de transformar o valor estrutural `RecommendedIdea` (`ideaA`, `ideaB` ou `tie`) em um rótulo visível ao usuário.

## 2. Problema técnico identificado
O mesmo mapeamento de recomendação para rótulo era mantido em dois arquivos: `components/ComparisonResult.tsx`, responsável pela renderização da comparação, e `lib/result-markdown.ts`, responsável pela conversão do resultado para Markdown. Essa duplicação podia fazer a interface e o Markdown copiado divergirem em uma manutenção futura.

## 3. Princípio aplicado
Clean Code — remoção de duplicação.

## 4. Justificativa
A refatoração foi necessária porque o rótulo de recomendação é uma regra pequena, mas compartilhada por duas saídas do mesmo domínio: tela e Markdown. Criar uma função específica é proporcional ao problema, evita uma abstração ampla e preserva todos os contratos e textos atuais.

## 5. Estado anterior
`components/ComparisonResult.tsx` mantinha o mapa localmente:

```ts
const recommendedIdeaLabels: Record<RecommendedIdea, string> = {
  ideaA: "Ideia A",
  ideaB: "Ideia B",
  tie: "Empate"
};
```

`lib/result-markdown.ts` repetia o mesmo mapa:

```ts
const recommendedIdeaLabels: Record<RecommendedIdea, string> = {
  ideaA: "Ideia A",
  ideaB: "Ideia B",
  tie: "Empate"
};
```

## 6. Estado posterior
O mapeamento passou a ficar centralizado em `lib/recommended-idea-label.ts`:

```ts
const recommendedIdeaLabels: Record<RecommendedIdea, string> = {
  ideaA: "Ideia A",
  ideaB: "Ideia B",
  tie: "Empate"
};

export function getRecommendedIdeaLabel(recommendedIdea: RecommendedIdea): string {
  return recommendedIdeaLabels[recommendedIdea];
}
```

A UI passou a consumir a função:

```tsx
{comparison ? getRecommendedIdeaLabel(comparison.recommendedIdea) : "A recomendação aparecerá após a comparação."}
```

A formatação Markdown também passou a consumir a mesma função:

```ts
{ title: "Ideia recomendada", content: getRecommendedIdeaLabel(comparison.recommendedIdea) }
```

## 7. Comparativo antes e depois
| aspecto | antes | depois | benefício |
| --- | --- | --- | --- |
| Fonte dos rótulos | Dois mapas idênticos em arquivos diferentes. | Uma função compartilhada em `lib/recommended-idea-label.ts`. | Reduz risco de divergência entre UI e Markdown. |
| Testabilidade | O mapeamento era testado indiretamente pelo Markdown. | O mapeamento tem teste unitário próprio. | Falhas ficam mais fáceis de localizar. |
| Escopo | Duplicação pequena espalhada entre componente e lib. | Alteração localizada, sem nova camada arquitetural. | Mantém baixo risco e revisão simples. |
| Comportamento | Exibia e copiava `Ideia A`, `Ideia B` ou `Empate`. | Continua exibindo e copiando os mesmos textos. | Preserva comportamento funcional. |

## 8. Arquivos alterados
- `components/ComparisonResult.tsx`
- `lib/result-markdown.ts`
- `lib/recommended-idea-label.ts`
- `tests/lib/recommended-idea-label.test.ts`
- `docs/REFATORACAO.md`
- `docs/prompts/07-refatoracao.md`

## 9. Validação
| comando | resultado | observação |
| --- | --- | --- |
| `npm test` | sucesso | 7 arquivos de teste e 27 testes aprovados. |
| `npm run build` | sucesso | Build do Next.js concluído com compilação, lint/check interno e tipos. |
| `npm run lint` | não executado | Não há script `lint` no `package.json`. |
| `git diff --check` | sucesso | Nenhum problema de whitespace reportado. |
| `git status --short` | sucesso | Estado revisado ao final da tarefa. |
| `git diff --stat` | sucesso | Diff estatístico revisado. |
| `git diff` | sucesso | Diff completo revisado. |

## 10. Avaliação do resultado
O comportamento funcional foi preservado. A comparação continua exibindo o mesmo rótulo de recomendação e o Markdown copiado continua gerando o mesmo texto. A melhoria obtida foi a remoção de uma duplicação de domínio com uma função pequena, tipada e coberta por teste unitário.

## 11. Limitações
Permaneceram fora do escopo a extração do fallback repetido de seções ausentes em `AnalysisResult` e `ComparisonResult`, e a possível redução de duplicação no cliente de API em `lib/api.ts`. Esses pontos têm benefício real, mas não eram necessários para esta refatoração pequena.
