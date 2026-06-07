# Prompt 03 — Documentação de arquitetura

## Objetivo
Documentar arquitetura atual, evolução planejada, decisões técnicas e diagramas Mermaid.

## Prompt utilizado
````md
Atue como arquiteto de software sênior especializado em Next.js, React, TypeScript e integração com modelos de linguagem executados localmente.

## Objetivo

Documentar a arquitetura atual do IdeaCheck AI e a evolução planejada, registrando responsabilidades dos componentes, fluxo principal, decisões técnicas, justificativas e um diagrama Mermaid.

Esta etapa é exclusivamente de documentação. Não implemente funcionalidades, não refatore código e não altere configurações.

## Regra de segurança

Antes de iniciar:

1. Execute `git branch --show-current`.
2. Confirme que a branch atual é `feature/especificacao-arquitetura`.
3. Caso esteja em outra branch, interrompa a execução e informe o problema.
4. Execute `git status --short`.
5. Não execute comandos destrutivos.
6. Não instale dependências.
7. Não altere código-fonte.
8. Não altere arquivos de configuração.
9. Altere somente os arquivos autorizados nesta instrução.

## Contexto obrigatório

Leia:

* `README.md`
* `AGENTS.md`, caso exista
* `package.json`
* `docs/prompts/01-diagnostico-arquitetura.md`
* `docs/ESCOPO.md`
* arquivos relevantes em `app/`
* arquivos relevantes em `components/`
* arquivos relevantes em `lib/`
* arquivos relevantes em `types/`
* testes existentes
* documentação existente em `docs/`

Não presuma a existência de módulos que não estejam no repositório. Quando houver incerteza, registre explicitamente como hipótese.

## Arquitetura a documentar

Documente separadamente:

1. arquitetura atual;
2. arquitetura planejada após a evolução definida em `docs/ESCOPO.md`;
3. responsabilidades dos principais componentes;
4. fluxo da análise individual;
5. fluxo da comparação entre duas ideias;
6. integração com o modelo local;
7. contratos de entrada e saída;
8. validações esperadas;
9. tratamento de erros;
10. testes necessários;
11. riscos técnicos;
12. decisões técnicas e respectivas justificativas;
13. alternativas descartadas e motivos.

## Critérios de qualidade

A documentação deve:

* ser objetiva;
* refletir somente o que existe ou foi explicitamente planejado;
* separar estado atual de estado futuro;
* evitar descrições genéricas;
* indicar arquivos ou diretórios relacionados;
* explicar responsabilidades com clareza;
* explicitar trade-offs;
* evitar complexidade desnecessária;
* preservar o comportamento existente;
* registrar a menor evolução coerente com o produto.

## Formato obrigatório da documentação

Crie ou atualize:

```text
docs/ARQUITETURA-M1S08.md
```

Use esta estrutura:

```md
# Arquitetura do IdeaCheck AI

## 1. Visão geral
Resumo objetivo do produto e da arquitetura.

## 2. Arquitetura atual
Descrição dos componentes existentes e suas responsabilidades.

## 3. Fluxo atual — análise individual
Passo a passo desde a entrada do usuário até a exibição da resposta.

## 4. Evolução planejada — comparação de ideias
Descrição da nova funcionalidade e de como ela se integra à arquitetura existente.

## 5. Fluxo planejado — comparação de duas ideias
Passo a passo desde a entrada até a saída estruturada.

## 6. Componentes e responsabilidades
Tabela com:
- componente ou diretório;
- responsabilidade atual;
- responsabilidade planejada;
- observações.

## 7. Contratos de entrada e saída

### 7.1. Análise individual
- entrada;
- validações;
- saída estruturada;
- erros esperados.

### 7.2. Comparação de ideias
- entrada;
- validações;
- saída estruturada;
- erros esperados.

## 8. Diagrama de arquitetura
Inclua um diagrama Mermaid `flowchart` representando:
- usuário;
- interface;
- rota ou camada de aplicação;
- validação;
- construção de prompt;
- integração com modelo local;
- processamento da resposta;
- saída exibida.

## 9. Diagrama de sequência
Inclua um diagrama Mermaid `sequenceDiagram` para o fluxo de comparação de ideias.

## 10. Decisões técnicas
Tabela com:
- decisão;
- justificativa;
- benefício;
- trade-off;
- alternativa descartada.

## 11. Estratégia de testes
Liste os testes necessários para preservar o fluxo atual e validar a evolução planejada.

## 12. Riscos e mitigação
Tabela com:
- risco;
- impacto;
- mitigação.

## 13. Limites arquiteturais
Liste explicitamente o que não será incluído nesta evolução.

## 14. Referências
Inclua referências para:
- `docs/prompts/01-diagnostico-arquitetura.md`
- `docs/prompts/02-definicao-escopo.md`
- `docs/ESCOPO.md`
```

