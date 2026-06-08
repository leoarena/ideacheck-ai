# Prompt 10 — Pipeline com GitHub Actions

## Objetivo
Configurar um workflow de integração contínua para executar lint, testes e build automaticamente.

## Prompt utilizado
`````text
Atue como desenvolvedor sênior especializado em GitHub Actions, integração contínua, Next.js, TypeScript e automação de qualidade de código.

## Objetivo

Configurar um pipeline de integração contínua para o IdeaCheck AI usando GitHub Actions.

O workflow deve executar automaticamente lint e testes a cada `push` e `pull_request`.

Quando viável, execute também o build para detectar falhas de compilação e tipagem antes do merge.

Esta etapa configura validação automatizada. Não implemente deploy.

## Regra de segurança

Antes de iniciar:

1. Execute:

   ```bash
   git branch --show-current
   git status --short
   ```
2. Confirme que a branch atual é:

   ```text
   feature/pipeline-ci-cd
   ```
3. Caso esteja em outra branch, interrompa a execução.
4. Caso existam alterações não commitadas anteriores a esta tarefa, interrompa e liste os arquivos.
5. Não execute comandos destrutivos.
6. Não altere `main` ou `develop`.
7. Não execute `git commit`.
8. Não execute `git push`.
9. Não adicione dependências sem necessidade comprovada.
10. Não configure deploy.
11. Não adicione segredos.
12. Não dependa de Ollama, modelo local ou serviços externos durante o pipeline.

## Contexto obrigatório

Leia:

* `AGENTS.md`, caso exista;
* `package.json`;
* lockfile existente;
* `README.md`;
* `.gitignore`;
* configurações de lint;
* configurações do Next.js;
* testes existentes;
* arquivos existentes em `.github/`;
* workflows existentes em `.github/workflows/`, caso existam;
* `docs/prompts/08-testes.md`;
* `docs/prompts/09-lint.md`.

Antes de editar:

1. identifique o gerenciador de pacotes utilizado;
2. confirme a existência do lockfile;
3. identifique os scripts disponíveis no `package.json`;
4. verifique se já existe workflow;
5. informe o plano mínimo;
6. liste os arquivos que pretende criar ou alterar.

## Requisitos obrigatórios do workflow

Crie ou atualize:

```text
.github/workflows/ci.yml
```

O workflow deve:

1. possuir nome claro, como:

   ```text
   CI
   ```
2. executar nos eventos:

   ```yaml
   push:
   pull_request:
   ```
3. utilizar ambiente Linux:

   ```yaml
   runs-on: ubuntu-latest
   ```
4. fazer checkout do código;
5. configurar uma versão compatível do Node.js;
6. habilitar cache de dependências quando aplicável;
7. instalar dependências de forma reproduzível usando o lockfile;
8. executar:

   ```bash
   npm run lint
   npm test
   ```
9. executar também:

   ```bash
   npm run build
   ```

   caso o build já esteja disponível e não dependa de serviços externos;
10. falhar automaticamente quando qualquer comando falhar;
11. permanecer simples e legível.

## Versões das actions

Use versões estáveis e atuais das actions oficiais necessárias, como:

```yaml
actions/checkout
actions/setup-node
```

Não adicione actions de terceiros sem necessidade.

## Exemplo de estrutura esperada

Adapte ao projeto real após inspecionar os arquivos:

```yaml
name: CI

on:
  push:
  pull_request:

jobs:
  validate:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@<versão-estável>

      - name: Setup Node.js
        uses: actions/setup-node@<versão-estável>
        with:
          node-version: "<versão-compatível>"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Run lint
        run: npm run lint

      - name: Run tests
        run: npm test

      - name: Run build
        run: npm run build
```

Não copie esse exemplo cegamente. Verifique os scripts e arquivos reais antes de criar o workflow.

## README

Atualize o `README.md` com uma seção curta sobre integração contínua.

Use uma estrutura equivalente a:

````md
## Integração contínua

O projeto possui um workflow do GitHub Actions executado automaticamente em `push` e `pull_request`.

O pipeline valida:

- lint;
- testes automatizados;
- build da aplicação.

Arquivo do workflow:

```text
.github/workflows/ci.yml
````

````

Não altere outras partes do README sem necessidade.

## Validação local obrigatória

Execute:

```bash
npm run lint
npm test
npm run build
````

Depois execute:

```bash
git status --short
git diff --stat
git diff --check
git diff
```

Confirme que:

* `.github/workflows/ci.yml` foi criado ou atualizado;
* o YAML está legível e corretamente indentado;
* lint passa localmente;
* testes passam localmente;
* build passa localmente;
* nenhuma etapa depende de Ollama ou serviços externos;
* somente arquivos necessários foram alterados.

Caso algum comando falhe, investigue e corrija somente problemas relacionados a esta tarefa.

## Registro obrigatório da evidência

Crie ou atualize:

```text
docs/prompts/10-pipeline.md
```

Use esta estrutura:

```md
# Prompt 10 — Pipeline com GitHub Actions

