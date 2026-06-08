# Prompt 09 — Configuração de lint

## Objetivo
Adicionar validação automática de qualidade do código, corrigir inconsistências e documentar o comando de execução.

## Prompt utilizado
Atue como desenvolvedor sênior especializado em Next.js, React, TypeScript, ESLint e qualidade de código.

## Objetivo

Configurar uma verificação automática de lint no IdeaCheck AI, corrigir inconsistências encontradas e documentar o comando de execução no README.

A solução deve ser mínima, compatível com a versão atual do projeto e adequada para execução local e futura integração com GitHub Actions.

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
9. Não faça refatorações amplas.
10. Não altere comportamento funcional.
11. Não adicione ferramentas além das estritamente necessárias para lint.

## Contexto obrigatório

Leia:

* `AGENTS.md`, caso exista;
* `package.json`;
* lockfile existente;
* `README.md`;
* `tsconfig.json`;
* configurações existentes de ESLint, caso existam;
* configurações do Next.js;
* arquivos em `app/`;
* arquivos em `components/`;
* arquivos em `lib/`;
* arquivos em `types/`;
* testes existentes;
* `docs/prompts/08-testes.md`.

Antes de editar:

1. identifique a versão atual do Next.js;
2. verifique se já existe ESLint configurado;
3. verifique se já existe script `lint`;
4. liste arquivos de configuração existentes;
5. proponha a menor alteração necessária.

## Estratégia obrigatória

### Caso 1 — ESLint já configurado

Se o projeto já possuir configuração funcional:

1. preserve a configuração existente;
2. adicione ou ajuste apenas o script:

   ```json
   "lint": "eslint ."
   ```
3. execute o lint;
4. corrija somente inconsistências reais.

### Caso 2 — ESLint ausente ou incompleto

Se não houver configuração funcional:

1. instale somente as dependências mínimas compatíveis com a versão atual do projeto;
2. prefira configuração direta do ESLint;
3. evite ferramentas adicionais;
4. crie uma configuração simples para TypeScript e React, compatível com o projeto;
5. ignore diretórios gerados, como:

   ```text
   node_modules
   .next
   coverage
   dist
   ```
6. adicione ao `package.json`:

   ```json
   "lint": "eslint ."
   ```

Não utilize comandos obsoletos ou incompatíveis com a versão instalada do Next.js.

## Correção de inconsistências

Após configurar o lint:

1. execute:

   ```bash
   npm run lint
   ```
2. corrija erros reais encontrados;
3. evite alterações cosméticas desnecessárias;
4. preserve comportamento funcional;
5. não desabilite regras apenas para ocultar problemas;
6. caso alguma regra precise ser ajustada, justifique objetivamente.

## README

Atualize o `README.md` adicionando uma seção curta ou ajustando a seção existente:

````md
## Qualidade de código

Execute o lint com:

```bash
npm run lint
````

````

Não altere outras partes do README sem necessidade.

## Validação obrigatória

Após concluir:

1. execute:
   ```bash
   npm run lint
   npm test
   npm run build
````

2. execute:

   ```bash
   git status --short
   git diff --stat
   git diff
   ```
3. confirme que:

   * o script `lint` existe;
   * o lint passa localmente;
   * os testes continuam passando;
   * o build continua funcionando;
   * somente arquivos necessários foram alterados.

Caso algum comando falhe, investigue e corrija apenas problemas relacionados a esta tarefa.

## Registro obrigatório da evidência

Crie ou atualize:

```text
docs/prompts/09-lint.md
```

Use esta estrutura:

```md
# Prompt 09 — Configuração de lint

## Objetivo
Adicionar validação automática de qualidade do código, corrigir inconsistências e documentar o comando de execução.

## Prompt utilizado
Cole integralmente este prompt, sem resumir, omitir ou reformular trechos.

## Diagnóstico inicial
Registre:
- versão do Next.js;
- existência ou ausência de configuração ESLint;
- scripts existentes;
- arquivos de configuração encontrados.

## Plano apresentado
Registre a solução mínima proposta antes da alteração.

## Resposta gerada
Cole integralmente o resumo final produzido após a configuração.

## Arquivos criados ou alterados
Liste somente os arquivos realmente modificados.

## Dependências adicionadas ou alteradas
Liste dependências e justificativas.
Caso nenhuma dependência tenha sido alterada, registre isso explicitamente.

## Inconsistências corrigidas
Liste os problemas encontrados e as correções realizadas.

## Comandos executados
Liste somente os comandos realmente executados.

## Resultados das validações
Tabela com:
- comando;
- resultado;
- observação.

## Metadados
- Branch:
- Data e horário:

## Revisão humana
Aguardando revisão.
```

