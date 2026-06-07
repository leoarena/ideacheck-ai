# Prompt 07 — Refatoração com Clean Code ou SOLID

## Objetivo
Melhorar a organização interna do código sem alterar o comportamento funcional.

## Prompt utilizado
Atue como desenvolvedor de software sênior especializado em Next.js, React, TypeScript, Clean Code e princípios SOLID.

## Objetivo

Realizar uma refatoração pequena, segura e justificável no IdeaCheck AI, melhorando a organização interna do código sem alterar o comportamento funcional da aplicação.

A refatoração deve ser baseada em um problema técnico real encontrado no código atual, como:

* responsabilidade excessiva em um componente ou módulo;
* duplicação de lógica;
* formatação misturada com renderização;
* função longa;
* nomes pouco claros;
* validação espalhada;
* acoplamento desnecessário;
* dificuldade de teste isolado.

Não faça refatorações amplas. Escolha apenas uma melhoria com baixo risco e benefício técnico claro.

## Regra de segurança

Antes de iniciar:

1. Execute:

   ```bash
   git branch --show-current
   git status --short
   ```
2. Confirme que a branch atual é:

   ```text
   feature/refatoracao-ia
   ```
3. Caso esteja em outra branch, interrompa a execução e informe o problema.
4. Caso existam alterações não commitadas anteriores a esta tarefa, interrompa e liste os arquivos.
5. Não execute comandos destrutivos.
6. Não altere `main` ou `develop`.
7. Não execute `git commit`.
8. Não execute `git push`.
9. Não instale dependências.
10. Não adicione novas funcionalidades.
11. Não altere textos visíveis ao usuário, salvo necessidade estritamente técnica.
12. Não altere contratos públicos sem justificativa e confirmação prévia.

## Contexto obrigatório

Leia:

* `AGENTS.md`, caso exista;
* `README.md`;
* `package.json`;
* `docs/ESCOPO.md`;
* `docs/ARQUITETURA-M1S08.md`;
* `docs/prompts/04-geracao-codigo-ciclo-1.md`;
* `docs/prompts/05-refinamento-ciclo-2.md`;
* `docs/prompts/06-refinamento-ciclo-3.md`;
* arquivos relevantes em `app/`;
* arquivos relevantes em `components/`;
* arquivos relevantes em `lib/`;
* arquivos relevantes em `types/`;
* testes existentes.

Inspecione principalmente os arquivos modificados durante os três ciclos anteriores.

## Processo obrigatório

### Etapa 1 — diagnóstico técnico

Antes de editar:

1. identifique no máximo três candidatos de refatoração;
2. apresente uma tabela com:

   * problema encontrado;
   * arquivo relacionado;
   * princípio aplicável;
   * benefício esperado;
   * risco;
   * decisão;
3. escolha somente um candidato;
4. justifique por que ele é o menor ajuste útil e seguro;
5. informe os arquivos que pretende alterar.

### Etapa 2 — registro do estado anterior

Antes da alteração:

1. registre o problema técnico;
2. copie os trechos relevantes do código anterior;
3. explique o impacto do problema;
4. indique o princípio adotado.

Prefira aplicar um destes critérios:

```text
Clean Code — separação de responsabilidades
SOLID — Single Responsibility Principle
Clean Code — remoção de duplicação
Clean Code — extração de função
Clean Code — melhoria de legibilidade
```

### Etapa 3 — implementação

Implemente apenas a refatoração escolhida.

Priorize:

* alteração localizada;
* nomes claros;
* funções pequenas;
* responsabilidade única;
* baixo acoplamento;
* reaproveitamento de tipos existentes;
* comportamento preservado;
* código testável;
* diff pequeno e revisável.

Evite:

* abstrações genéricas sem necessidade real;
* novas camadas arquiteturais;
* alterações visuais;
* novas funcionalidades;
* dependências adicionais;
* alterações em arquivos não relacionados;
* refatorações oportunistas fora do escopo.

### Etapa 4 — validação

Após implementar:

1. execute os testes existentes;
2. execute lint, caso exista;
3. execute build, caso exista;
4. revise o diff;
5. confirme que o comportamento funcional foi preservado;
6. execute:

   ```bash
   git status --short
   git diff --stat
   git diff
   ```

Não invente scripts ausentes. Caso algum comando não esteja disponível, registre isso objetivamente.

## Critérios de conclusão

Considere esta tarefa concluída somente quando:

* um problema técnico real tiver sido identificado;
* um princípio de Clean Code ou SOLID tiver sido explicitamente aplicado;
* a refatoração tiver sido implementada;
* o comportamento funcional tiver sido preservado;
* os testes existentes tiverem sido executados;
* lint e build tiverem sido executados quando disponíveis;
* o estado anterior e posterior tiver sido documentado;
* o prompt utilizado tiver sido registrado;
* o diff tiver sido revisado;
* não existirem alterações fora do escopo.

