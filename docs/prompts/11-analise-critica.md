# Prompt 11 — Análise crítica de saída da IA

## Objetivo
Documentar uma intervenção humana aplicada após identificar uma sugestão insuficiente gerada por IA.

## Prompt utilizado
Atue como desenvolvedor sênior responsável por documentação técnica e análise crítica de saídas geradas por IA.

## Objetivo

Documentar um caso real em que uma sugestão gerada por IA precisou ser revisada e refinada por intervenção humana.

Esta etapa é exclusivamente documental. Não altere código-fonte, testes, configurações ou dependências.

## Caso a documentar

Durante a definição do escopo, a IA sugeriu inicialmente:

```text
Copiar a análise em Markdown
```

como principal evolução funcional.

Após revisão humana, foi identificado que essa sugestão representava uma melhoria útil de experiência do usuário, mas não possuía lógica de negócio suficiente para ser tratada como segunda funcionalidade principal.

O escopo foi refinado para incluir:

```text
Comparar duas ideias de negócio e retornar uma recomendação estruturada.
```

A cópia do resultado em Markdown foi preservada posteriormente como melhoria secundária.

## Regra de segurança

Antes de iniciar:

1. Execute:

   ```bash
   git branch --show-current
   git status --short
   ```
2. Confirme que a branch atual é:

   ```text
   docs/prompts-readme
   ```
3. Caso esteja em outra branch, interrompa a execução.
4. Não execute comandos destrutivos.
5. Não execute `git commit`.
6. Não execute `git push`.
7. Não altere arquivos fora do escopo autorizado.

## Contexto obrigatório

Leia:

* `docs/ESCOPO.md`;
* `docs/prompts/02-definicao-escopo.md`;
* `docs/prompts/04-geracao-codigo-ciclo-1.md`;
* `docs/prompts/06-refinamento-ciclo-3.md`;
* documentação existente relacionada ao escopo.

Use somente evidências reais presentes no repositório. Não invente fatos, decisões ou resultados.

## Arquivo principal

Crie ou atualize:

```text
docs/ANALISE-CRITICA.md
```

Use esta estrutura:

```md
# Análise crítica de uma saída gerada por IA

## 1. Contexto
Explique brevemente que a situação ocorreu durante a definição do escopo da evolução do IdeaCheck AI.

## 2. Saída inicial da IA
Registre que a sugestão inicial foi tratar “Copiar a análise em Markdown” como principal evolução funcional.

## 3. Problema identificado
Explique que a sugestão era útil como melhoria secundária, mas insuficiente como funcionalidade principal por não adicionar lógica de negócio relevante.

## 4. Impacto potencial
Explique que aceitar a sugestão sem revisão poderia resultar em um escopo tecnicamente fraco e pouco alinhado ao objetivo funcional do produto.

## 5. Intervenção humana
Descreva a decisão de:
- rejeitar a sugestão como funcionalidade principal;
- refinar o prompt;
- definir a comparação entre duas ideias como segunda funcionalidade principal;
- manter a cópia em Markdown apenas como melhoria secundária.

## 6. Resultado após refinamento
Explique objetivamente o novo fluxo:
- usuário informa duas ideias;
- sistema valida as entradas;
- sistema rejeita ideias vazias ou idênticas;
- modelo gera comparação estruturada;
- interface exibe recomendação, justificativa, vantagens, riscos e próximos passos.

## 7. Validação
Registre as evidências encontradas no repositório, incluindo:
- documentação do escopo refinado;
- implementação da comparação;
- registro do prompt de refinamento;
- implementação posterior da cópia em Markdown como melhoria secundária;
- testes relacionados, quando encontrados.

## 8. Lição aprendida
Explique que saídas geradas por IA devem ser avaliadas criticamente e que prompts de escopo precisam explicitar:
- tipo de funcionalidade esperada;
- necessidade de lógica de negócio;
- restrições;
- critérios de aceite.

## 9. Referências
Inclua referências para:
- `docs/ESCOPO.md`
- `docs/prompts/02-definicao-escopo.md`
- `docs/prompts/04-geracao-codigo-ciclo-1.md`
- `docs/prompts/06-refinamento-ciclo-3.md`
```

## Resposta gerada
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

## Arquivos criados ou alterados
- `docs/ANALISE-CRITICA.md`
- `docs/prompts/11-analise-critica.md`

## Metadados
- Branch: `docs/prompts-readme`
- Data e horário: `2026-06-07 21:53:09 -03`

## Revisão humana
Aguardando revisão.