## Critérios de conclusão

Considere a tarefa concluída somente quando:

* o script `lint` estiver disponível no `package.json`;
* `npm run lint` executar com sucesso;
* inconsistências encontradas tiverem sido corrigidas;
* testes continuarem passando;
* build continuar funcionando;
* README estiver atualizado;
* evidência estiver registrada em `docs/prompts/09-lint.md`;
* diff tiver sido revisado;
* não houver alterações fora do escopo.

## Resumo final obrigatório

Ao finalizar, responda em Markdown com:

```md
# Resultado da configuração de lint

## Diagnóstico inicial
Resumo objetivo.

## Configuração realizada
Descrição objetiva.

## Inconsistências corrigidas
Lista de correções.

## Arquivos alterados
Lista de arquivos.

## Dependências alteradas
Lista ou confirmação de que não houve alteração.

## Validações executadas
Tabela com:
- comando;
- resultado;
- observação.

## Evidência registrada
Confirme a criação ou atualização de:
`docs/prompts/09-lint.md`

## Estado do repositório
Inclua a saída resumida de:
`git status --short`
```

Não execute `git commit` nem `git push`.

## Diagnóstico inicial
- Versão do Next.js: `15.5.18`, confirmada no `package-lock.json`.
- Configuração ESLint: ausente. Não havia `eslint.config.*`, `.eslintrc*` ou arquivo equivalente.
- Script `lint`: ausente no `package.json`.
- Scripts existentes antes da alteração: `dev`, `build`, `start`, `test`, `test:watch`.
- Arquivos de configuração encontrados: `tsconfig.json`, `next.config.ts`, `vitest.config.ts`, `tailwind.config.ts`, `postcss.config.mjs`, `vitest.setup.ts`.
- Lockfile existente: `package-lock.json`.

## Plano apresentado
- Seguir o caso 2, pois ESLint estava ausente.
- Instalar somente `eslint` e `eslint-config-next`, fixando `eslint-config-next` em `15.5.18` para acompanhar a versão resolvida do Next.js.
- Criar `eslint.config.mjs` com configuração flat do ESLint 9, usando `FlatCompat` para reaproveitar `next/core-web-vitals` e `next/typescript`.
- Ignorar diretórios/arquivos gerados: `node_modules`, `.next`, `coverage`, `dist` e `next-env.d.ts`.
- Adicionar `"lint": "eslint ."` ao `package.json`.
- Atualizar o README com a seção curta `Qualidade de código`.
- Executar `npm run lint`, corrigir inconsistências reais, depois executar `npm test` e `npm run build`.

## Resposta gerada
# Resultado da configuração de lint

## Diagnóstico inicial
O projeto usa Next.js `15.5.18` no lockfile, não possuía configuração ESLint, não possuía script `lint` e já tinha configurações de TypeScript, Next, Vitest, Tailwind e PostCSS.

## Configuração realizada
Foi adicionada uma configuração flat em `eslint.config.mjs` usando `FlatCompat` com os presets oficiais `next/core-web-vitals` e `next/typescript`, com ignores para `node_modules`, `.next`, `coverage`, `dist` e `next-env.d.ts`. O script `lint` foi adicionado como `eslint .` e o README passou a documentar `npm run lint`.

## Inconsistências corrigidas
- Corrigido warning `import/no-anonymous-default-export` no próprio `eslint.config.mjs`, nomeando o array como `eslintConfig` antes do export.
- Nenhuma inconsistência de aplicação, componentes, lib, tipos ou testes foi reportada após a correção.

## Arquivos alterados
- `README.md`
- `package.json`
- `package-lock.json`
- `eslint.config.mjs`
- `docs/prompts/09-lint.md`

## Dependências alteradas
- Adicionado `eslint@^9.39.4` para executar `eslint .`.
- Adicionado `eslint-config-next@^15.5.18`, alinhado à versão `15.5.18` do Next.js resolvida no lockfile.