## Documentação obrigatória da refatoração

Crie ou atualize:

```text
docs/REFATORACAO.md
```

Use esta estrutura:

```md
# Refatoração documentada

## 1. Contexto
Descreva brevemente o módulo analisado.

## 2. Problema técnico identificado
Explique o problema real encontrado.

## 3. Princípio aplicado
Informe o critério utilizado:
- Clean Code; ou
- princípio SOLID específico.

## 4. Justificativa
Explique por que a refatoração foi necessária e por que a solução escolhida é proporcional ao problema.

## 5. Estado anterior
Inclua os trechos relevantes antes da refatoração.

## 6. Estado posterior
Inclua os trechos relevantes após da refatoração.

## 7. Comparativo antes e depois
Tabela com:
- aspecto;
- antes;
- depois;
- benefício.

## 8. Arquivos alterados
Liste somente os arquivos realmente modificados.

## 9. Validação
Tabela com:
- comando;
- resultado;
- observação.

## 10. Avaliação do resultado
Explique se o comportamento foi preservado e quais melhorias foram obtidas.

## 11. Limitações
Registre melhorias adicionais que permaneceram fora do escopo.
```

## Registro obrigatório do prompt

Crie ou atualize:

```text
docs/prompts/07-refatoracao.md
```

Use esta estrutura:

```md
# Prompt 07 — Refatoração com Clean Code ou SOLID

## Objetivo
Melhorar a organização interna do código sem alterar o comportamento funcional.

## Prompt utilizado
Cole integralmente este prompt, sem resumir, omitir ou reformular trechos.

## Diagnóstico apresentado
Registre os candidatos analisados e a refatoração escolhida.

## Plano apresentado
Registre o plano proposto antes da alteração.

## Resposta gerada
Cole integralmente o resumo final produzido após a refatoração.

## Princípio aplicado
Informe o princípio de Clean Code ou SOLID utilizado.

## Arquivos criados ou alterados
Liste somente os arquivos realmente modificados.

## Comandos executados
Liste somente os comandos realmente executados.

## Resultados das validações
Registre testes, lint e build.

## Metadados
- Branch:
- Data e horário:

## Revisão humana
Aguardando revisão.
```

## Resumo final obrigatório

Ao finalizar, responda em Markdown com:

```md
# Resultado da refatoração

## Problema identificado
Resumo objetivo.

## Refatoração escolhida
Descrição objetiva.

## Princípio aplicado
Clean Code ou princípio SOLID utilizado.

## Arquivos alterados
Lista de arquivos.

## Comparativo
Resumo do estado anterior e posterior.

## Validações executadas
Tabela com:
- comando;
- resultado;
- observação.

## Evidências registradas
Confirme a criação ou atualização de:
- `docs/REFATORACAO.md`
- `docs/prompts/07-refatoracao.md`

## Estado do repositório
Inclua a saída resumida de:
`git status --short`
```

Não execute `git commit` nem `git push`.Objetivo

Melhorar a organização interna do código sem alterar o comportamento funcional.

Escopo

Selecionar uma melhoria pequena, como separação de responsabilidades, remoção de duplicação ou extração de função.

Critérios de conclusão

Problema técnico identificado.

Princípio aplicado explicado.

Refatoração implementada.

Comportamento existente preservado.

Prompt salvo em docs/prompts/07-refatoracao.md.

Branch

feature/refatoracao-ia

## Diagnóstico apresentado
| problema encontrado | arquivo relacionado | princípio aplicável | benefício esperado | risco | decisão |
| --- | --- | --- | --- | --- | --- |
| O mapeamento `RecommendedIdea -> "Ideia A" / "Ideia B" / "Empate"` está duplicado na UI e na formatação Markdown. | `components/ComparisonResult.tsx`, `lib/result-markdown.ts` | Clean Code — remoção de duplicação | Uma única fonte para o rótulo da recomendação, evitando divergência entre resultado exibido e resultado copiado. | Baixo: função pura, sem alterar contrato ou texto visível. | Escolhido |
| A função `renderContent` com o mesmo fallback aparece em dois componentes de resultado. | `components/AnalysisResult.tsx`, `components/ComparisonResult.tsx` | Clean Code — remoção de duplicação | Reduz repetição de fallback de seção ausente. | Baixo, mas benefício menor e mais cosmético. | Não escolhido |
| O cliente de API repete fluxo de `fetch`, parsing de JSON e fallback de erro para análise e comparação. | `lib/api.ts` | Clean Code — extração de função | Reduz duplicação em chamadas HTTP. | Médio: pode afetar tratamento de erro e mensagens de dois fluxos. | Não escolhido |

Refatoração escolhida: extrair o rótulo de `RecommendedIdea` para uma função pequena e testável em `lib/`.

