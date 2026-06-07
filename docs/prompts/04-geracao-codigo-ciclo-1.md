# Prompt 04 — Geração de código: ciclo 1

## Objetivo
Implementar a primeira versão funcional da comparação entre duas ideias de negócio, preservando a análise individual existente.

## Prompt utilizado
Atue como desenvolvedor de software sênior especializado em Next.js, React, TypeScript, integração com modelos locais e desenvolvimento incremental orientado a baixo risco.

## Objetivo

Implementar a primeira versão funcional da comparação entre duas ideias de negócio no IdeaCheck AI.

A funcionalidade existente de análise individual deve continuar funcionando sem alterações de comportamento.

Este é o primeiro ciclo de implementação. Priorize uma solução pequena, legível e funcional. Não antecipe refatorações amplas ou melhorias que possam ser realizadas em ciclos posteriores.

## Regra de segurança

Antes de iniciar:

1. Execute:

   ```bash
   git branch --show-current
   git status --short
   ```
2. Confirme que a branch atual é:

   ```text
   feature/geracao-codigo-ia
   ```
3. Caso esteja em outra branch, interrompa a execução e informe o problema.
4. Caso existam alterações não commitadas anteriores a esta tarefa, interrompa a execução e liste os arquivos.
5. Não execute comandos destrutivos.
6. Não altere a branch `main`.
7. Não altere a branch `develop`.
8. Não execute `git commit`.
9. Não execute `git push`.
10. Não instale dependências sem necessidade comprovada e justificativa explícita.
11. Não implemente funcionalidades fora do escopo definido abaixo.

## Contexto obrigatório

Leia integralmente:

* `AGENTS.md`, caso exista;
* `README.md`;
* `package.json`;
* `docs/ESCOPO.md`;
* `docs/ARQUITETURA-M1S08.md`;
* `docs/prompts/01-diagnostico-arquitetura.md`;
* `docs/prompts/02-definicao-escopo.md`;
* `docs/prompts/03-documentacao-arquitetura.md`;
* arquivos relevantes em `app/`;
* arquivos relevantes em `components/`;
* arquivos relevantes em `lib/`;
* arquivos relevantes em `types/`;
* testes existentes;
* arquivos de configuração relevantes.

Antes de editar, identifique a arquitetura real do repositório. Não presuma a existência de arquivos, funções, componentes ou dependências.

## Funcionalidade a implementar

Adicionar uma segunda funcionalidade principal:

```text
Comparar duas ideias de negócio com suporte do modelo local.
```

O usuário deve conseguir informar duas ideias distintas e receber uma comparação estruturada.

## Requisitos funcionais

A implementação deve:

1. preservar integralmente a análise individual existente;
2. permitir a entrada de duas ideias de negócio;
3. validar que as duas ideias foram preenchidas;
4. rejeitar ideias idênticas após normalização básica:

   * remover espaços extras nas extremidades;
   * comparar sem diferenciar letras maiúsculas e minúsculas;
5. reutilizar a integração existente com o modelo local;
6. usar um prompt específico para comparação;
7. produzir e exibir uma saída estruturada contendo, no mínimo:

   * resumo comparativo;
   * ideia recomendada;
   * justificativa da recomendação;
   * vantagens da ideia A;
   * vantagens da ideia B;
   * riscos da ideia A;
   * riscos da ideia B;
   * diferenças de público-alvo;
   * próximos passos;
8. apresentar mensagens de erro claras para entradas inválidas;
9. manter consistência visual com a interface atual;
10. evitar alterações desnecessárias em módulos não relacionados.

## Fora do escopo

Não implementar:

* banco de dados;
* autenticação;
* histórico de comparações;
* deploy;
* compartilhamento por link;
* exportação de relatórios;
* interface avançada;
* integrações externas adicionais;
* refatoração arquitetural ampla;
* novas funcionalidades secundárias;
* tratamento exaustivo de todos os casos limite;
* alterações meramente estéticas sem necessidade funcional.

## Processo obrigatório

### Etapa 1 — inspeção

Antes de modificar arquivos:

1. analise o código existente;
2. identifique o fluxo atual de análise individual;
3. identifique os arquivos mínimos necessários para adicionar a comparação;
4. liste os arquivos que pretende alterar;
5. apresente um plano breve;
6. aguarde confirmação somente se encontrar ambiguidade relevante, risco elevado ou necessidade de adicionar dependência.

Caso não exista bloqueio relevante, prossiga com a implementação.

### Etapa 2 — implementação mínima

Implemente a menor solução funcional possível.

Priorize:

* reutilização de padrões já existentes;
* tipos explícitos;
* responsabilidades claras;
* validações simples;
* mensagens de erro objetivas;
* saída estruturada;
* alterações localizadas;
* legibilidade.

Evite:

* abstrações prematuras;
* duplicação desnecessária;
* mudanças amplas;
* arquivos excessivamente longos;
* lógica complexa sem justificativa.

### Etapa 3 — validação

Após implementar:

1. execute os testes existentes;
2. execute o lint, caso exista script configurado;
3. execute o build, caso seja viável com os scripts existentes;
4. execute verificações adicionais necessárias para TypeScript;
5. revise o diff;
6. confirme que nenhuma alteração fora do escopo foi introduzida;
7. informe claramente qualquer comando que não tenha sido possível executar.

Use os comandos existentes no projeto. Não invente scripts ausentes.

## Critérios de conclusão

Considere esta tarefa concluída somente quando:

* a comparação de duas ideias estiver implementada;
* o fluxo individual continuar preservado;
* entradas vazias forem rejeitadas;
* ideias idênticas forem rejeitadas;
* a saída comparativa estiver estruturada;
* os testes existentes tiverem sido executados;
* o build tiver sido executado quando disponível;
* o diff tiver sido revisado;
* a evidência documental tiver sido criada;
* não houver alterações fora do escopo.

## Registro obrigatório da evidência

Crie ou atualize:

```text
docs/prompts/04-geracao-codigo-ciclo-1.md
```

Use esta estrutura:

```md
# Prompt 04 — Geração de código: ciclo 1

## Objetivo
Implementar a primeira versão funcional da comparação entre duas ideias de negócio, preservando a análise individual existente.

## Prompt utilizado
Cole integralmente este prompt, sem resumir, omitir ou reformular trechos.

## Plano apresentado
Registre o plano proposto antes da implementação.

## Resposta gerada
Registre integralmente o resumo final produzido após a implementação.

## Arquivos criados ou alterados
Liste os arquivos realmente modificados.

## Comandos executados
Liste somente os comandos realmente executados.

## Resultados das validações
Registre os resultados de testes, lint, build e verificações adicionais.

## Decisões técnicas
Liste as decisões tomadas e suas justificativas.

## Limitações identificadas
Registre comportamentos que podem ser tratados em ciclos posteriores.

## Metadados
- Branch:
- Data e horário:

## Revisão humana
Aguardando revisão.
```

## Resumo final obrigatório

Ao finalizar, responda em Markdown com:

```md
# Resultado do ciclo 1

## Implementação realizada
Resumo objetivo.

## Arquivos alterados
Lista de arquivos.

## Decisões técnicas
Lista objetiva.

## Validações executadas
Tabela com:
- comando;
- resultado;
- observação.

## Limitações identificadas
Lista de pontos candidatos aos próximos ciclos.

## Evidência registrada
Confirme a criação ou atualização de:
`docs/prompts/04-geracao-codigo-ciclo-1.md`

## Estado do repositório
Inclua a saída resumida de:
`git status --short`
```

Não execute `git commit` nem `git push`.

## Plano apresentado
- Confirmar branch `feature/geracao-codigo-ia` e ausência de alterações não commitadas antes da tarefa.
- Ler documentação obrigatória, arquivos da aplicação, componentes, biblioteca, tipos, testes e configurações relevantes.
- Preservar o fluxo individual atual e adicionar comparação em rota separada `/api/compare`.
- Criar contrato, prompt, parser e serviço próprios para comparação reutilizando `generateTextWithOllama`.
- Adicionar formulário e resultado de comparação mantendo o padrão visual dos componentes existentes.
- Cobrir validações de campos vazios, ideias idênticas e resposta estruturada com testes.
- Executar testes, build e revisão do diff antes de registrar a evidência.