## Objetivo
Configurar um workflow de integração contínua para executar lint, testes e build automaticamente.

## Prompt utilizado
Cole integralmente este prompt, sem resumir, omitir ou reformular trechos.

## Diagnóstico inicial
Registre:
- gerenciador de pacotes;
- lockfile identificado;
- scripts disponíveis;
- workflows existentes;
- versão de Node.js escolhida e justificativa.

## Plano apresentado
Registre a solução mínima proposta antes da alteração.

## Resposta gerada
Cole integralmente o resumo final produzido após a configuração.

## Arquivos criados ou alterados
Liste somente os arquivos realmente modificados.

## Etapas do pipeline
Liste as etapas configuradas.

## Comandos executados
Liste somente os comandos realmente executados.

## Resultados das validações
Tabela com:
- comando;
- resultado;
- observação.

## Limitações
Registre que o workflow configura integração contínua e não realiza deploy.

## Metadados
- Branch:
- Data e horário:

## Revisão humana
Aguardando revisão.
```

## Critérios de conclusão

Considere a tarefa concluída somente quando:

* `.github/workflows/ci.yml` existir;
* o workflow executar em `push` e `pull_request`;
* as dependências forem instaladas de forma reproduzível;
* lint estiver configurado no workflow;
* testes estiverem configurados no workflow;
* build estiver configurado quando compatível;
* README estiver atualizado;
* validações locais tiverem sido executadas;
* evidência estiver registrada em `docs/prompts/10-pipeline.md`;
* diff tiver sido revisado;
* não existirem alterações fora do escopo.

## Resumo final obrigatório

Ao finalizar, responda em Markdown com:

```md
# Resultado da configuração do pipeline

## Diagnóstico inicial
Resumo objetivo.

## Workflow configurado
Descrição das etapas.

## Arquivos alterados
Lista de arquivos.

## Validações locais executadas
Tabela com:
- comando;
- resultado;
- observação.

## Evidência registrada
Confirme a criação ou atualização de:
`docs/prompts/10-pipeline.md`

## Próxima validação necessária
Informe que o workflow deve ser confirmado no GitHub Actions após o push.

## Estado do repositório
Inclua a saída resumida de:
`git status --short`
```

Não execute `git commit` nem `git push`.
`````

## Diagnóstico inicial
- Gerenciador de pacotes: npm.
- Lockfile identificado: `package-lock.json`, com `lockfileVersion: 3`.
- Scripts disponíveis: `dev`, `build`, `start`, `test`, `test:watch` e `lint`.
- Workflows existentes: nenhum workflow encontrado em `.github/workflows/`; havia apenas `.github/pull_request_template.md` em `.github/`.
- Versão local de Node.js: `v24.14.1`.
- Versão local de npm: `11.11.0`.
- Versão de Node.js escolhida para o workflow: Node.js 22.
- Justificativa da versão: Node.js 22 é uma linha estável compatível com Next.js 15 e atende os engines relevantes observados no lockfile, incluindo dependências que exigem Node `^20.19.0 || >=22.12.0`.
- Testes existentes: 8 arquivos em `tests/`, com testes de rota, componentes e funções de lib.
- Dependência de Ollama no pipeline: não configurada. Os testes de rota mockam `generateTextWithOllama`, e o build não exige chamada ao serviço local.

## Plano apresentado
- Criar `.github/workflows/ci.yml` com nome `CI`.
- Executar o workflow nos eventos `push` e `pull_request`.
- Usar `ubuntu-latest`.
- Usar apenas actions oficiais: `actions/checkout@v4` e `actions/setup-node@v4`.
- Configurar Node.js 22 com cache npm baseado em `package-lock.json`.
- Instalar dependências com `npm ci` para reprodução a partir do lockfile.
- Executar `npm run lint`, `npm test` e `npm run build`.
- Atualizar o `README.md` com uma seção curta sobre integração contínua.
- Registrar esta evidência em `docs/prompts/10-pipeline.md`.
- Não configurar deploy, segredos, serviços externos ou dependências adicionais.

## Resposta gerada
# Resultado da configuração do pipeline

## Diagnóstico inicial
O projeto usa npm, possui `package-lock.json`, já expõe os scripts `lint`, `test` e `build`, e não tinha workflow em `.github/workflows/`. Os testes de rota mockam a integração com Ollama, então o pipeline não depende de serviço externo. A versão escolhida para o CI foi Node.js 22, por ser uma linha estável compatível com Next.js 15 e com os engines relevantes observados no lockfile.

