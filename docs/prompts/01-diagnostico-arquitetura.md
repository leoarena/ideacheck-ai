# Prompt 01 — Diagnóstico arquitetural

## Objetivo
Analisar a arquitetura atual, identificar itens reaproveitáveis, lacunas e a menor evolução funcional recomendada.

## Prompt utilizado
````md
Atue como arquiteto de software sênior especializado em Next.js, React, TypeScript e integração com modelos de linguagem executados localmente.

## Objetivo

Analisar o estado atual do repositório IdeaCheck AI, identificar o que já existe, avaliar a organização técnica e registrar um diagnóstico arquitetural objetivo.

Esta etapa é exclusivamente de inspeção e documentação. Não implemente funcionalidades, não refatore código e não altere configurações do projeto.

## Regra de segurança

Antes de iniciar:

1. Execute `git branch --show-current`.
2. Confirme que a branch atual é `feature/especificacao-arquitetura`.
3. Caso esteja em outra branch, interrompa a execução e informe o problema.
4. Não execute comandos destrutivos.
5. Não instale dependências.
6. Não altere arquivos existentes.
7. A única alteração permitida é criar ou atualizar:
   `docs/prompts/01-diagnostico-arquitetura.md`

## Arquivos e diretórios a inspecionar

Analise, quando existirem:

* `README.md`
* `AGENTS.md`
* `package.json`
* `tsconfig.json`
* arquivos de configuração do Next.js
* `app/`
* `components/`
* `lib/`
* `types/`
* `tests/`
* `docs/`
* `.github/`
* `.env.example`
* `.gitignore`

Também execute comandos seguros de inspeção quando forem úteis, como:

```bash
git status --short
git log --oneline --decorate -n 10
find . -maxdepth 3 -type f | sort
```

Ignore diretórios gerados ou pesados, como:

```text
node_modules
.next
dist
coverage
.git
```

## Aspectos que devem ser analisados

Avalie:

1. arquitetura atual da aplicação;
2. responsabilidades dos principais módulos;
3. fluxo principal desde a entrada do usuário até a saída exibida;
4. integração com o modelo local;
5. formato das entradas e saídas;
6. regras de negócio existentes;
7. tratamento de erros;
8. validações;
9. tipos e contratos;
10. testes existentes;
11. scripts disponíveis no `package.json`;
12. documentação atual;
13. pipeline automatizado, caso exista;
14. qualidade da separação de responsabilidades;
15. riscos técnicos;
16. oportunidades de melhoria de baixo risco;
17. arquivos provavelmente envolvidos em uma futura evolução funcional.

## Formato obrigatório do diagnóstico

Produza uma resposta em Markdown com estas seções:

```md
# Diagnóstico arquitetural do IdeaCheck AI

## 1. Resumo executivo
Descrição objetiva do estado atual do projeto.

## 2. Stack identificada
Tecnologias, bibliotecas e ferramentas encontradas.

## 3. Arquitetura atual
Descrição dos módulos e suas responsabilidades.

## 4. Fluxo principal
Passo a passo desde a entrada do usuário até a apresentação do resultado.

## 5. Itens existentes e reaproveitáveis
Tabela com:
- item;
- evidência encontrada;
- arquivo ou diretório relacionado;
- observação.

## 6. Itens ausentes ou incompletos
Tabela com:
- item;
- situação encontrada;
- impacto;
- recomendação.

## 7. Testes e scripts disponíveis
Comandos existentes, cobertura aparente e lacunas.

## 8. Riscos técnicos
Lista priorizada com risco, impacto e mitigação sugerida.

## 9. Menor evolução funcional recomendada
Proponha apenas uma evolução pequena, coerente com o produto atual e com baixo risco técnico.

Inclua:
- problema resolvido;
- comportamento esperado;
- entrada;
- saída estruturada;
- arquivos provavelmente envolvidos;
- critérios de aceite;
- testes mínimos necessários.

## 10. Próximos passos sugeridos
Lista ordenada e objetiva, sem implementar alterações.

## 11. Comandos executados
Liste apenas os comandos realmente executados durante a inspeção.
```

## Registro obrigatório da evidência

Crie ou atualize o arquivo:

```text
docs/prompts/01-diagnostico-arquitetura.md
```