## Plano apresentado
- Criar `lib/recommended-idea-label.ts` com `getRecommendedIdeaLabel`, reaproveitando o tipo `RecommendedIdea`.
- Substituir os mapas duplicados em `components/ComparisonResult.tsx` e `lib/result-markdown.ts` pela nova função.
- Adicionar um teste unitário pequeno para os três rótulos possíveis.
- Documentar estado anterior e posterior em `docs/REFATORACAO.md`.
- Registrar o prompt e a evidência em `docs/prompts/07-refatoracao.md`.
- Executar testes, build, verificar ausência de lint, revisar status e diff.

## Resposta gerada
# Resultado da refatoração

## Problema identificado
O rótulo da recomendação de comparação (`ideaA`, `ideaB`, `tie`) estava duplicado em `components/ComparisonResult.tsx` e `lib/result-markdown.ts`, criando risco de divergência entre o resultado exibido e o Markdown copiado.

## Refatoração escolhida
Foi criado `getRecommendedIdeaLabel` em `lib/recommended-idea-label.ts` e os dois consumidores passaram a usar essa função única.

## Princípio aplicado
Clean Code — remoção de duplicação.

## Arquivos alterados
- `components/ComparisonResult.tsx`
- `lib/result-markdown.ts`
- `lib/recommended-idea-label.ts`
- `tests/lib/recommended-idea-label.test.ts`
- `docs/REFATORACAO.md`
- `docs/prompts/07-refatoracao.md`

## Comparativo
Antes, os rótulos `Ideia A`, `Ideia B` e `Empate` eram mantidos em dois mapas separados. Depois, a UI e a formatação Markdown usam a mesma função de domínio, preservando os textos e reduzindo o risco de inconsistência.

## Validações executadas
| comando | resultado | observação |
| --- | --- | --- |
| `npm test` | sucesso | 7 arquivos de teste e 27 testes aprovados. |
| `npm run build` | sucesso | Next.js compilou com verificação de tipos e rotas. |
| `npm run lint` | não executado | Não há script `lint` no `package.json`. |
| `git diff --check` | sucesso | Nenhum problema de whitespace reportado. |
| `git status --short` | sucesso | Estado listado ao final. |
| `git diff --stat` | sucesso | Diff estatístico revisado. |
| `git diff` | sucesso | Diff completo revisado. |

## Evidências registradas
- `docs/REFATORACAO.md` criado.
- `docs/prompts/07-refatoracao.md` criado.

## Estado do repositório
```text
 M components/ComparisonResult.tsx
 M lib/result-markdown.ts
?? docs/REFATORACAO.md
?? docs/prompts/07-refatoracao.md
?? lib/recommended-idea-label.ts
?? tests/lib/recommended-idea-label.test.ts
```

## Princípio aplicado
Clean Code — remoção de duplicação.

## Arquivos criados ou alterados
- `components/ComparisonResult.tsx`
- `lib/result-markdown.ts`
- `lib/recommended-idea-label.ts`
- `tests/lib/recommended-idea-label.test.ts`
- `docs/REFATORACAO.md`
- `docs/prompts/07-refatoracao.md`

## Comandos executados
- `git branch --show-current`
- `git status --short`
- `rg --files`
- `find . -maxdepth 1 -name AGENTS.md -print`
- Leituras com `sed -n` de README, `package.json`, docs obrigatórios, arquivos relevantes em `app/`, `components/`, `lib/`, `types/` e `tests/`.
- `wc -l docs/prompts/06-refinamento-ciclo-3.md`
- `python3 - <<'PY' ... PY` para aplicar a refatoração, porque `apply_patch` foi bloqueado pelo sandbox com `bwrap: loopback: Failed RTM_NEWADDR: Operation not permitted`.
- `npm test`
- `npm run build`
- `date '+%Y-%m-%d %H:%M:%S %Z'`
- `python3 - <<'PY' ... PY` para criar a documentação obrigatória, pelo mesmo bloqueio do `apply_patch`.
- `git diff --check`
- `git status --short`
- `git diff --stat`
- `git diff`

## Resultados das validações
| comando | resultado | observação |
| --- | --- | --- |
| `npm test` | sucesso | 7 arquivos de teste e 27 testes aprovados. |
| `npm run build` | sucesso | Build do Next.js concluído com compilação e verificação de tipos. |
| `npm run lint` | não executado | Não há script `lint` no `package.json`. |
| `git diff --check` | sucesso | Nenhum problema de whitespace reportado. |
| `git status --short` | sucesso | Estado listado no resumo final. |
| `git diff --stat` | sucesso | Diff estatístico revisado. |
| `git diff` | sucesso | Diff completo revisado. |

## Metadados
- Branch: `feature/refatoracao-ia`
- Data e horário: `2026-06-07 19:54:37 -03`

## Revisão humana
Aguardando revisão.
