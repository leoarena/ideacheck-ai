# Análise crítica de uma saída gerada por IA

## 1. Contexto
Durante a definição do escopo da evolução do IdeaCheck AI, a IA propôs uma sequência de funcionalidades para ampliar o produto sem alterar o fluxo principal já existente. O repositório mostra que essa definição passou por revisão humana e foi refinada antes da implementação.

## 2. Saída inicial da IA
A sugestão inicial tratou “Copiar a análise em Markdown” como a principal evolução funcional do produto. Esse ponto aparece na primeira definição de escopo registrada em `docs/prompts/02-definicao-escopo.md`, onde a opção foi escolhida como funcionalidade principal.

## 3. Problema identificado
A sugestão era útil como melhoria de experiência do usuário, mas insuficiente para ocupar o lugar de funcionalidade principal. Ela reaproveitava a análise já gerada, porém não acrescentava lógica de negócio relevante nem resolvia um novo problema central do produto.

## 4. Impacto potencial
Aceitar essa sugestão sem revisão poderia levar o projeto a um escopo tecnicamente fraco, com uma segunda evolução concentrada em conveniência de saída e não em uma nova decisão de negócio. Isso reduziria o alinhamento com o objetivo funcional do IdeaCheck AI, que é apoiar a avaliação estruturada de ideias de negócio.

## 5. Intervenção humana
A revisão humana rejeitou a cópia em Markdown como funcionalidade principal, refinou o prompt de escopo e definiu a comparação entre duas ideias como a segunda funcionalidade principal. A cópia em Markdown foi mantida depois apenas como melhoria secundária de experiência do usuário.

## 6. Resultado após refinamento
O fluxo refinado passou a funcionar assim:
- o usuário informa duas ideias;
- o sistema valida as entradas;
- o sistema rejeita ideias vazias ou idênticas;
- o modelo gera uma comparação estruturada;
- a interface exibe recomendação, justificativa, vantagens, riscos e próximos passos.

## 7. Validação
As evidências do repositório confirmam o refinamento:
- `docs/ESCOPO.md` registra a comparação de duas ideias como funcionalidade principal e a cópia em Markdown como melhoria secundária;
- `docs/prompts/04-geracao-codigo-ciclo-1.md` documenta a implementação da primeira versão funcional da comparação;
- `docs/prompts/06-refinamento-ciclo-3.md` documenta a cópia do resultado em Markdown como funcionalidade secundária;
- `components/ComparisonForm.tsx`, `components/ComparisonResult.tsx` e `lib/result-markdown.ts` mostram a implementação posterior da comparação e da cópia em Markdown;
- `tests/components/ComparisonForm.test.tsx` e `tests/lib/result-markdown.test.ts` validam a comparação e a formatação em Markdown;
- `tests/app/compare-route.test.ts` e `tests/lib/comparison.test.ts` reforçam a validação do fluxo comparativo e do parsing da resposta.

## 8. Lição aprendida
Saídas geradas por IA devem ser avaliadas criticamente antes de serem aceitas como escopo. Um prompt de definição precisa explicitar com clareza o tipo de funcionalidade esperada, a necessidade de lógica de negócio, as restrições do produto e os critérios de aceite, para evitar que melhorias úteis, mas secundárias, sejam tratadas como evolução principal.

## 9. Referências
- `docs/ESCOPO.md`
- `docs/prompts/02-definicao-escopo.md`
- `docs/prompts/04-geracao-codigo-ciclo-1.md`
- `docs/prompts/06-refinamento-ciclo-3.md`
