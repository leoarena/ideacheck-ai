# Prompt 08 — Testes automatizados

## Objetivo
Gerar e validar testes automatizados para os fluxos principais, entradas inválidas, casos limite e regressões.

## Prompt utilizado
Atue como desenvolvedor sênior especializado em testes automatizados para Next.js, React e TypeScript.

## Objetivo

Gerar e validar uma suíte de testes enxuta para os principais fluxos do IdeaCheck AI, cobrindo funcionalidades existentes, casos inválidos e regressões relevantes.

Priorize testes com valor real. Não crie testes redundantes ou excessivamente complexos.

## Regra de segurança

Antes de iniciar:

1. Execute:

   ```bash
   git branch --show-current
   git status --short
   ```
2. Confirme que a branch atual é:

   ```text
   feature/testes-automatizados
   ```
3. Caso esteja em outra branch, interrompa a execução.
4. Caso existam alterações não commitadas anteriores a esta tarefa, interrompa e liste os arquivos.
5. Não execute comandos destrutivos.
6. Não altere `main` ou `develop`.
7. Não execute `git commit`.
8. Não execute `git push`.
9. Não instale dependências, salvo necessidade estritamente comprovada.
10. Reutilize o framework de testes já configurado no projeto.

## Contexto obrigatório

Leia:

* `AGENTS.md`, caso exista;
* `package.json`;
* `README.md`;
* `docs/ESCOPO.md`;
* `docs/ARQUITETURA-M1S08.md`;
* `docs/REFATORACAO.md`;
* `docs/prompts/04-geracao-codigo-ciclo-1.md`;
* `docs/prompts/05-refinamento-ciclo-2.md`;
* `docs/prompts/06-refinamento-ciclo-3.md`;
* `docs/prompts/07-refatoracao.md`;
* arquivos relevantes em `app/`;
* arquivos relevantes em `components/`;
* arquivos relevantes em `lib/`;
* arquivos relevantes em `types/`;
* testes existentes.

Antes de editar:

1. identifique os testes existentes;
2. identifique as lacunas reais;
3. proponha uma lista curta de testes;
4. altere somente os arquivos necessários.

## Cenários mínimos obrigatórios

Garanta cobertura para:

### 1. Fluxo principal — análise individual

* entrada válida;
* saída estruturada;
* preservação do comportamento existente.

### 2. Fluxo principal — comparação de ideias

* duas ideias diferentes;
* saída estruturada;
* recomendação presente;
* vantagens, riscos e próximos passos presentes.

### 3. Entrada inválida

* uma das ideias vazia;
* mensagem ou erro esperado.

### 4. Caso limite

* duas ideias idênticas após normalização;
* comparação rejeitada.

Considere normalização como:

```text
remoção de espaços extras nas extremidades
comparação sem diferenciar maiúsculas e minúsculas
```

### 5. Regressão da refatoração

* `getRecommendedIdeaLabel("ideaA")` retorna `Ideia A`;
* `getRecommendedIdeaLabel("ideaB")` retorna `Ideia B`;
* `getRecommendedIdeaLabel("tie")` retorna `Empate`.

### 6. Cópia em Markdown

Caso a função de conversão seja isoladamente testável:

* análise individual gera Markdown legível;
* comparação gera Markdown legível;
* seções ausentes não geram títulos vazios.

## Estratégia

1. Reutilize o padrão dos testes existentes.
2. Prefira testes unitários e de integração simples.
3. Não configure E2E se o projeto ainda não possuir infraestrutura pronta.
4. Não use mocks desnecessários.
5. Não altere regras de negócio apenas para facilitar testes.
6. Não crie abstrações amplas.
7. Preserve os testes existentes.
8. Corrija somente falhas diretamente relacionadas aos cenários obrigatórios.

## Validação obrigatória

Após criar ou ajustar os testes:

1. execute:

   ```bash
   npm test
   ```
2. execute build, caso exista:

   ```bash
   npm run build
   ```
3. execute lint, caso exista script configurado:

   ```bash
   npm run lint
   ```
4. revise:

   ```bash
   git status --short
   git diff --stat
   git diff
   ```
5. informe objetivamente qualquer comando indisponível.

## Critérios de conclusão

Considere a tarefa concluída somente quando:

* os cenários relevantes estiverem cobertos;
* os testes existentes continuarem funcionando;
* os novos testes passarem;
* o build passar, quando disponível;
* o diff tiver sido revisado;
* o prompt e os resultados tiverem sido documentados;
* nenhuma alteração fora do escopo tiver sido introduzida.

## Registro obrigatório do prompt

Crie ou atualize:

```text
docs/prompts/08-testes.md
```

Use esta estrutura:

