# Prompt 12 — Atualização do README

## Objetivo
Consolidar a documentação técnica e funcional do projeto.

## Prompt utilizado
`````text
Atue como desenvolvedor sênior responsável por documentação técnica clara, verificável e orientada à execução.

## Objetivo

Atualizar o `README.md` do IdeaCheck AI para consolidar a documentação do projeto, preservando informações úteis já existentes e incorporando as evoluções implementadas.

Esta etapa é exclusivamente documental.

## Segurança

Antes de iniciar:

```bash
git branch --show-current
git status --short
```

Confirme que a branch atual é:

```text
docs/prompts-readme
```

Caso contrário, interrompa a execução.

Não:

* altere código-fonte;
* altere testes;
* altere configurações;
* instale dependências;
* execute `git commit`;
* execute `git push`;
* invente fatos, comandos, links ou resultados;
* crie links com caminhos absolutos locais, como `/home/...`.

## Fontes de contexto

Leia:

```text
README.md
package.json
docs/ESCOPO.md
docs/ARQUITETURA-M1S08.md
docs/REFATORACAO.md
docs/ANALISE-CRITICA.md
docs/prompts/README.md
docs/prompts/02-definicao-escopo.md
docs/prompts/04-geracao-codigo-ciclo-1.md
docs/prompts/06-refinamento-ciclo-3.md
docs/prompts/07-refatoracao.md
docs/prompts/08-testes.md
docs/prompts/09-lint.md
docs/prompts/10-pipeline.md
docs/prompts/11-analise-critica.md
.github/workflows/ci.yml
```

Inspecione também os arquivos necessários para confirmar funcionalidades, scripts e tecnologias.

Use somente informações verificadas no repositório.

## Requisitos do README

Atualize `README.md` com uma estrutura objetiva contendo:

````md
# IdeaCheck AI

## Visão geral
Nome, problema resolvido e proposta de valor.

## Funcionalidades
- análise individual de uma ideia;
- comparação entre duas ideias;
- cópia do resultado em Markdown.

## Tecnologias
Liste somente tecnologias confirmadas no repositório.

## Uso de IA no desenvolvimento
Tabela com:
- etapa;
- uso realizado;
- evidência em `docs/prompts/`.

Inclua:
- diagnóstico arquitetural;
- definição e refinamento de escopo;
- documentação de arquitetura;
- geração e refinamento de código;
- refatoração;
- testes;
- lint;
- pipeline;
- documentação.

## Padrões de prompting aplicados
Explique brevemente:
- Role-based Prompting;
- Few-shot Prompting.

Inclua referências relativas aos arquivos relevantes em `docs/prompts/`.

## Arquitetura
Inclua uma explicação curta e um diagrama Mermaid `flowchart` coerente com a implementação real.

## Pré-requisitos
Liste somente requisitos confirmados pelo projeto.

## Instalação
Inclua comandos completos.

## Execução
Inclua o comando para iniciar a aplicação.

## Qualidade de código
Inclua:
```bash
npm run lint
npm test
npm run build
````

## Integração contínua

Explique que `.github/workflows/ci.yml` executa automaticamente lint, testes e build em `push` e `pull_request`.

## Cenários de uso

### Cenário 1 — análise individual

Inclua:

* contexto;
* exemplo de entrada;
* ação;
* resultado esperado.

### Cenário 2 — comparação de ideias

Inclua:

* contexto;
* exemplos de entrada A e B;
* ação;
* resultado esperado.

## Refatoração documentada

Resuma o problema de duplicação corrigido e referencie:
`docs/REFATORACAO.md`

## Análise crítica de saída da IA

Resuma a sugestão inicialmente insuficiente, a intervenção humana e o resultado refinado.
Referencie:
`docs/ANALISE-CRITICA.md`

## Limitações

Liste somente limitações reais.

## Melhorias futuras

Liste evoluções possíveis sem apresentá-las como implementadas.

## Documentação complementar

Inclua links relativos para os documentos principais.

````

## Regras editoriais

1. Preserve informações corretas já existentes.
2. Remova duplicações e textos desatualizados.
3. Use linguagem clara e concisa.
4. Use caminhos relativos do repositório.
5. Não inclua caminhos locais absolutos.
6. Não afirme que existe vídeo de demonstração.
7. Não invente link de vídeo.
8. Não declare deploy, banco de dados ou autenticação como funcionalidades existentes.
9. Não informe resultados de testes diferentes dos registrados nos documentos.
10. Mantenha o README adequado para execução por outra pessoa.

## Registro do prompt

Crie ou atualize:

```text
docs/prompts/12-readme.md
````

Use esta estrutura:

```md
# Prompt 12 — Atualização do README

## Objetivo
Consolidar a documentação técnica e funcional do projeto.

## Prompt utilizado
Cole integralmente este prompt.

## Resposta gerada
Registre o resumo final da alteração.

## Arquivos alterados
- `README.md`
- `docs/prompts/12-readme.md`

## Validações realizadas
Liste os comandos executados.

## Metadados
- Branch:
- Data e horário:

## Revisão humana
Aguardando revisão.
```

## Validação final

Execute:

```bash
git diff --check
git status --short
grep -n "/home/" README.md || true
grep -n "localhost" README.md || true
```

Confirme que:

* somente `README.md` e `docs/prompts/12-readme.md` foram alterados;
* não existem caminhos locais absolutos;
* os links internos são relativos;
* o diagrama Mermaid foi incluído;
* os dois cenários foram documentados;
* nenhuma funcionalidade inexistente foi descrita.

Ao finalizar, apresente apenas:

```md
# Resultado da atualização do README

## Seções adicionadas ou atualizadas
...

## Arquivos alterados
...

## Validações executadas
...

## Estado do repositório
...
```

Não execute `git commit` nem `git push`.
`````

## Resposta gerada
README consolidado com visão geral, funcionalidades implementadas, tecnologias confirmadas, uso de IA no desenvolvimento, padrões de prompting, arquitetura com diagrama Mermaid, pré-requisitos, instalação, execução, qualidade de código, integração contínua, cenários de uso, refatoração documentada, análise crítica, limitações, melhorias futuras e documentação complementar. A atualização removeu duplicações do README anterior e evitou caminhos absolutos locais.

## Arquivos alterados
- `README.md`
- `docs/prompts/12-readme.md`

## Validações realizadas
- `git branch --show-current`
- `git status --short`
- Leituras com `sed` e `rg` dos arquivos solicitados e de arquivos de implementação necessários.
- `date '+%Y-%m-%d %H:%M:%S %Z'`
- `git diff --check`
- `git status --short`
- `grep -n "/home/" README.md || true`
- `grep -n "localhost" README.md || true`

## Metadados
- Branch: `docs/prompts-readme`
- Data e horário: `2026-06-07 22:06:35 -03`

## Revisão humana
Aguardando revisão.