O arquivo deve conter exatamente esta estrutura:

```md
# Prompt 01 — Diagnóstico arquitetural

## Objetivo
Analisar a arquitetura atual, identificar itens reaproveitáveis, lacunas e a menor evolução funcional recomendada.

## Prompt utilizado
Cole integralmente este prompt, sem resumir, omitir ou reformular trechos.

## Resposta gerada
Cole integralmente o diagnóstico produzido.

## Metadados
- Branch analisada:
- Data e horário:
- Comandos executados:
- Arquivos alterados:

## Revisão humana
Aguardando revisão.
```

## Validação final

Após criar o arquivo:

1. Execute `git status --short`.
2. Confirme que apenas `docs/prompts/01-diagnostico-arquitetura.md` foi criado ou alterado.
3. Caso outro arquivo tenha sido modificado, reverta essa alteração.
4. Exiba um resumo curto contendo:

   * branch analisada;
   * arquivo criado ou atualizado;
   * arquivos alterados;
   * principal evolução funcional recomendada;
   * riscos mais relevantes.

Não implemente nenhuma alteração adicional.
````

## Resposta gerada
# Diagnóstico arquitetural do IdeaCheck AI

## 1. Resumo executivo
O IdeaCheck AI está em estado funcional de MVP local. O repositório contém uma aplicação Next.js com App Router, interface React em TypeScript, estilização com Tailwind CSS, rota local `/api/analyze`, integração real com Ollama em `http://localhost:11434/api/generate`, parsing da resposta do LLM e testes automatizados com Vitest e React Testing Library.

A separação de responsabilidades é adequada para o porte atual: componentes cuidam da experiência de usuário, a API route isola a chamada servidor, `lib/` concentra serviços, prompt, integração, parsing, mensagens e validação, e `types/` centraliza contratos. Os principais riscos estão na fragilidade do parsing textual da resposta do LLM, na dependência operacional do Ollama local sem timeout configurado, na ausência de pipeline automatizado e em lacunas de cobertura para cenários de sucesso e respostas inesperadas da rota.

## 2. Stack identificada
| Categoria | Itens identificados | Evidência |
| --- | --- | --- |
| Framework web | Next.js `^15.0.0` com App Router | `package.json`, `app/`, `app/api/analyze/route.ts` |
| UI | React `^19.0.0`, React DOM `^19.0.0` | `package.json`, `components/` |
| Linguagem | TypeScript `^5.7.0`, `strict: true` | `package.json`, `tsconfig.json` |
| Estilização | Tailwind CSS `^3.4.17`, PostCSS, Autoprefixer | `tailwind.config.ts`, `postcss.config.mjs`, `app/globals.css` |
| IA local | Ollama via API local `/api/generate`, modelo padrão `llama3.2:3b` | `lib/ollama.ts`, `README.md` |
| Testes | Vitest `^4.1.7`, React Testing Library, user-event, jsdom | `package.json`, `vitest.config.ts`, `tests/` |
| Documentação | README, PRD, arquitetura, fluxograma, registro de prompts | `README.md`, `docs/`, `prompts.md` |
| Automação de PR | Template de Pull Request | `.github/pull_request_template.md` |

Não foram encontrados `AGENTS.md`, `.env.example` ou workflow de CI em `.github/workflows`.

## 3. Arquitetura atual
A aplicação segue uma arquitetura monolítica local, adequada para um MVP com frontend e backend leve no mesmo projeto Next.js.

