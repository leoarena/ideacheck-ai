# Registro de Prompts - IdeaCheck AI

Este arquivo registra os prompts utilizados durante o desenvolvimento do projeto IdeaCheck AI. O objetivo é manter rastreabilidade sobre como a IA foi usada em etapas de requisitos, documentação, código, refatoração e testes.

Cada registro deve ser objetivo, suficiente para reproduzir o contexto principal e claro sobre o resultado gerado.

## Estrutura Padrão para Novos Registros

````markdown
### Prompt NNN - Título breve

- **Data:** AAAA-MM-DD
- **Ferramenta utilizada:** Nome da ferramenta de IA
- **Etapa do desenvolvimento:** Requisitos, documentação, código, refatoração, testes ou outra etapa aplicável
- **Objetivo:** Objetivo prático do prompt
- **Prompt utilizado:**

```text
Texto do prompt utilizado.
```

- **Resultado gerado:** Resumo do artefato, decisão ou alteração produzida
````

## Prompts Registrados

### Prompt 001 - PRD inicial e estrutura do relatório de prompts

- **Data:** 2026-05-28
- **Ferramenta utilizada:** Codex, assistente de IA
- **Etapa do desenvolvimento:** Requisitos e documentação inicial
- **Objetivo:** Gerar o PRD inicial do IdeaCheck AI e estruturar o arquivo de registro de prompts do projeto.
- **Prompt utilizado:**

```text
Você é um assistente sênior de engenharia de software, produto e documentação técnica.

Contexto:
Estou desenvolvendo um projeto avaliativo chamado IdeaCheck AI. O objetivo é criar uma aplicação web onde o usuário informa uma ideia de negócio e a IA retorna uma análise estruturada com problema que resolve, público-alvo, concorrência básica e pontos de atenção.

A aplicação será desenvolvida com:

* Next.js
* TypeScript
* Tailwind CSS
* Integração real com IA local via Ollama
* Modelo sugerido: llama3.2:3b
* Execução local, sem deploy obrigatório

Critérios obrigatórios do projeto:

* README.md completo
* docs/PRD.md versionado com seção para Viabilidade
* prompts.md com todos os prompts utilizados
* Código-fonte com pelo menos 5 testes automatizados
* Fluxograma versionado no repositório
* IA utilizada em requisito, código, refatoração e testes
* Justificativa do uso de IA documentada

Tarefa atual:
Atualize os arquivos `docs/PRD.md` e `prompts.md`.

No arquivo `docs/PRD.md`, crie um Product Requirements Document completo em português para o projeto IdeaCheck AI.

O PRD deve conter obrigatoriamente:

1. Nome do produto
2. Visão geral
3. Problema identificado
4. Público-alvo
5. Objetivo do produto
6. Papel funcional da IA dentro da aplicação
7. Estrutura da análise gerada pela IA
   - Problema que a ideia resolve
   - Público-alvo
   - Concorrência básica
   - Pontos de atenção
8. Escopo do MVP
9. Fora de escopo nesta versão
10. Requisitos funcionais
11. Requisitos não funcionais
12. Três user stories
13. Critérios de aceitação
14. Fluxo principal de uso
15. Integração com IA via Ollama
16. Limitações conhecidas
17. Riscos técnicos
18. Métricas de sucesso
19. Escopo futuro

No arquivo `prompts.md`, crie uma estrutura organizada para registrar os prompts utilizados no projeto.

O `prompts.md` deve conter:

1. Título
2. Breve explicação do objetivo do arquivo
3. Registro do prompt atual usado para gerar o PRD
4. Estrutura padronizada e enxuta para cada prompt, contendo:
   - Data
   - Ferramenta utilizada
   - Etapa do desenvolvimento
   - Objetivo
   - Prompt utilizado
   - Resultado gerado

Registre este próprio prompt como o primeiro prompt documentado, indicando que ele foi usado para gerar o PRD inicial e estruturar o relatório de prompts.

Restrições:

* Não criar código da aplicação ainda.
* Não modificar README.md neste momento.
* Não criar testes ainda.
* Não instalar dependências.
* Não alterar configuração de projeto.
* Manter tudo em português.
* Usar Markdown limpo e profissional.
* Não inventar que a aplicação já está implementada; escrever como documentação inicial de planejamento.
```

- **Resultado gerado:** Criação do PRD inicial em `docs/PRD.md`, com requisitos, viabilidade, escopo, fluxo, riscos e integração planejada com Ollama; criação da estrutura padronizada de registro de prompts em `prompts.md`.

