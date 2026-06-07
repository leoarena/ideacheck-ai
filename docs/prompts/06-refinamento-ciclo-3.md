# Prompt 06 — Refinamento de código: ciclo 3

## Objetivo
Implementar a cópia do resultado em Markdown utilizando Few-shot Prompting.

## Padrão de prompting aplicado
Few-shot Prompting, com exemplos de análise individual, comparação de ideias e ausência de resultado.

## Prompt utilizado
Atue como desenvolvedor frontend sênior especializado em Next.js, React, TypeScript, acessibilidade e evolução incremental de aplicações.

## Objetivo

Implementar a funcionalidade secundária **“Copiar resultado em Markdown”** no IdeaCheck AI.

A funcionalidade deve permitir que o usuário copie para a área de transferência o resultado atualmente exibido na interface, formatado como Markdown legível.

Este é o terceiro ciclo de geração e refinamento. Utilize **Few-shot Prompting**: os exemplos abaixo devem orientar a implementação e também ser registrados como evidência do padrão aplicado.

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
4. Caso existam alterações não commitadas anteriores a esta tarefa, interrompa e liste os arquivos.
5. Não execute comandos destrutivos.
6. Não altere `main` ou `develop`.
7. Não instale dependências.
8. Não execute `git commit`.
9. Não execute `git push`.
10. Preserve os fluxos existentes de análise individual e comparação entre ideias.

## Contexto obrigatório

Leia:

* `AGENTS.md`, caso exista;
* `README.md`;
* `package.json`;
* `docs/ESCOPO.md`;
* `docs/ARQUITETURA-M1S08.md`;
* `docs/prompts/04-geracao-codigo-ciclo-1.md`;
* `docs/prompts/05-refinamento-ciclo-2.md`;
* documentação existente que mencione a funcionalidade de cópia em Markdown;
* componentes responsáveis pela exibição dos resultados;
* tipos relacionados às respostas;
* testes existentes.

Antes de editar:

1. identifique os formatos reais dos resultados;
2. identifique onde os resultados são renderizados;
3. liste os arquivos mínimos necessários;
4. proponha um plano breve;
5. não presuma estruturas inexistentes.

## Requisitos funcionais

Implemente uma ação visível com o texto:

```text
Copiar resultado em Markdown
```

A ação deve:

1. aparecer somente quando houver resultado válido exibido;
2. converter o resultado atual para Markdown legível;
3. funcionar para análise individual;
4. funcionar para comparação entre duas ideias, caso o fluxo utilize estrutura diferente;
5. copiar o texto usando a API nativa da área de transferência;
6. exibir feedback de sucesso;
7. exibir feedback claro caso a cópia falhe;
8. preservar o layout atual;
9. não alterar regras de negócio;
10. não adicionar dependências.

Use mensagens objetivas:

```text
Resultado copiado em Markdown.
```

```text
Não foi possível copiar o resultado.
```

Quando aplicável, apresente o feedback com mecanismo acessível, como `aria-live`.

## Exemplos orientadores — Few-shot

### Exemplo 1 — análise individual

#### Dados exibidos

```text
Problema resolvido: Dificuldade de pequenos restaurantes em prever demanda.
Público-alvo: Restaurantes locais.
Pontos de atenção: Qualidade dos dados e adesão inicial.
Próximos passos: Validar o problema com cinco restaurantes.
Nota de viabilidade: 8
```

#### Markdown esperado

```md
# Análise da ideia de negócio

## Problema resolvido
Dificuldade de pequenos restaurantes em prever demanda.

## Público-alvo
Restaurantes locais.

## Pontos de atenção
- Qualidade dos dados
- Adesão inicial

## Próximos passos
- Validar o problema com cinco restaurantes

## Nota de viabilidade
8
```

### Exemplo 2 — comparação entre ideias

#### Dados exibidos

```text
Ideia recomendada: Plataforma para restaurantes.
Justificativa: Problema mais específico e público-alvo mais claro.
Vantagens da ideia A: Nicho definido.
Vantagens da ideia B: Mercado amplo.
Riscos da ideia A: Dependência de dados.
Riscos da ideia B: Concorrência elevada.
Próximos passos: Entrevistar potenciais usuários.
```

#### Markdown esperado

```md
# Comparação de ideias de negócio

## Ideia recomendada
Plataforma para restaurantes.

## Justificativa
Problema mais específico e público-alvo mais claro.

## Vantagens da ideia A
- Nicho definido

## Vantagens da ideia B
- Mercado amplo

## Riscos da ideia A
- Dependência de dados

## Riscos da ideia B
- Concorrência elevada

## Próximos passos
- Entrevistar potenciais usuários
```