| Módulo | Responsabilidade atual |
| --- | --- |
| `app/page.tsx` | Página inicial, composição do layout principal e montagem do formulário. |
| `app/layout.tsx` | Metadados, idioma `pt-BR` e estrutura raiz da aplicação. |
| `app/api/analyze/route.ts` | Entrada HTTP server-side para análise; valida JSON, normaliza `idea`, chama o serviço de análise e traduz erros em respostas HTTP. |
| `components/IdeaForm.tsx` | Estado do formulário, validação client-side, chamada da API local, estados de loading/success/error e renderização do resultado. |
| `components/IdeaTextarea.tsx` | Campo de texto controlado para a ideia de negócio. |
| `components/FormStatusMessage.tsx` | Mensagens visuais de status do formulário. |
| `components/AnalysisResult.tsx` | Exibição das seis seções da análise e skeleton durante carregamento. |
| `lib/api.ts` | Cliente browser para `/api/analyze`, validação do formato da resposta e erro de API. |
| `lib/analysis-service.ts` | Orquestra prompt, chamada ao Ollama, parsing e validação mínima da análise. |
| `lib/ollama.ts` | Cliente do endpoint local do Ollama, seleção do modelo via `OLLAMA_MODEL` e mapeamento de indisponibilidade/resposta inesperada. |
| `lib/prompts.ts` | Construção do prompt em português com seções esperadas. |
| `lib/analysis.ts` | Parsing textual da resposta do LLM em campos estruturados e validação de seções mínimas. |
| `lib/messages.ts` | Mensagens compartilhadas de UI e API. |
| `lib/validation.ts` | Normalização simples da entrada `idea`. |
| `types/` | Contratos TypeScript de request/response, análise, Ollama e estado de UI. |
| `tests/` | Testes de comportamento do formulário e cenários básicos da rota. |
| `docs/` | Documentação de produto, arquitetura e fluxo; parte dela ainda se apresenta como planejamento inicial. |

A separação entre navegador e Ollama está correta: o frontend não chama o Ollama diretamente; ele chama `/api/analyze`, e a rota server-side encapsula a comunicação local com o modelo.

## 4. Fluxo principal
1. O usuário acessa a página inicial renderizada por `app/page.tsx`.
2. `IdeaForm` renderiza `IdeaTextarea`, mensagens de status e `AnalysisResult`.
3. O usuário digita uma ideia de negócio.
4. Ao submeter, `IdeaForm` executa `normalizeIdeaInput`.
5. Se a ideia estiver vazia após `trim`, a UI bloqueia o envio e mostra `uiMessages.emptyIdea`.
6. Se a ideia for válida, a UI entra em `loading` e chama `requestIdeaAnalysis`.
7. `requestIdeaAnalysis` envia `POST /api/analyze` com JSON `{ "idea": "<texto normalizado>" }`.
8. A rota `POST` em `app/api/analyze/route.ts` tenta ler `request.json()`.
9. JSON inválido retorna `400` com `apiMessages.invalidJson`.
10. JSON válido tem `idea` extraída e normalizada.
11. Ideia ausente ou vazia retorna `400` com `apiMessages.emptyIdea`.
12. Entrada válida segue para `analyzeBusinessIdea`.
13. `analyzeBusinessIdea` monta o prompt com `buildIdeaAnalysisPrompt`.
14. `generateTextWithOllama` envia `POST` para `http://localhost:11434/api/generate` com `{ model, prompt, stream: false }`.
15. O modelo padrão é `llama3.2:3b`, substituível por `OLLAMA_MODEL`.
16. A resposta textual do Ollama é processada por `parseBusinessIdeaAnalysis`.
17. O parser identifica seções por aliases textuais e preenche `BusinessIdeaAnalysis`.
18. `hasRequiredAnalysisSections` exige presença de `problemResolved`, `targetAudience`, `basicCompetition` e `attentionPoints`.
19. A API retorna `{ analysis }` em caso de sucesso.
20. `lib/api.ts` valida se a resposta contém todos os campos esperados, incluindo `nextSteps`, `viabilityScore` e `rawText`.
21. A UI exibe as seções em `AnalysisResult`.

Formato principal de entrada:

```json
{
  "idea": "Texto livre descrevendo uma ideia de negócio"
}
```

Formato principal de saída em sucesso:

```json
{
  "analysis": {
    "problemResolved": "string",
    "targetAudience": "string",
    "basicCompetition": "string",
    "attentionPoints": "string",
    "nextSteps": "string",
    "viabilityScore": "string",
    "rawText": "string"
  }
}
```

Formato principal de erro:

```json
{
  "error": "Mensagem em português"
}
```