### Prompt 002 - Arquitetura e fluxograma técnico

- **Data:** 2026-05-28
- **Ferramenta utilizada:** Codex CLI
- **Etapa do desenvolvimento:** Arquitetura e fluxograma
- **Objetivo:** Criar a documentação técnica de arquitetura e funcionamento do IdeaCheck AI, incluindo diagramas Mermaid e registro do prompt utilizado.
- **Prompt utilizado:**

```text
Você é um assistente sênior de engenharia de software, arquitetura de sistemas e documentação técnica.

Contexto:
Estou desenvolvendo um projeto avaliativo chamado IdeaCheck AI. A aplicação permite que o usuário informe uma ideia de negócio e receba uma análise estruturada gerada por IA.

Antes de executar a tarefa, leia o arquivo `docs/PRD.md` e use-o como fonte principal de contexto do projeto.

Tecnologias planejadas:

* Next.js
* TypeScript
* Tailwind CSS
* Ollama como LLM local
* Modelo sugerido: llama3.2:3b
* Execução local, sem deploy obrigatório

Critérios obrigatórios relevantes nesta etapa:

* Fluxograma de funcionamento versionado no repositório
* Arquitetura documentada
* Diagrama UML gerado com apoio de IA
* IA com papel funcional no produto
* Registro do prompt utilizado no `prompts.md`

Tarefa atual:
Criar a documentação de arquitetura e funcionamento do projeto.

Arquivos a criar ou atualizar:

1. Criar `docs/ARQUITETURA.md`
2. Criar `docs/FLUXOGRAMA.md`
3. Atualizar `prompts.md` registrando este prompt como uma nova entrada

No arquivo `docs/ARQUITETURA.md`, documente:

1. Visão geral da arquitetura
2. Principais componentes do sistema
3. Responsabilidade de cada componente
4. Fluxo de comunicação entre frontend, API route local e Ollama
5. Papel funcional da IA no produto
6. Justificativa técnica pelo uso do Ollama
7. Benefícios da execução local
8. Limitações técnicas conhecidas
9. Possíveis melhorias futuras

Inclua também um diagrama UML simples em Mermaid, preferencialmente um diagrama de casos de uso, contendo:

* Usuário
* Sistema IdeaCheck AI
* LLM local via Ollama
* Informar ideia de negócio
* Solicitar análise
* Gerar análise com IA
* Visualizar resultado estruturado

No arquivo `docs/FLUXOGRAMA.md`, documente:

1. Descrição textual do fluxo principal
2. Fluxograma em Mermaid mostrando o funcionamento da aplicação
3. Fluxo de erro quando o Ollama não estiver disponível
4. Fluxo de validação quando o usuário tenta enviar uma ideia vazia

O fluxo principal deve representar:

1. Usuário acessa a aplicação
2. Usuário digita uma ideia de negócio
3. Frontend valida a entrada
4. Frontend envia a ideia para a rota `/api/analyze`
5. A rota local monta o prompt para o LLM
6. A rota local envia a requisição para `http://localhost:11434/api/generate`
7. Ollama executa o modelo `llama3.2:3b`
8. O LLM retorna uma análise estruturada
9. A API route retorna a resposta ao frontend
10. O frontend exibe a análise para o usuário

No arquivo `prompts.md`, registre este prompt seguindo a estrutura existente:

* Data
* Ferramenta utilizada: Codex CLI
* Etapa do desenvolvimento: Arquitetura e fluxograma
* Objetivo
* Prompt utilizado
* Resultado gerado

Restrições:

* Não implementar código da aplicação ainda
* Não instalar dependências
* Não modificar `README.md` neste momento
* Não alterar o PRD, exceto se for necessário corrigir alguma inconsistência evidente
* Manter todos os textos em português
* Usar Markdown limpo e profissional
* Usar Mermaid para os diagramas
* Não afirmar que a aplicação já está implementada
* Escrever a documentação como planejamento técnico para a próxima etapa de implementação

Ao final, sugira uma mensagem de commit curta seguindo Conventional Commits.
```

- **Resultado gerado:** Criação de `docs/ARQUITETURA.md` com visão arquitetural, componentes, responsabilidades, fluxo de comunicação e diagrama UML em Mermaid; criação de `docs/FLUXOGRAMA.md` com fluxo principal, erro de Ollama indisponível e validação de ideia vazia; atualização deste registro em `prompts.md`.

### Prompt 003 - Estrutura inicial do projeto Next.js

- **Data:** 2026-05-28
- **Ferramenta utilizada:** Codex CLI
- **Etapa do desenvolvimento:** Estrutura inicial do projeto
- **Objetivo:** Criar a estrutura inicial funcional do projeto Next.js com TypeScript e Tailwind CSS, preparada para futura integração com Ollama, sem implementar resposta simulada de IA.
- **Prompt utilizado:**

```text
Você é um assistente sênior de engenharia de software especializado em Next.js, TypeScript, arquitetura frontend e aplicações com IA.