## Resposta gerada
# Resultado do ciclo 1

## Implementação realizada
Foi implementada a primeira versão funcional da comparação entre duas ideias de negócio. O fluxo individual existente foi preservado e a nova funcionalidade usa uma rota separada, prompt específico, parser estruturado, validações simples no cliente e no servidor, e reutiliza a integração local com Ollama.

## Arquivos alterados
- `app/page.tsx`
- `app/api/compare/route.ts`
- `components/ComparisonForm.tsx`
- `components/ComparisonResult.tsx`
- `components/IdeaTextarea.tsx`
- `lib/api.ts`
- `lib/comparison-service.ts`
- `lib/comparison.ts`
- `lib/messages.ts`
- `lib/prompts.ts`
- `lib/validation.ts`
- `tests/app/compare-route.test.ts`
- `tests/components/ComparisonForm.test.tsx`
- `tests/lib/comparison.test.ts`
- `types/compare.ts`
- `docs/prompts/04-geracao-codigo-ciclo-1.md`

## Decisões técnicas
- A comparação foi isolada em `/api/compare` para não alterar o contrato da análise individual.
- A validação de entradas vazias e ideias idênticas foi aplicada no cliente e no servidor.
- A integração com modelo local foi reaproveitada via `generateTextWithOllama`, com prompt específico em `lib/prompts.ts`.
- A resposta do modelo é convertida para um contrato TypeScript próprio antes de ser exibida.
- O `IdeaTextarea` foi parametrizado com defaults para preservar o uso atual em `IdeaForm`.

## Validações executadas
| comando | resultado | observação |
| --- | --- | --- |
| `npm test` | sucesso | 5 arquivos de teste, 18 testes aprovados. |
| `npm run build` | sucesso | Next.js compilou, validou tipos e incluiu `/api/compare`. |
| `git diff --check` | sucesso | Nenhum problema de whitespace reportado. |
| `npm run lint` | não executado | Não há script `lint` configurado no `package.json`. |

## Limitações identificadas
- O parser depende de a resposta do modelo respeitar os títulos de seção esperados.
- A comparação de ideias idênticas usa apenas `trim()` e comparação sem diferenciar maiúsculas/minúsculas, sem equivalência semântica.
- Não há histórico, persistência, exportação ou compartilhamento de comparações, conforme fora do escopo.
- A interface é funcional e consistente com o MVP, mas ainda não oferece modos avançados ou refinamentos de UX.

## Evidência registrada
Criado/atualizado `docs/prompts/04-geracao-codigo-ciclo-1.md`.

## Estado do repositório
```text
 M app/page.tsx
 M components/IdeaTextarea.tsx
 M lib/api.ts
 M lib/messages.ts
 M lib/prompts.ts
 M lib/validation.ts
?? app/api/compare/
?? components/ComparisonForm.tsx
?? components/ComparisonResult.tsx
?? docs/prompts/04-geracao-codigo-ciclo-1.md
?? lib/comparison-service.ts
?? lib/comparison.ts
?? tests/app/compare-route.test.ts
?? tests/components/ComparisonForm.test.tsx
?? tests/lib/
?? types/compare.ts
```

## Arquivos criados ou alterados
- `app/page.tsx`
- `app/api/compare/route.ts`
- `components/ComparisonForm.tsx`
- `components/ComparisonResult.tsx`
- `components/IdeaTextarea.tsx`
- `lib/api.ts`
- `lib/comparison-service.ts`
- `lib/comparison.ts`
- `lib/messages.ts`
- `lib/prompts.ts`
- `lib/validation.ts`
- `tests/app/compare-route.test.ts`
- `tests/components/ComparisonForm.test.tsx`
- `tests/lib/comparison.test.ts`
- `types/compare.ts`
- `docs/prompts/04-geracao-codigo-ciclo-1.md`