## 5. Itens existentes e reaproveitáveis
| Item | Evidência encontrada | Arquivo ou diretório relacionado | Observação |
| --- | --- | --- | --- |
| Aplicação Next.js funcional | Página inicial e API route presentes | `app/page.tsx`, `app/api/analyze/route.ts` | Base suficiente para evoluções pequenas sem mudar arquitetura. |
| Interface de entrada | Textarea controlado e botão de submissão | `components/IdeaForm.tsx`, `components/IdeaTextarea.tsx` | Já normaliza entrada e controla loading/error/success. |
| Renderização estruturada | Seis seções fixas de análise | `components/AnalysisResult.tsx` | Reaproveitável para exportação, histórico ou comparação futura. |
| Cliente da API local | Chamada `fetch` para `/api/analyze` e validação de payload | `lib/api.ts` | Centraliza contrato browser/API. |
| API route local | Valida JSON, entrada e mapeia erros HTTP | `app/api/analyze/route.ts` | Bom ponto único para regras server-side. |
| Serviço de análise | Orquestra prompt, LLM, parser e validação | `lib/analysis-service.ts` | Mantém a rota fina e testável. |
| Integração com Ollama | Endpoint local, body tipado e erro específico | `lib/ollama.ts`, `types/ollama.ts` | Modelo configurável por `OLLAMA_MODEL`; URL ainda fixa. |
| Prompt centralizado | Prompt em português com seções esperadas | `lib/prompts.ts` | Permite evolução controlada do comportamento do LLM. |
| Parser textual | Aliases para títulos com e sem acentos | `lib/analysis.ts` | Útil no MVP, mas sensível a variações do LLM. |
| Tipos compartilhados | Contratos de request, response e análise | `types/analyze.ts` | Boa base para manter UI/API sincronizadas. |
| Mensagens centralizadas | Mensagens de UI e API em português | `lib/messages.ts` | Reduz duplicação e facilita ajustes. |
| Testes de UI | Renderização, validação, loading, chamada API e exibição | `tests/components/IdeaForm.test.tsx` | Cobre o fluxo principal no cliente. |
| Testes da rota | Entrada vazia e Ollama indisponível | `tests/app/analyze-route.test.ts` | Cobre parte dos erros críticos. |
| Documentação de produto | README, PRD, arquitetura, fluxograma e prompts | `README.md`, `docs/`, `prompts.md` | README está mais atualizado que documentos de planejamento. |
| Template de PR | Checklist avaliativo, IA e documentação | `.github/pull_request_template.md` | Ajuda governança manual de mudanças. |

## 6. Itens ausentes ou incompletos
| Item | Situação encontrada | Impacto | Recomendação |
| --- | --- | --- | --- |
| `.env.example` | Não existe | Usuário não tem exemplo versionado para `OLLAMA_MODEL` ou futura URL do Ollama | Criar exemplo quando houver próxima alteração de configuração. |
| Pipeline automatizado | Não há `.github/workflows` | Testes/build dependem de execução manual | Adicionar CI simples com `npm test` e, idealmente, build/typecheck. |
| Script de lint | Não existe em `package.json` | Menor proteção contra problemas de estilo e erros comuns | Adicionar apenas se o projeto incorporar ESLint de forma explícita. |
| Script de typecheck | Não existe comando dedicado | `tsc --noEmit` não está formalizado como verificação | Adicionar `typecheck` para separar validação TS de build. |
| Script de cobertura | README informa ausência; `package.json` não tem coverage | Difícil medir evolução da suíte | Adicionar cobertura quando testes crescerem. |
| Timeout da chamada ao Ollama | `fetch` não usa `AbortController` | Requisições podem ficar pendentes por tempo excessivo | Definir timeout server-side com erro claro. |
| URL do Ollama configurável | Endpoint está fixo em `lib/ollama.ts` | Ambientes com Ollama em outro host/porta exigem alteração de código | Permitir `OLLAMA_BASE_URL` em evolução futura. |
| Resposta estruturada do LLM | Parser depende de títulos textuais | Alto risco de falha por variação de formato | Evoluir para JSON instruído/validado ou schema interno. |
| Validação de entrada | Só aplica `trim` e exige não vazio | Ideias muito curtas ou vagas passam para o LLM | Adicionar validação de tamanho mínimo se o produto exigir qualidade mínima. |
| Teste de sucesso da rota | Não encontrado | A rota pode quebrar contrato de sucesso sem alerta direto | Adicionar teste de `200` com análise válida. |
| Teste de JSON inválido | Rota implementa, mas não há teste | Regressões em erro `400` podem passar despercebidas | Cobrir payload inválido. |
| Teste de resposta inesperada do LLM | Parcialmente tratado, mas sem cobertura direta | Parser/serviço podem degradar sem detecção | Testar `InvalidAnalysisFormatError` e API `500`. |
| Documentos de arquitetura/fluxograma | Ainda indicam "Planejamento técnico inicial" e algumas seções antigas | Documentação técnica pode divergir do estado implementado | Atualizar em etapa própria para refletir o código atual. |
| `AGENTS.md` | Não existe | Sem instruções locais para agentes automatizados | Criar apenas se o time for usar convenções operacionais específicas. |