### Exemplo 3 — ausência de resultado

#### Estado da interface

```text
Nenhuma análise ou comparação foi gerada.
```

#### Comportamento esperado

```text
O botão de cópia não deve ser exibido.
```

## Diretrizes de implementação

1. Reutilize tipos e componentes existentes.
2. Evite lógica de formatação espalhada pela interface.
3. Caso exista mais de um formato de resultado, centralize a conversão para Markdown em função ou módulo pequeno e testável.
4. Preserve a ordem lógica das seções exibidas.
5. Omita seções ausentes em vez de gerar títulos vazios.
6. Converta listas para itens Markdown com `-`.
7. Evite abstrações prematuras.
8. Faça a menor alteração segura possível.

## Fora do escopo

Não implementar:

* exportação de arquivos;
* download de `.md`;
* compartilhamento por link;
* histórico de cópias;
* banco de dados;
* autenticação;
* alteração do prompt enviado ao modelo;
* alteração de contratos da API;
* reformulação visual ampla;
* novas dependências.

## Validação obrigatória

Após implementar:

1. execute os testes existentes;
2. adicione testes para a função de formatação, caso a arquitetura permita teste isolado;
3. execute lint, caso exista;
4. execute build, caso exista;
5. revise o diff;
6. confirme que não existem alterações fora do escopo;
7. execute:

   ```bash
   git status --short
   git diff --stat
   ```

Valide manualmente:

```text
1. Gerar análise individual.
2. Copiar o resultado.
3. Colar em um editor de texto e conferir o Markdown.
4. Gerar comparação entre duas ideias.
5. Copiar o resultado.
6. Colar em um editor de texto e conferir o Markdown.
7. Confirmar que o botão não aparece antes da geração de um resultado.
8. Confirmar o feedback de sucesso.
```

Não invente scripts ausentes. Caso algum comando não possa ser executado, registre isso objetivamente.

## Comparação obrigatória com o ciclo anterior

Registre:

```text
Antes:
O usuário visualizava o resultado, mas precisava selecionar e copiar manualmente o conteúdo sem formatação adequada.

Depois:
O usuário pode copiar o resultado estruturado em Markdown com uma única ação e receber feedback da operação.
```

## Registro obrigatório da evidência

Crie ou atualize:

```text
docs/prompts/06-refinamento-ciclo-3.md
```

Use esta estrutura:

```md
# Prompt 06 — Refinamento de código: ciclo 3

## Objetivo
Implementar a cópia do resultado em Markdown utilizando Few-shot Prompting.

## Padrão de prompting aplicado
Few-shot Prompting, com exemplos de análise individual, comparação de ideias e ausência de resultado.

## Prompt utilizado
Cole integralmente este prompt, sem resumir, omitir ou reformular trechos.

## Plano apresentado
Registre o plano proposto antes da implementação.

## Resposta gerada
Cole integralmente o resumo final produzido após a alteração.

## Comparação com o ciclo anterior

### Antes
O usuário visualizava o resultado, mas precisava selecionar e copiar manualmente o conteúdo sem formatação adequada.

### Depois
O usuário pode copiar o resultado estruturado em Markdown com uma única ação e receber feedback da operação.

## Arquivos criados ou alterados
Liste somente os arquivos realmente modificados.

## Comandos executados
Liste somente os comandos realmente executados.

## Resultados das validações
Registre testes, lint, build e validações manuais.

## Decisões técnicas
Liste decisões e justificativas.

## Limitações identificadas
Liste pontos que permaneceram fora do escopo.

## Metadados
- Branch:
- Data e horário:

## Revisão humana
Aguardando revisão.
```

## Resumo final obrigatório

Ao finalizar, responda em Markdown com:

```md
# Resultado do ciclo 3

## Implementação realizada
Resumo objetivo.

## Padrão de prompting aplicado
Confirme o uso de Few-shot Prompting.

## Arquivos alterados
Lista de arquivos.

## Validações executadas
Tabela com:
- comando ou validação manual;
- resultado;
- observação.

## Comparação com o ciclo anterior
Descreva o comportamento antes e depois.

## Evidência registrada
Confirme a criação ou atualização de:
`docs/prompts/06-refinamento-ciclo-3.md`

## Estado do repositório
Inclua a saída resumida de:
`git status --short`
```

Não execute `git commit` nem `git push`.