## Registro obrigatório do prompt

Crie ou atualize:

```text
docs/prompts/03-documentacao-arquitetura.md
```

Use esta estrutura:

```md
# Prompt 03 — Documentação de arquitetura

## Objetivo
Documentar arquitetura atual, evolução planejada, decisões técnicas e diagramas Mermaid.

## Prompt utilizado
Cole integralmente este prompt, sem resumir, omitir ou reformular trechos.

## Resposta gerada
Cole integralmente um resumo do conteúdo produzido e das principais decisões registradas.

## Arquivos gerados ou alterados
- `docs/ARQUITETURA-M1S08.md`
- `docs/prompts/03-documentacao-arquitetura.md`

## Metadados
- Branch analisada:
- Data e horário:
- Comandos executados:

## Revisão humana
Aguardando revisão.
```

## Validação final

Após criar os arquivos:

1. Execute `git status --short`.
2. Confirme que somente estes arquivos foram criados ou alterados:

   * `docs/ARQUITETURA-M1S08.md`
   * `docs/prompts/03-documentacao-arquitetura.md`
3. Caso outro arquivo tenha sido alterado, reverta essa alteração.
4. Verifique se os diagramas Mermaid possuem sintaxe válida.
5. Exiba um resumo curto contendo:

   * arquitetura atual;
   * evolução planejada;
   * principais decisões técnicas;
   * arquivos alterados;
   * riscos identificados.

Não implemente código nesta etapa.
````

## Resposta gerada
Foi criado `docs/ARQUITETURA-M1S08.md` com a documentação da arquitetura atual e da evolução planejada do IdeaCheck AI.

Resumo do conteúdo produzido e das principais decisões registradas:

- A arquitetura atual foi documentada como um monólito local em Next.js App Router, React, TypeScript e Tailwind CSS, com integração server-side com Ollama via `app/api/analyze/route.ts` e `lib/ollama.ts`.
- O fluxo atual de análise individual foi descrito de ponta a ponta: entrada em `IdeaForm`, normalização por `normalizeIdeaInput`, chamada a `/api/analyze`, construção do prompt, chamada ao Ollama, parsing em `BusinessIdeaAnalysis` e exibição em `AnalysisResult`.
- A evolução planejada foi documentada separadamente como comparação de duas ideias de negócio, deixando explícito que `app/api/compare/route.ts`, `ComparisonForm`, `ComparisonResult`, `lib/comparison-service.ts`, `lib/comparison.ts` e tipos de comparação ainda não existem e são hipóteses planejadas a partir de `docs/ESCOPO.md`.
- Foram definidos contratos atuais da análise individual e contratos planejados para comparação, incluindo `BusinessIdeaComparison` com resumo comparativo, recomendação, justificativa, vantagens, riscos, diferenças de público-alvo, próximos passos, notas/critérios e `rawText`.
- Foram registradas validações atuais e planejadas: JSON válido, ideia preenchida para análise individual, duas ideias preenchidas para comparação e bloqueio de ideias idênticas após normalização.
- Foram registrados erros esperados: `400` para entradas inválidas, `503` para Ollama indisponível e `500` para resposta inesperada ou fora da estrutura mínima.
- Foram incluídos dois diagramas Mermaid: um `flowchart TD` de arquitetura cobrindo análise individual e comparação planejada, e um `sequenceDiagram` para o fluxo de comparação de ideias.
- As principais decisões técnicas registradas foram preservar `/api/analyze`, criar fluxo separado para comparação, reutilizar `generateTextWithOllama`, manter prompt comparativo separado, definir contrato explícito de comparação, bloquear ideias idênticas antes de chamar o modelo, manter execução local com Ollama, não adicionar banco de dados e não priorizar cópia em Markdown.
- A estratégia de testes cobre preservação do fluxo atual e validação da evolução planejada, incluindo testes de componente, rota e parser comparativo.
- Os riscos documentados incluem fragilidade do parser textual, complexidade visual, duplicação entre análise e comparação, indisponibilidade do Ollama, ausência de timeout, recomendação interpretada como verdade definitiva e contratos planejados ainda inexistentes.
- Os limites arquiteturais reforçam que a evolução não inclui banco de dados, autenticação, histórico, deploy, link compartilhável, integrações externas, interface avançada, relatórios complexos, ranking em lote, pesquisa real de mercado, streaming ou substituição do fluxo individual.