```md
# Prompt 08 — Testes automatizados

## Objetivo
Gerar e validar testes automatizados para os fluxos principais, entradas inválidas, casos limite e regressões.

## Prompt utilizado
Cole integralmente este prompt, sem resumir, omitir ou reformular trechos.

## Diagnóstico inicial
Liste os testes existentes e as lacunas identificadas.

## Plano apresentado
Liste os testes propostos antes da implementação.

## Resposta gerada
Cole integralmente o resumo final produzido após a implementação.

## Cenários cobertos
Tabela com:
- cenário;
- arquivo de teste;
- resultado.

## Arquivos criados ou alterados
Liste somente os arquivos realmente modificados.

## Comandos executados
Liste somente os comandos realmente executados.

## Resultados das validações
Registre testes, build e lint.

## Limitações
Liste testes adicionais que permaneceram fora do escopo.

## Metadados
- Branch:
- Data e horário:

## Revisão humana
Aguardando revisão.
```

## Resumo final obrigatório

Ao finalizar, responda em Markdown com:

```md
# Resultado dos testes automatizados

## Lacunas identificadas
Resumo objetivo.

## Testes adicionados ou ajustados
Lista de cenários.

## Arquivos alterados
Lista de arquivos.

## Validações executadas
Tabela com:
- comando;
- resultado;
- observação.

## Evidência registrada
Confirme a criação ou atualização de:
`docs/prompts/08-testes.md`

## Estado do repositório
Inclua a saída resumida de:
`git status --short`
```

Não execute `git commit` nem `git push`.

## Diagnóstico inicial
Testes existentes:

- `tests/components/IdeaForm.test.tsx`: renderização do formulário, bloqueio de ideia vazia, estado de loading, envio normalizado, exibição da análise e cópia em Markdown.
- `tests/components/ComparisonForm.test.tsx`: renderização do formulário de comparação, bloqueio de ideia vazia, bloqueio de ideias idênticas, envio normalizado, exibição parcial da comparação, cópia em Markdown e falha de cópia.
- `tests/app/analyze-route.test.ts`: erro 400 para ideia vazia e erro 503 para Ollama indisponível.
- `tests/app/compare-route.test.ts`: erro 400 para ideia vazia, erro 400 para ideias idênticas, erro 503 e sucesso estruturado da comparação.
- `tests/lib/comparison.test.ts`: parser comparativo e rejeição de recomendação inválida.
- `tests/lib/result-markdown.test.ts`: Markdown da análise, Markdown da comparação e omissão de seções vazias.
- `tests/lib/recommended-idea-label.test.ts`: regressão da refatoração para `ideaA`, `ideaB` e `tie`.

Lacunas identificadas:

- A rota `/api/analyze` não cobria sucesso com resposta estruturada.
- A rota `/api/analyze` não cobria rejeição de resposta incompleta do modelo.
- A exibição da comparação não verificava explicitamente recomendação, vantagens, riscos e próximos passos no mesmo teste.
- A normalização/equivalência de ideias era coberta indiretamente por UI/rota, mas não por teste unitário direto.

## Plano apresentado
- Ajustar `tests/app/analyze-route.test.ts` com sucesso estruturado e erro 500 para resposta incompleta.
- Reforçar `tests/components/ComparisonForm.test.tsx` com asserts explícitos de recomendação, vantagens, riscos e próximos passos.
- Criar `tests/lib/validation.test.ts` para normalização por `trim`, comparação case-insensitive e proteção contra entradas vazias/não string.
- Criar `docs/prompts/08-testes.md` com diagnóstico, plano, resultados e evidência do prompt.

## Resposta gerada
# Resultado dos testes automatizados

## Lacunas identificadas
A suíte já cobria os fluxos principais em componentes, comparação em rota, Markdown e regressão da refatoração. As lacunas reais eram a ausência de teste de sucesso estruturado em `/api/analyze`, ausência de teste para resposta incompleta do modelo nesse fluxo, cobertura pouco explícita da renderização completa da comparação e falta de teste unitário direto da normalização/equivalência de ideias.

## Testes adicionados ou ajustados
- Rota `/api/analyze` retorna análise estruturada para resposta válida do modelo.
- Rota `/api/analyze` retorna `500` quando a resposta do modelo não contém a estrutura mínima.
- Componente `ComparisonForm` confirma recomendação, vantagens, riscos e próximos passos exibidos.
- `normalizeIdeaInput` remove espaços nas extremidades e trata valores não textuais como vazio.
- `areIdeasEquivalent` compara ideias com `trim` e sem diferenciar maiúsculas/minúsculas, sem tratar entradas vazias como equivalentes.

## Arquivos alterados
- `tests/app/analyze-route.test.ts`
- `tests/components/ComparisonForm.test.tsx`
- `tests/lib/validation.test.ts`
- `docs/prompts/08-testes.md`

## Validações executadas
| comando | resultado | observação |
| --- | --- | --- |
| `npm test` | sucesso | 8 arquivos de teste e 33 testes aprovados. |
| `npm run build` | sucesso | Build do Next.js concluído com compilação e verificação de tipos. |
| `npm run lint` | não executado | Não há script `lint` no `package.json`. |
| `git diff --check` | sucesso | Sem problemas de whitespace. |
| `git status --short` | sucesso | Estado revisado ao final. |
| `git diff --stat` | sucesso | Diff estatístico revisado. |
| `git diff` | sucesso | Diff completo revisado. |
| `git diff --check` | sucesso | Sem problemas de whitespace. |
| `git status --short` | sucesso | Estado listado ao final. |
| `git diff --stat` | sucesso | Diff estatístico revisado. |
| `git diff` | sucesso | Diff completo revisado. |