## Plano apresentado
- Criar `lib/result-markdown.ts` com funções puras `formatAnalysisAsMarkdown` e `formatComparisonAsMarkdown`, preservando a ordem das seções exibidas e omitindo campos vazios.
- Criar um componente pequeno `ResultCopyButton` com `navigator.clipboard.writeText`, feedback acessível via `aria-live` e mensagens de sucesso/erro centralizadas.
- Integrar o botão somente em `AnalysisResult` e `ComparisonResult`, aparecendo apenas quando houver resultado e não estiver carregando.
- Adicionar testes unitários para formatação Markdown e testes de componente para presença/ausência do botão, sucesso e falha de cópia.
- Executar `npm test`, `npm run build`, verificar ausência de script `lint`, revisar diff, status e diff stat.

## Resposta gerada
# Resultado do ciclo 3

## Implementação realizada
Foi implementada a ação **Copiar resultado em Markdown** para análise individual e comparação de ideias. O botão aparece somente quando há resultado exibido, usa `navigator.clipboard.writeText`, gera Markdown estruturado a partir dos contratos reais e mostra feedback acessível de sucesso ou erro.

## Padrão de prompting aplicado
Foi aplicado Few-shot Prompting: os exemplos de análise individual, comparação de ideias e ausência de resultado orientaram os títulos Markdown, listas com `-`, omissão de seções vazias e a regra de não exibir botão antes de haver resultado.

## Arquivos alterados
- `components/AnalysisResult.tsx`
- `components/ComparisonResult.tsx`
- `components/ResultCopyButton.tsx`
- `lib/messages.ts`
- `lib/result-markdown.ts`
- `tests/components/ComparisonForm.test.tsx`
- `tests/components/IdeaForm.test.tsx`
- `tests/lib/result-markdown.test.ts`
- `docs/prompts/06-refinamento-ciclo-3.md`

## Validações executadas
| comando ou validação manual | resultado | observação |
| --- | --- | --- |
| `npm test` | sucesso | 6 arquivos de teste e 24 testes aprovados. |
| `npm run build` | sucesso | Build do Next.js concluído com compilação e verificação de tipos. |
| `npm run lint` | não executado | Não há script `lint` no `package.json`. |
| `git diff --check` | sucesso | Nenhum problema de whitespace reportado. |
| Formatação Markdown da análise | sucesso | Coberta por `tests/lib/result-markdown.test.ts` com exemplo few-shot. |
| Formatação Markdown da comparação | sucesso | Coberta por `tests/lib/result-markdown.test.ts` com exemplo few-shot adaptado ao contrato real, que possui `recommendedIdea` como enum. |
| Botão ausente antes do resultado | sucesso | Coberto nos testes de `IdeaForm` e `ComparisonForm`. |
| Cópia com sucesso | sucesso | Coberta nos testes de análise e comparação com `navigator.clipboard.writeText` mockado. |
| Falha de cópia | sucesso | Coberta no teste de comparação com rejeição do clipboard mockado. |
| Validação manual em navegador real | não executada | Ambiente atual não fornece navegador/editor de texto para colar; os fluxos foram validados por testes automatizados com clipboard mockado. |

## Comparação com o ciclo anterior
Antes, o usuário visualizava o resultado, mas precisava selecionar e copiar manualmente o conteúdo sem formatação adequada.

Depois, o usuário pode copiar o resultado estruturado em Markdown com uma única ação e receber feedback da operação.

## Evidência registrada
Criado `docs/prompts/06-refinamento-ciclo-3.md`.

## Estado do repositório
```text
 M components/AnalysisResult.tsx
 M components/ComparisonResult.tsx
 M lib/messages.ts
 M tests/components/ComparisonForm.test.tsx
 M tests/components/IdeaForm.test.tsx
?? components/ResultCopyButton.tsx
?? docs/prompts/06-refinamento-ciclo-3.md
?? lib/result-markdown.ts
?? tests/lib/result-markdown.test.ts
```

## Comparação com o ciclo anterior

### Antes
O usuário visualizava o resultado, mas precisava selecionar e copiar manualmente o conteúdo sem formatação adequada.

### Depois
O usuário pode copiar o resultado estruturado em Markdown com uma única ação e receber feedback da operação.

## Arquivos criados ou alterados
- `components/AnalysisResult.tsx`
- `components/ComparisonResult.tsx`
- `components/ResultCopyButton.tsx`
- `lib/messages.ts`
- `lib/result-markdown.ts`
- `tests/components/ComparisonForm.test.tsx`
- `tests/components/IdeaForm.test.tsx`
- `tests/lib/result-markdown.test.ts`
- `docs/prompts/06-refinamento-ciclo-3.md`