## 7. Testes e scripts disponíveis
Scripts encontrados em `package.json`:

| Script | Comando | Observação |
| --- | --- | --- |
| `dev` | `next dev` | Execução local em desenvolvimento. |
| `build` | `next build` | Build de produção disponível, não executado nesta inspeção. |
| `start` | `next start` | Execução após build. |
| `test` | `vitest run` | Suíte automatizada em modo run. |
| `test:watch` | `vitest` | Suíte em modo observação. |

Resultado observado de `npm test`:

```text
Test Files  2 passed (2)
Tests       7 passed (7)
```

Cobertura aparente:

- `tests/components/IdeaForm.test.tsx` cobre renderização, bloqueio de ideia vazia, loading, chamada à API com texto normalizado e exibição da análise.
- `tests/app/analyze-route.test.ts` cobre ideia vazia e indisponibilidade do Ollama com mock.

Lacunas relevantes:

- Não há cobertura de métrica configurada.
- Não há teste direto de sucesso da API route.
- Não há teste de JSON inválido.
- Não há teste do parser com variações reais de resposta do LLM.
- Não há teste de erro para resposta inesperada do Ollama ou análise incompleta.
- Não há CI identificado para executar testes automaticamente em PR.

## 8. Riscos técnicos
1. **Parsing textual frágil da resposta do LLM**
   - Impacto: respostas válidas semanticamente podem ser rejeitadas se o modelo alterar títulos, ordem ou formato.
   - Mitigação: orientar saída em JSON e validar contrato antes de exibir, ou fortalecer testes do parser com amostras variadas.

2. **Dependência operacional do Ollama local**
   - Impacto: aplicação não entrega valor se o serviço, modelo ou porta local não estiverem disponíveis.
   - Mitigação: manter mensagens claras, documentar variáveis de ambiente e adicionar diagnóstico de configuração.

3. **Ausência de timeout na chamada server-side ao Ollama**
   - Impacto: usuário pode ficar preso em loading em máquinas lentas ou serviço travado.
   - Mitigação: usar `AbortController` com limite explícito e mensagem de timeout.

4. **Contratos runtime ainda manuais**
   - Impacto: TypeScript protege compilação, mas payloads externos dependem de validações manuais incompletas.
   - Mitigação: centralizar validadores e ampliar testes de contrato.

5. **Documentação técnica parcialmente defasada**
   - Impacto: `docs/ARQUITETURA.md` e `docs/FLUXOGRAMA.md` podem induzir leitura de planejamento, não implementação atual.
   - Mitigação: atualizar documentação técnica em etapa separada, baseada no código inspecionado.

6. **Pipeline automatizado ausente**
   - Impacto: regressões podem entrar sem execução padronizada de testes.
   - Mitigação: criar workflow de CI com `npm test` e, posteriormente, build/typecheck.

7. **Validação de qualidade da ideia limitada**
   - Impacto: entradas muito curtas podem gerar análises pobres ou genéricas.
   - Mitigação: adicionar critérios simples de qualidade quando houver evidência de necessidade.

## 9. Menor evolução funcional recomendada
**Evolução recomendada:** permitir copiar ou exportar a análise gerada em Markdown.

Problema resolvido:

- Hoje a análise aparece na tela, mas não há forma estruturada de reaproveitar o resultado fora da aplicação. Como não existe histórico ou persistência, o usuário perde praticidade para salvar, revisar ou compartilhar a análise.

Comportamento esperado:

- Após uma análise bem-sucedida, a interface deve exibir uma ação discreta para copiar a análise em Markdown.
- Antes de existir análise, a ação não deve aparecer ou deve estar indisponível.
- A exportação deve ser determinística e baseada apenas no objeto `BusinessIdeaAnalysis` já retornado pela API.
- A integração com Ollama não deve ser alterada.

Entrada:

```ts
BusinessIdeaAnalysis
```

Saída estruturada:

```md
# Análise da ideia

## Problema que resolve
...

## Público-alvo
...

## Concorrência básica
...

## Pontos de atenção
...

## Próximos passos sugeridos
...

## Nota inicial de viabilidade
...
```

Arquivos provavelmente envolvidos:

| Arquivo | Motivo |
| --- | --- |
| `components/AnalysisResult.tsx` | Adicionar ação de cópia/exportação quando houver análise. |
| `lib/analysis-export.ts` | Criar função pura para transformar `BusinessIdeaAnalysis` em Markdown. |
| `types/analyze.ts` | Provavelmente sem mudança; apenas reaproveitar o contrato existente. |
| `tests/components/IdeaForm.test.tsx` ou novo teste de componente | Validar presença da ação após sucesso. |
| `tests/lib/analysis-export.test.ts` | Testar geração determinística do Markdown. |

Critérios de aceite:

- Dada uma análise retornada com sucesso, a UI oferece uma ação para copiar/exportar Markdown.
- O Markdown contém as seis seções atualmente exibidas.
- Campos vazios, se ocorrerem, recebem texto substituto consistente ou são mantidos como string vazia de forma previsível.
- A funcionalidade não faz nova chamada ao Ollama.
- O fluxo atual de análise continua passando nos testes existentes.

Testes mínimos necessários:

- Teste unitário da função que converte `BusinessIdeaAnalysis` em Markdown.
- Teste de componente verificando que a ação só aparece após análise existente.
- Teste de componente simulando clique e confirmando que o conteúdo enviado ao clipboard contém as seções esperadas, usando mock de `navigator.clipboard`.

## 10. Próximos passos sugeridos
1. Atualizar, em etapa separada, `docs/ARQUITETURA.md` e `docs/FLUXOGRAMA.md` para refletirem o estado implementado, não apenas planejamento.
2. Adicionar testes para sucesso da rota `/api/analyze`, JSON inválido e resposta incompleta do LLM.
3. Fortalecer o contrato da resposta do LLM, preferencialmente migrando para saída JSON validável.
4. Adicionar timeout na chamada ao Ollama e cobrir esse caso com teste.
5. Criar `.env.example` quando houver decisão de expor variáveis como `OLLAMA_MODEL` e possível `OLLAMA_BASE_URL`.
6. Adicionar pipeline mínimo de CI para executar `npm test`.
7. Implementar a menor evolução recomendada apenas após revisão humana deste diagnóstico.

## 11. Comandos executados
```bash
git branch --show-current
git status --short
git log --oneline --decorate -n 10
find . -path './node_modules' -prune -o -path './.next' -prune -o -path './dist' -prune -o -path './coverage' -prune -o -path './.git' -prune -o -maxdepth 3 -type f -print | sort
sed -n '1,260p' README.md
sed -n '1,240p' package.json
sed -n '1,220p' tsconfig.json
sed -n '1,220p' next.config.ts
sed -n '1,220p' tailwind.config.ts
sed -n '1,220p' vitest.config.ts
sed -n '1,220p' .gitignore
sed -n '1,220p' .github/pull_request_template.md
rg --files -g '!node_modules' -g '!.next' -g '!dist' -g '!coverage' -g '!.git'
sed -n '1,240p' app/api/analyze/route.ts
sed -n '1,220p' app/page.tsx
sed -n '1,220p' app/layout.tsx
sed -n '1,260p' components/IdeaForm.tsx
sed -n '1,240p' components/AnalysisResult.tsx
sed -n '1,220p' components/IdeaTextarea.tsx
sed -n '1,220p' components/FormStatusMessage.tsx
sed -n '1,260p' lib/analysis-service.ts
sed -n '1,260p' lib/analysis.ts
sed -n '1,260p' lib/ollama.ts
sed -n '1,260p' lib/api.ts
sed -n '1,260p' lib/prompts.ts
sed -n '1,260p' lib/messages.ts
sed -n '1,220p' lib/validation.ts
sed -n '1,240p' types/analyze.ts
sed -n '1,220p' types/ollama.ts
sed -n '1,220p' types/ui.ts
sed -n '1,320p' tests/app/analyze-route.test.ts
sed -n '1,320p' tests/components/IdeaForm.test.tsx
sed -n '1,220p' vitest.setup.ts
sed -n '1,260p' app/globals.css
sed -n '1,220p' postcss.config.mjs
sed -n '1,260p' prompts.md
sed -n '1,320p' docs/ARQUITETURA.md
sed -n '1,320p' docs/FLUXOGRAMA.md
sed -n '1,360p' docs/PRD.md
find docs -maxdepth 3 -type f -print | sort
find .github -maxdepth 3 -type f -print | sort
find app -maxdepth 4 -type f -print | sort
test -f AGENTS.md
test -f .env.example
npm test
date '+%Y-%m-%d %H:%M:%S %Z'
```