## Workflow configurado
Criado `.github/workflows/ci.yml` com execução em `push` e `pull_request`. O job `validate` roda em `ubuntu-latest`, faz checkout, configura Node.js com cache npm, instala dependências com `npm ci` e executa `npm run lint`, `npm test` e `npm run build`.

## Arquivos alterados
- `.github/workflows/ci.yml`
- `README.md`
- `docs/prompts/10-pipeline.md`

## Validações locais executadas
| comando | resultado | observação |
| --- | --- | --- |
| `npm run lint` | sucesso | ESLint executado sem problemas reportados. |
| `npm test` | sucesso | 8 arquivos de teste e 33 testes aprovados. |
| `npm run build` | sucesso | Build do Next.js 15.5.18 concluído. |
| `git diff --check` | sucesso | Sem problemas de whitespace. |
| `git status --short` | sucesso | Estado revisado ao final. |
| `git diff --stat` | sucesso | Diff estatístico revisado. |
| `git diff` | sucesso | Diff completo revisado. |

## Evidência registrada
Criado `docs/prompts/10-pipeline.md`.

## Próxima validação necessária
O workflow deve ser confirmado na aba GitHub Actions após o push da branch.

## Estado do repositório
```text
 M README.md
?? .github/workflows/
?? docs/prompts/10-pipeline.md
```

## Arquivos criados ou alterados
- `.github/workflows/ci.yml`
- `README.md`
- `docs/prompts/10-pipeline.md`

## Etapas do pipeline
- `Checkout repository`: faz checkout do código com `actions/checkout@v4`.
- `Setup Node.js`: configura Node.js 22 com `actions/setup-node@v4` e cache npm.
- `Install dependencies`: instala dependências com `npm ci` usando `package-lock.json`.
- `Run lint`: executa `npm run lint`.
- `Run tests`: executa `npm test`.
- `Run build`: executa `npm run build`.

## Comandos executados
- `git branch --show-current`
- `git status --short`
- `find . -maxdepth 1 -name AGENTS.md -print`
- `sed -n '1,220p' package.json`
- `rg --files -g package-lock.json -g npm-shrinkwrap.json -g yarn.lock -g pnpm-lock.yaml`
- `sed -n '1,260p' README.md`
- `sed -n '1,220p' .gitignore`
- `sed -n '1,220p' eslint.config.mjs`
- `sed -n '1,180p' next.config.ts`
- `find .github -maxdepth 3 -type f -print`
- `rg --files tests`
- `sed -n '1,260p' docs/prompts/08-testes.md`
- `sed -n '1,320p' docs/prompts/09-lint.md`
- `sed -n '1,80p' package-lock.json`
- `sed -n '1,220p' tests/app/analyze-route.test.ts`
- `sed -n '1,240p' tests/app/compare-route.test.ts`
- `sed -n '1,220p' vitest.config.ts`
- `sed -n '1,180p' .github/pull_request_template.md`
- `node -v`
- `npm -v`
- `rg -n '"node_modules/next"|"engines"|"node":' package-lock.json`
- `sed -n '1,120p' tsconfig.json`
- `find .github -maxdepth 2 -type d -print`
- `mkdir -p .github/workflows`
- `python3 - <<'PY' ... PY` para criar `.github/workflows/ci.yml` e atualizar `README.md`.
- `sed -n '1,180p' .github/workflows/ci.yml`
- `sed -n '145,190p' README.md`
- `git status --short`
- `npm run lint`
- `npm test`
- `npm run build`
- `date '+%Y-%m-%d %H:%M:%S %Z'`
- `python3 - <<'PY' ... PY` para criar `docs/prompts/10-pipeline.md`.
- `git status --short`
- `git diff --stat`
- `git diff --check`
- `git diff`

## Resultados das validações
| comando | resultado | observação |
| --- | --- | --- |
| `npm run lint` | sucesso | ESLint executado sem problemas reportados. |
| `npm test` | sucesso | 8 arquivos de teste e 33 testes aprovados. |
| `npm run build` | sucesso | Build do Next.js 15.5.18 concluído, incluindo lint/check interno e tipos. |
| `git diff --check` | sucesso | Sem problemas de whitespace. |
| `git status --short` | sucesso | Estado revisado ao final. |
| `git diff --stat` | sucesso | Diff estatístico revisado. |
| `git diff` | sucesso | Diff completo revisado. |

## Limitações
- O workflow configura integração contínua para validação automatizada e não realiza deploy.
- O workflow não configura segredos, serviços externos, Ollama ou modelo local.
- A execução real no GitHub Actions ainda precisa ser confirmada após o push da branch.

## Metadados
- Branch: `feature/pipeline-ci-cd`
- Data e horário: `2026-06-07 21:15:13 -03`

## Revisão humana
Aguardando revisão.