## Comandos executados
- `git branch --show-current`
- `git status --short`
- `test -f AGENTS.md`
- `sed -n '1,220p' README.md`
- `sed -n '1,160p' package.json`
- `rg -n "copiar|Markdown|markdown|cópia|copy" docs README.md app components lib tests types --glob '!node_modules' --glob '!.next'`
- `sed -n '1,260p' docs/ESCOPO.md`
- `sed -n '1,380p' docs/ARQUITETURA-M1S08.md`
- `sed -n '1,260p' docs/prompts/04-geracao-codigo-ciclo-1.md`
- `sed -n '1,260p' docs/prompts/05-refinamento-ciclo-2.md`
- `sed -n '1,240p' types/analyze.ts`
- `sed -n '1,260p' types/compare.ts`
- `sed -n '1,260p' components/AnalysisResult.tsx`
- `sed -n '1,300p' components/ComparisonResult.tsx`
- `find tests -maxdepth 3 -type f | sort`
- `sed -n '1,340p' tests/components/IdeaForm.test.tsx`
- `sed -n '1,380p' tests/components/ComparisonForm.test.tsx`
- `sed -n '1,260p' tests/lib/comparison.test.ts`
- `sed -n '1,140p' vitest.setup.ts`
- `sed -n '1,220p' lib/messages.ts`
- `cat > lib/result-markdown.ts`
- `cat > components/ResultCopyButton.tsx`
- `perl -0pi ... lib/messages.ts`
- `cat > components/AnalysisResult.tsx`
- `cat > components/ComparisonResult.tsx`
- `cat > tests/lib/result-markdown.test.ts`
- `perl -0pi ... lib/result-markdown.ts tests/lib/result-markdown.test.ts`
- `cat > tests/components/IdeaForm.test.tsx`
- `cat > tests/components/ComparisonForm.test.tsx`
- `npm test`
- `npm run build`
- `git diff --stat`
- `git diff --check`
- `git diff -- components/AnalysisResult.tsx components/ComparisonResult.tsx lib/messages.ts tests/components/IdeaForm.test.tsx tests/components/ComparisonForm.test.tsx`
- `date '+%Y-%m-%d %H:%M:%S %Z'`
- `cat > docs/prompts/06-refinamento-ciclo-3.md`
- `sed -n '1,80p' docs/prompts/06-refinamento-ciclo-3.md`

## Resultados das validações
- `npm test`: sucesso. 6 arquivos de teste passaram, com 24 testes aprovados.
- `npm run build`: sucesso. Build do Next.js concluído com compilação e verificação de tipos.
- `npm run lint`: não executado porque não há script `lint` no `package.json`.
- `git diff --check`: sucesso. Nenhum problema de whitespace foi reportado.
- Testes unitários de formatação: sucesso para análise individual, comparação e omissão de seções vazias.
- Testes de componente: sucesso para botão ausente antes do resultado, cópia com sucesso em análise e comparação, e feedback de falha em comparação.
- Validação manual em navegador/editor real: não executada neste ambiente, por ausência de navegador/editor para colar; os cenários foram cobertos com testes automatizados e clipboard mockado.
- Tentativas iniciais de `npm test` e `npm run build` sem permissão escalada foram bloqueadas pelo sandbox com `bwrap: loopback: Failed RTM_NEWADDR: Operation not permitted`; ambas foram repetidas com permissão escalada e concluíram com sucesso.

## Decisões técnicas
- Centralizar a conversão para Markdown em `lib/result-markdown.ts` para manter a formatação testável e fora dos componentes de UI.
- Criar `ResultCopyButton` como componente reutilizável para análise e comparação, reduzindo duplicação de estado e feedback.
- Usar a API nativa `navigator.clipboard.writeText`, sem novas dependências.
- Mostrar o botão apenas quando há resultado e o componente não está carregando, conforme o exemplo de ausência de resultado.
- Omitir seções vazias no Markdown, conforme diretriz do prompt.
- Converter campos naturalmente listáveis para bullets com `-`, seguindo os exemplos few-shot.
- Para comparação, usar `Ideia A`, `Ideia B` ou `Empate` no Markdown porque o contrato real guarda `recommendedIdea` como enum, não o texto original das ideias.

## Limitações identificadas
- A recomendação da comparação copiada usa o rótulo estrutural (`Ideia A`, `Ideia B` ou `Empate`), pois o contrato atual não armazena o texto original da ideia recomendada junto do resultado.
- A validação manual em navegador real não foi executada neste ambiente; a cobertura foi automatizada com React Testing Library e mock de clipboard.
- Não foram implementados download de arquivo, histórico, compartilhamento por link, edição antes da cópia ou exportação em PDF, conforme fora do escopo.
- A heurística de listas é simples e voltada aos campos listáveis atuais; refinamentos semânticos podem ser tratados em ciclo posterior.

## Metadados
- Branch: `feature/geracao-codigo-ia`
- Data e horário: `2026-06-07 18:43:59 -03`

## Revisão humana
Aguardando revisão.