## Validações executadas
| comando | resultado | observação |
| --- | --- | --- |
| `npm run lint` | sucesso | Primeiro apontou um warning no config; após correção passou sem saída de problemas. |
| `npm test` | sucesso | 8 arquivos de teste e 33 testes aprovados. |
| `npm run build` | sucesso | Build do Next.js concluído com lint/check interno e tipos. |
| `git status --short` | sucesso | Estado listado ao final. |
| `git diff --stat` | sucesso | Diff estatístico revisado. |
| `git diff` | sucesso | Diff completo revisado. |

## Evidência registrada
Criado `docs/prompts/09-lint.md`.

## Estado do repositório
```text
 M README.md
 M package-lock.json
 M package.json
?? docs/prompts/09-lint.md
?? eslint.config.mjs
```

## Arquivos criados ou alterados
- `README.md`
- `package.json`
- `package-lock.json`
- `eslint.config.mjs`
- `docs/prompts/09-lint.md`

## Dependências adicionadas ou alteradas
- `eslint@^9.39.4`: dependência mínima para executar o comando `eslint .`.
- `eslint-config-next@^15.5.18`: configuração oficial do Next.js alinhada à versão `15.5.18` resolvida no lockfile.
- O `package-lock.json` foi atualizado com dependências transitivas dessas duas dependências diretas.

## Inconsistências corrigidas
- O primeiro `npm run lint` retornou warning em `eslint.config.mjs`: `import/no-anonymous-default-export`.
- Correção aplicada: o array de configuração passou a ser atribuído a `const eslintConfig` antes de `export default eslintConfig`.
- Após a correção, `npm run lint` passou sem erros e sem warnings reportados.
- O npm reportou 2 vulnerabilidades moderadas após a instalação; `npm audit fix --force` não foi executado porque poderia alterar dependências de forma ampla e fora do escopo da tarefa.

## Comandos executados
- `git branch --show-current`
- `git status --short`
- `find . -maxdepth 1 -name AGENTS.md -print`
- `rg --files -g '*eslint*' -g '.eslint*' -g 'eslint.config.*'`
- `sed -n '1,220p' package.json`
- `sed -n '1,120p' package-lock.json`
- `rg -n '"node_modules/next"|"version": "15' package-lock.json`
- `sed -n '1,220p' tsconfig.json`
- `sed -n '1,180p' next.config.ts`
- `sed -n '1,260p' docs/prompts/08-testes.md`
- Leituras com `sed -n` de `README.md`, arquivos em `app/`, `components/`, `lib/`, `types/` e testes existentes.
- `npm install --save-dev eslint@^9 eslint-config-next@15.5.18`
- `sed -n '1,260p' package.json`
- `sed -n '1,220p' node_modules/eslint-config-next/package.json`
- `find node_modules/eslint-config-next -maxdepth 2 -type f | sort`
- `sed -n '1,220p' node_modules/eslint-config-next/core-web-vitals.js`
- `sed -n '1,220p' node_modules/eslint-config-next/typescript.js`
- `test -d node_modules/@eslint/eslintrc && echo yes || echo no`
- `python3 - <<'PY' ... PY` para criar `eslint.config.mjs`, atualizar `package.json` e atualizar `README.md`.
- `npm run lint`
- `python3 - <<'PY' ... PY` para corrigir o warning em `eslint.config.mjs`.
- `npm run lint`
- `npm test`
- `npm run build`
- `git status --short`
- `git diff --stat`
- `git diff --check`
- `sed -n '1,120p' eslint.config.mjs && sed -n '1,80p' package.json`
- `rg -n 'Qualidade de código|npm run lint|eslint|eslint-config-next' README.md package.json package-lock.json`
- `date '+%Y-%m-%d %H:%M:%S %Z'`
- `python3 - <<'PY' ... PY` para criar `docs/prompts/09-lint.md`.

## Resultados das validações
| comando | resultado | observação |
| --- | --- | --- |
| `npm run lint` | sucesso | Primeira execução teve warning no config; segunda execução passou sem problemas reportados. |
| `npm test` | sucesso | 8 arquivos de teste e 33 testes aprovados. |
| `npm run build` | sucesso | Build concluído com lint/check interno e tipos. |
| `git status --short` | sucesso | Estado revisado. |
| `git diff --stat` | sucesso | Diff estatístico revisado. |
| `git diff` | sucesso | Diff completo revisado. |

## Metadados
- Branch: `feature/testes-automatizados`
- Data e horário: `2026-06-07 20:48:16 -03`

## Revisão humana
Aguardando revisão.