## Arquivos gerados ou alterados
- `docs/ARQUITETURA-M1S08.md`
- `docs/prompts/03-documentacao-arquitetura.md`

## Metadados
- Branch analisada: `feature/especificacao-arquitetura`
- Data e horário: `2026-06-07 16:11:33 -03`
- Comandos executados:
  - `git branch --show-current`
  - `git status --short`
  - `sed -n '1,260p' README.md`
  - `test -f AGENTS.md`
  - `sed -n '1,220p' package.json`
  - `sed -n '1,360p' docs/ESCOPO.md`
  - `sed -n '1,360p' docs/prompts/01-diagnostico-arquitetura.md`
  - `sed -n '1,260p' docs/prompts/02-definicao-escopo.md`
  - `sed -n '1,240p' app/api/analyze/route.ts`
  - `sed -n '1,220p' app/page.tsx`
  - `sed -n '1,220p' app/layout.tsx`
  - `sed -n '1,260p' components/IdeaForm.tsx`
  - `sed -n '1,240p' components/AnalysisResult.tsx`
  - `sed -n '1,220p' components/IdeaTextarea.tsx`
  - `sed -n '1,180p' components/FormStatusMessage.tsx`
  - `find app components lib types tests docs -maxdepth 3 -type f -print`
  - `sed -n '1,260p' lib/analysis-service.ts`
  - `sed -n '1,300p' lib/analysis.ts`
  - `sed -n '1,260p' lib/ollama.ts`
  - `sed -n '1,300p' lib/api.ts`
  - `sed -n '1,260p' lib/prompts.ts`
  - `sed -n '1,260p' lib/messages.ts`
  - `sed -n '1,220p' lib/validation.ts`
  - `sed -n '1,260p' types/analyze.ts`
  - `sed -n '1,220p' types/ollama.ts`
  - `sed -n '1,120p' types/ui.ts`
  - `sed -n '1,320p' tests/app/analyze-route.test.ts`
  - `sed -n '1,340p' tests/components/IdeaForm.test.tsx`
  - `sed -n '1,260p' docs/ARQUITETURA.md`
  - `sed -n '1,220p' docs/FLUXOGRAMA.md`
  - `sed -n '1,320p' docs/PRD.md`
  - `date '+%Y-%m-%d %H:%M:%S %Z'`
  - `cat > docs/ARQUITETURA-M1S08.md`
  - `cat > docs/prompts/03-documentacao-arquitetura.md`
  - `git status --short`
  - `rg -n '```mermaid|flowchart TD|sequenceDiagram|^```$' docs/ARQUITETURA-M1S08.md`
  - `sed -n '220,310p' docs/ARQUITETURA-M1S08.md`

## Revisão humana
Aguardando revisão.