## Metadados
- Branch analisada: `feature/especificacao-arquitetura`
- Data e horário: `2026-06-07 14:44:47 -03`
- Comandos executados:
  - `git branch --show-current`
  - `git status --short`
  - `git log --oneline --decorate -n 10`
  - `find . -path './node_modules' -prune -o -path './.next' -prune -o -path './dist' -prune -o -path './coverage' -prune -o -path './.git' -prune -o -maxdepth 3 -type f -print | sort`
  - `sed -n '1,260p' README.md`
  - `sed -n '1,240p' package.json`
  - `sed -n '1,220p' tsconfig.json`
  - `sed -n '1,220p' next.config.ts`
  - `sed -n '1,220p' tailwind.config.ts`
  - `sed -n '1,220p' vitest.config.ts`
  - `sed -n '1,220p' .gitignore`
  - `sed -n '1,220p' .github/pull_request_template.md`
  - `rg --files -g '!node_modules' -g '!.next' -g '!dist' -g '!coverage' -g '!.git'`
  - `sed -n '1,240p' app/api/analyze/route.ts`
  - `sed -n '1,220p' app/page.tsx`
  - `sed -n '1,220p' app/layout.tsx`
  - `sed -n '1,260p' components/IdeaForm.tsx`
  - `sed -n '1,240p' components/AnalysisResult.tsx`
  - `sed -n '1,220p' components/IdeaTextarea.tsx`
  - `sed -n '1,220p' components/FormStatusMessage.tsx`
  - `sed -n '1,260p' lib/analysis-service.ts`
  - `sed -n '1,260p' lib/analysis.ts`
  - `sed -n '1,260p' lib/ollama.ts`
  - `sed -n '1,260p' lib/api.ts`
  - `sed -n '1,260p' lib/prompts.ts`
  - `sed -n '1,260p' lib/messages.ts`
  - `sed -n '1,220p' lib/validation.ts`
  - `sed -n '1,240p' types/analyze.ts`
  - `sed -n '1,220p' types/ollama.ts`
  - `sed -n '1,220p' types/ui.ts`
  - `sed -n '1,320p' tests/app/analyze-route.test.ts`
  - `sed -n '1,320p' tests/components/IdeaForm.test.tsx`
  - `sed -n '1,220p' vitest.setup.ts`
  - `sed -n '1,260p' app/globals.css`
  - `sed -n '1,220p' postcss.config.mjs`
  - `sed -n '1,260p' prompts.md`
  - `sed -n '1,320p' docs/ARQUITETURA.md`
  - `sed -n '1,320p' docs/FLUXOGRAMA.md`
  - `sed -n '1,360p' docs/PRD.md`
  - `find docs -maxdepth 3 -type f -print | sort`
  - `find .github -maxdepth 3 -type f -print | sort`
  - `find app -maxdepth 4 -type f -print | sort`
  - `test -f AGENTS.md`
  - `test -f .env.example`
  - `npm test`
  - `date '+%Y-%m-%d %H:%M:%S %Z'`
- Arquivos alterados: `docs/prompts/01-diagnostico-arquitetura.md`

## Revisão humana
Aguardando revisão.