## Evidência registrada
Criado `docs/prompts/08-testes.md`.

## Estado do repositório
```text
 M tests/app/analyze-route.test.ts
 M tests/components/ComparisonForm.test.tsx
?? docs/prompts/08-testes.md
?? tests/lib/validation.test.ts
```

## Cenários cobertos
| cenário | arquivo de teste | resultado |
| --- | --- | --- |
| Análise individual com entrada válida e saída estruturada | `tests/app/analyze-route.test.ts` | Coberto e aprovado. |
| Preservação do fluxo de análise individual na UI | `tests/components/IdeaForm.test.tsx` | Já coberto e aprovado. |
| Comparação com duas ideias diferentes e saída estruturada | `tests/app/compare-route.test.ts`, `tests/components/ComparisonForm.test.tsx` | Coberto e aprovado. |
| Recomendação, vantagens, riscos e próximos passos presentes na comparação | `tests/components/ComparisonForm.test.tsx` | Coberto e aprovado. |
| Uma das ideias vazia | `tests/app/compare-route.test.ts`, `tests/components/ComparisonForm.test.tsx` | Já coberto e aprovado. |
| Ideias idênticas após normalização | `tests/app/compare-route.test.ts`, `tests/components/ComparisonForm.test.tsx`, `tests/lib/validation.test.ts` | Coberto e aprovado. |
| Regressão de `getRecommendedIdeaLabel` | `tests/lib/recommended-idea-label.test.ts` | Já coberto e aprovado. |
| Markdown legível para análise individual | `tests/lib/result-markdown.test.ts` | Já coberto e aprovado. |
| Markdown legível para comparação | `tests/lib/result-markdown.test.ts` | Já coberto e aprovado. |
| Omissão de seções vazias no Markdown | `tests/lib/result-markdown.test.ts` | Já coberto e aprovado. |
| Resposta incompleta do modelo na análise individual | `tests/app/analyze-route.test.ts` | Coberto e aprovado. |

## Arquivos criados ou alterados
- `tests/app/analyze-route.test.ts`
- `tests/components/ComparisonForm.test.tsx`
- `tests/lib/validation.test.ts`
- `docs/prompts/08-testes.md`

## Comandos executados
- `git branch --show-current`
- `git status --short`
- `find . -maxdepth 1 -name AGENTS.md -print`
- `rg --files`
- `sed -n '1,220p' package.json`
- `sed -n '1,260p' README.md`
- `sed -n '1,300p' docs/ESCOPO.md`
- `sed -n '1,360p' docs/ARQUITETURA-M1S08.md`
- `sed -n '1,260p' docs/REFATORACAO.md`
- `sed -n '1,240p' docs/prompts/04-geracao-codigo-ciclo-1.md`
- `sed -n '1,300p' docs/prompts/05-refinamento-ciclo-2.md`
- `sed -n '1,340p' docs/prompts/06-refinamento-ciclo-3.md`
- `sed -n '1,520p' docs/prompts/07-refatoracao.md`
- Leituras com `sed -n` de arquivos relevantes em `app/`, `components/`, `lib/`, `types/` e `tests/`.
- `python3 - <<'PY' ... PY` para aplicar os testes, porque `apply_patch` foi bloqueado pelo sandbox com `bwrap: loopback: Failed RTM_NEWADDR: Operation not permitted`.
- `npm test`
- `npm run build`
- `date '+%Y-%m-%d %H:%M:%S %Z'`
- `python3 - <<'PY' ... PY` para criar `docs/prompts/08-testes.md`.
- `git diff --check`
- `git status --short`
- `git diff --stat`
- `git diff`
- `sed -n '1,260p' docs/prompts/08-testes.md`
- `sed -n '1,180p' tests/lib/validation.test.ts`

## Resultados das validações
| comando | resultado | observação |
| --- | --- | --- |
| `npm test` | sucesso | 8 arquivos de teste e 33 testes aprovados. |
| `npm run build` | sucesso | Build do Next.js concluído com compilação e verificação de tipos. |
| `npm run lint` | não executado | Não há script `lint` no `package.json`. |
| `git diff --check` | sucesso | Sem problemas de whitespace. |
| `git status --short` | sucesso | Estado revisado ao final. |
| `git diff --stat` | sucesso | Diff estatístico revisado. |
| `git diff` | sucesso | Diff completo revisado. |

## Limitações
- Não foi configurado E2E, porque o projeto não possui infraestrutura E2E pronta e os cenários obrigatórios foram cobertos com Vitest e React Testing Library.
- Não foi adicionado teste manual com Ollama, pois o escopo pedido prioriza testes automatizados e os testes de rota usam mock da integração existente.
- Não foi criada cobertura de relatório percentual, pois não há script de coverage configurado no projeto.

## Metadados
- Branch: `feature/testes-automatizados`
- Data e horário: `2026-06-07 20:33:08 -03`

## Revisão humana
Aguardando revisão.