Contexto:
Estou desenvolvendo um projeto avaliativo chamado IdeaCheck AI. A aplicação permite que o usuário informe uma ideia de negócio e receba uma análise estruturada gerada por IA.

Antes de executar a tarefa, leia os arquivos:
- docs/PRD.md
- docs/ARQUITETURA.md, se existir
- docs/FLUXOGRAMA.md, se existir
- prompts.md

Use esses arquivos como fonte de verdade para entender o escopo do projeto.

Tecnologias planejadas:
- Next.js
- TypeScript
- Tailwind CSS
- Ollama como LLM local
- Modelo sugerido: llama3.2:3b
- Execução local, sem deploy obrigatório

Critérios obrigatórios relevantes nesta etapa:
- Criar a estrutura inicial funcional da aplicação
- Manter organização profissional de pastas
- Preparar a aplicação para futura integração com IA via Ollama
- Não usar resposta mockada como se fosse IA real
- Registrar este prompt no prompts.md

Tarefa atual:
Gerar a estrutura inicial do projeto Next.js no repositório atual.

A aplicação deve conter:
1. Página inicial com apresentação breve do IdeaCheck AI
2. Formulário para o usuário inserir uma ideia de negócio
3. Campo textarea para a ideia
4. Botão para solicitar análise
5. Estado de validação para impedir envio de ideia vazia
6. Estado visual de carregamento
7. Área para exibição futura do resultado da análise
8. Estrutura de componentes reutilizáveis
9. Estrutura preparada para futura rota `/api/analyze`
10. Estilização simples e profissional com Tailwind CSS

Arquivos e estrutura esperada:
- package.json
- tsconfig.json
- next.config.ts ou next.config.js
- app/
- app/page.tsx
- app/layout.tsx
- app/globals.css
- app/api/analyze/route.ts
- components/
- lib/
- types/
- prompts.md atualizado

A rota `app/api/analyze/route.ts` deve existir, mas ainda não deve implementar a chamada real ao Ollama nesta etapa.

Ela deve:
- aceitar requisições POST;
- validar se o campo `idea` foi enviado;
- retornar erro 400 se a ideia estiver vazia;
- retornar erro 501 informando que a integração com Ollama será implementada na próxima etapa;
- não retornar resposta mockada de IA.

Importante:
A integração real com Ollama será feita em uma etapa posterior. Nesta etapa, o foco é criar a base funcional e organizada da aplicação.

No frontend:
- O formulário deve chamar `/api/analyze`;
- Se a API retornar erro 400, exibir mensagem de validação;
- Se a API retornar erro 501, exibir uma mensagem clara informando que a integração com IA ainda será conectada na próxima etapa;
- O código deve estar preparado para exibir a análise quando a integração for implementada.

Atualize o arquivo `prompts.md` registrando este prompt seguindo a estrutura existente:
- Data
- Ferramenta utilizada: Codex CLI
- Etapa do desenvolvimento: Estrutura inicial do projeto
- Objetivo
- Prompt utilizado
- Resultado gerado

Restrições:
- Não apagar nem sobrescrever a documentação existente
- Não alterar o conteúdo de docs/PRD.md, docs/ARQUITETURA.md ou docs/FLUXOGRAMA.md, salvo correção mínima necessária
- Não implementar mock de resposta de IA
- Não implementar ainda a chamada real ao Ollama
- Não criar testes automatizados nesta etapa
- Não modificar README.md nesta etapa
- Manter textos da interface em português
- Usar TypeScript
- Manter o código simples, limpo e fácil de testar depois
- Evitar funcionalidades fora do escopo, como login, banco de dados, histórico ou dashboard

Ao final:
1. Informe quais arquivos foram criados ou alterados
2. Informe como executar a aplicação localmente
3. Sugira uma mensagem de commit curta seguindo Conventional Commits
```

- **Resultado gerado:** Criação da estrutura inicial Next.js com TypeScript e Tailwind CSS, página inicial com formulário, componentes reutilizáveis, tipos compartilhados, utilitários de API e rota `/api/analyze` preparada para futura integração com Ollama, retornando `400` para ideia vazia e `501` para integração ainda não implementada.