## Comandos executados
- `git branch --show-current`
- `git status --short`
- `test -f AGENTS.md`
- `sed -n '1,240p' lib/api.ts`
- `sed -n '1,220p' components/IdeaTextarea.tsx`
- `sed -n '1,260p' components/IdeaForm.tsx`
- `sed -n '1,220p' components/AnalysisResult.tsx`
- `sed -n '1,200p' app/page.tsx`
- `sed -n '1,260p' tests/app/analyze-route.test.ts`
- `sed -n '1,320p' tests/components/IdeaForm.test.tsx`
- `sed -n '1,220p' tests/setup.ts`
- `sed -n '1,200p' vitest.config.ts`
- `sed -n '1,180p' tsconfig.json`
- `sed -n '1,200p' vitest.setup.ts`
- `sed -n '1,260p' app/api/compare/route.ts`
- `sed -n '1,320p' lib/comparison.ts`
- `sed -n '1,220p' types/ui.ts`
- `sed -n '1,180p' components/FormStatusMessage.tsx`
- `cat > components/ComparisonResult.tsx`
- `cat > components/ComparisonForm.tsx`
- `cat > app/page.tsx`
- `cat > tests/app/compare-route.test.ts`
- `cat > tests/components/ComparisonForm.test.tsx`
- `mkdir -p tests/lib`
- `cat > tests/lib/comparison.test.ts`
- `npm test`
- `npm run build`
- `git diff --stat`
- `git diff --check`
- `git ls-files --others --exclude-standard`
- `date '+%Y-%m-%d %H:%M:%S %Z'`
- `cat > docs/prompts/04-geracao-codigo-ciclo-1.md`
- `sed -n '1,80p' docs/prompts/04-geracao-codigo-ciclo-1.md`
- `tail -n 60 docs/prompts/04-geracao-codigo-ciclo-1.md`

## Resultados das validações
- `npm test`: sucesso. Resultado: 5 arquivos de teste aprovados, 18 testes aprovados.
- `npm run build`: sucesso. O build do Next.js compilou, validou tipos e listou a rota dinâmica `/api/compare`.
- `git diff --check`: sucesso. Nenhum problema de whitespace foi reportado.
- `npm run lint`: não executado porque não existe script `lint` configurado no `package.json`.
- Tentativas iniciais de `npm test` e `npm run build` sem permissão escalada foram bloqueadas pelo sandbox com `bwrap: loopback: Failed RTM_NEWADDR: Operation not permitted`; ambas foram repetidas com permissão escalada e concluíram com sucesso.

## Decisões técnicas
- Criar `types/compare.ts` para isolar o contrato de comparação e evitar misturar o payload com o contrato de análise individual.
- Criar `/api/compare` em vez de expandir `/api/analyze`, preservando o comportamento atual da análise individual.
- Centralizar a chamada ao modelo em `compareBusinessIdeas`, reutilizando `generateTextWithOllama` e mantendo um prompt específico para comparação.
- Validar ideias vazias e ideias idênticas no cliente e no servidor para melhorar UX sem depender apenas da API.
- Criar parser textual tolerante a numeração e variações simples de títulos, mas ainda validando a presença das seções principais.
- Parametrizar `IdeaTextarea` com valores padrão para permitir dois campos na comparação sem alterar o uso existente.
- Adicionar testes de rota, componente e parser cobrindo os cenários mínimos definidos.

## Limitações identificadas
- O modelo local ainda precisa responder em formato próximo ao prompt para que o parser extraia todas as seções.
- A comparação de duplicidade é sintática e básica, não detecta ideias semanticamente equivalentes com textos diferentes.
- A saída estruturada não é JSON gerado diretamente pelo modelo; ela é derivada da resposta textual por parser local.
- Não há persistência, histórico, autenticação, exportação ou compartilhamento, conforme escopo do ciclo.
- A interface não inclui recursos avançados como abas, templates de critérios ou edição de pesos comparativos.

## Metadados
- Branch: `feature/geracao-codigo-ia`
- Data e horário: `2026-06-07 17:11:49 -03`

## Revisão humana
Aguardando revisão.
