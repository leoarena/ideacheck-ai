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

### Prompt 004 - Integração real com IA via Ollama

- **Data:** 2026-05-28
- **Ferramenta utilizada:** Codex CLI
- **Etapa do desenvolvimento:** Integração real com IA
- **Objetivo:** Implementar a chamada real ao Ollama na rota `/api/analyze`, sem usar resposta mockada.
- **Prompt utilizado:**

````text
Você é um assistente sênior de engenharia de software especializado em Next.js, TypeScript, integração com LLMs locais e boas práticas de arquitetura.

Contexto:
Estou desenvolvendo um projeto avaliativo chamado IdeaCheck AI. A aplicação permite que o usuário informe uma ideia de negócio e receba uma análise estruturada gerada por IA.

Antes de executar a tarefa, leia os arquivos:

* docs/PRD.md
* docs/ARQUITETURA.md
* docs/FLUXOGRAMA.md
* prompts.md

Use esses arquivos como fonte de verdade para entender o escopo do projeto.

Tecnologias do projeto:

* Next.js
* TypeScript
* Tailwind CSS
* Ollama como LLM local
* Modelo sugerido: llama3.2:3b
* Execução local, sem deploy obrigatório

Tarefa atual:
Implementar a integração real com IA local via Ollama na rota `/api/analyze`.

A aplicação deve enviar a ideia de negócio informada pelo usuário para o Ollama e retornar uma análise estruturada contendo:

* problema que a ideia resolve;
* público-alvo;
* concorrência básica;
* pontos de atenção.

Também pode incluir, se fizer sentido:

* papel da IA na solução;
* próximos passos sugeridos;
* nota inicial de viabilidade.

Requisitos da implementação:

1. Atualizar `app/api/analyze/route.ts` para chamar o Ollama em:
   `http://localhost:11434/api/generate`

2. Usar o modelo:
   `llama3.2:3b`

3. Permitir configuração por variável de ambiente:
   `OLLAMA_MODEL=llama3.2:3b`

4. Validar a entrada:

   * se `idea` estiver ausente ou vazia, retornar erro 400;
   * se o Ollama estiver indisponível, retornar erro 503 com mensagem clara;
   * se houver erro inesperado, retornar erro 500.

5. Montar um prompt claro para o LLM, instruindo-o a responder em português e em formato estruturado.

6. Não usar resposta mockada.

7. Atualizar o frontend para:

   * enviar a ideia para `/api/analyze`;
   * exibir estado de carregamento;
   * exibir a análise retornada;
   * exibir mensagens de erro compreensíveis quando a API falhar.

8. Criar ou atualizar tipos TypeScript em `types/`, se necessário.

9. Criar funções auxiliares em `lib/`, se isso melhorar a organização do código.

10. Atualizar `prompts.md` registrando este prompt como uma nova entrada.

O prompt enviado ao Ollama deve orientar o modelo a retornar a análise com esta estrutura:

```text
Você é um analista de negócios especializado em validação inicial de ideias.

Analise a ideia de negócio abaixo e retorne uma resposta objetiva, em português, organizada nas seguintes seções:

1. Problema que resolve
2. Público-alvo
3. Concorrência básica
4. Pontos de atenção
5. Próximos passos sugeridos
6. Nota inicial de viabilidade de 0 a 10

Ideia de negócio:
[IDEIA_DO_USUARIO]
```

No arquivo `prompts.md`, registre este prompt seguindo a estrutura existente:

* Data
* Ferramenta utilizada: Codex CLI
* Etapa do desenvolvimento: Integração real com IA
* Objetivo: Implementar a chamada real ao Ollama
* Prompt utilizado
* Resultado gerado

Restrições:

* Não implementar testes automatizados nesta etapa
* Não modificar `README.md` nesta etapa
* Não alterar `docs/PRD.md`, `docs/ARQUITETURA.md` ou `docs/FLUXOGRAMA.md`, salvo correção mínima necessária
* Não criar login, banco de dados, histórico ou dashboard
* Não usar resposta mockada
* Não usar OpenAI API, Gemini API ou outra API externa
* Manter textos da interface em português
* Manter o código simples, legível e fácil de testar posteriormente
* Não expor detalhes técnicos desnecessários para o usuário final

Ao final:

1. Informe quais arquivos foram criados ou alterados
2. Informe como testar manualmente a integração com Ollama
3. Sugira uma mensagem de commit curta seguindo Conventional Commits
````

- **Resultado gerado:** Implementação da chamada real ao Ollama em `/api/analyze`, criação de funções auxiliares para prompt, cliente Ollama e parsing da análise, ampliação dos tipos TypeScript e atualização do frontend para exibir análise real ou mensagens de erro compreensíveis.

### Prompt 005 - Testes automatizados

- **Data:** 2026-05-29
- **Ferramenta utilizada:** Codex CLI
- **Etapa do desenvolvimento:** Testes automatizados
- **Objetivo:** Adicionar pelo menos 5 testes automatizados ao projeto.
- **Prompt utilizado:**

````text
Você é um assistente sênior de engenharia de software especializado em Next.js, TypeScript, testes automatizados, Vitest, React Testing Library e boas práticas de qualidade.

Contexto:
Estou desenvolvendo um projeto avaliativo chamado IdeaCheck AI. A aplicação permite que o usuário informe uma ideia de negócio e receba uma análise estruturada gerada por IA local via Ollama.

Antes de executar a tarefa, leia os arquivos:

* docs/PRD.md
* docs/ARQUITETURA.md
* docs/FLUXOGRAMA.md
* prompts.md
* package.json
* app/
* components/
* lib/
* types/

Use esses arquivos como fonte de verdade para entender o escopo e a estrutura atual do projeto.

Tecnologias do projeto:

* Next.js
* TypeScript
* Tailwind CSS
* Ollama como LLM local
* Modelo sugerido: llama3.2:3b
* Execução local, sem deploy obrigatório

Tarefa atual:
Adicionar pelo menos 5 testes automatizados ao projeto.

Requisitos:

1. Verifique a estrutura atual do projeto antes de alterar arquivos.
2. Se ainda não houver estrutura de testes, configure Vitest, React Testing Library e jsdom.
3. Adicione scripts de teste ao `package.json`, se necessário.
4. Crie pelo menos 5 testes automatizados cobrindo os principais comportamentos da aplicação.
5. Atualize `prompts.md` registrando este prompt como uma nova entrada.

Testes mínimos esperados:

1. Testar se o formulário principal da aplicação é renderizado.
2. Testar se o envio é impedido quando o campo de ideia está vazio.
3. Testar se a aplicação exibe estado de carregamento ao enviar uma ideia válida.
4. Testar se o frontend chama a rota `/api/analyze` com a ideia digitada.
5. Testar se a análise retornada pela API é exibida corretamente na interface.

Se a estrutura atual permitir, adicione também:
6. Teste da rota `/api/analyze` retornando erro 400 quando a ideia estiver vazia.
7. Teste da rota `/api/analyze` tratando erro quando o Ollama estiver indisponível.

Observações importantes:

* É permitido usar mocks nos testes para simular `fetch` e respostas da API.
* Não criar resposta mockada no comportamento de produção da aplicação.
* Não remover a integração real com Ollama.
* Não alterar o fluxo funcional da aplicação.
* Não modificar a documentação de produto, arquitetura ou fluxograma, salvo correção mínima necessária.
* Não criar login, banco de dados, histórico ou dashboard.
* Manter textos dos testes e descrições em português ou inglês de forma consistente.
* Manter o código simples, legível e fácil de manter.
* Priorizar testes estáveis, rápidos e objetivos.

Configuração esperada, se ainda não existir:

* `vitest`
* `@testing-library/react`
* `@testing-library/jest-dom`
* `@testing-library/user-event`
* `jsdom`

Scripts esperados no `package.json`, se ainda não existirem:

* `test`
* `test:watch`
* opcionalmente `test:coverage`

No arquivo `prompts.md`, registre este prompt seguindo a estrutura existente:

* Data
* Ferramenta utilizada: Codex CLI
* Etapa do desenvolvimento: Testes automatizados
* Objetivo: Adicionar pelo menos 5 testes automatizados ao projeto
* Prompt utilizado
* Resultado gerado

Ao final:

1. Informe quais arquivos foram criados ou alterados.
2. Informe o comando para rodar os testes.
3. Informe quantos testes foram adicionados.
4. Sugira uma mensagem de commit curta seguindo Conventional Commits.
````

- **Resultado gerado:** Configuração do Vitest com jsdom e React Testing Library, adição dos scripts `test` e `test:watch`, criação de 7 testes automatizados cobrindo formulário, validação de ideia vazia, estado de carregamento, chamada para `/api/analyze`, exibição da análise e erros da rota `/api/analyze`.

### Prompt 006 - Refatoração de organização e manutenção

- **Data:** 2026-05-29
- **Ferramenta utilizada:** Codex CLI
- **Etapa do desenvolvimento:** Refatoração
- **Objetivo:** Melhorar organização e legibilidade do código sem alterar comportamento.
- **Prompt utilizado:**

````text
Você é um assistente sênior de engenharia de software especializado em Next.js, TypeScript, refatoração, organização de código e boas práticas de manutenção.

Contexto:
Estou desenvolvendo um projeto avaliativo chamado IdeaCheck AI. A aplicação permite que o usuário informe uma ideia de negócio e receba uma análise estruturada gerada por IA local via Ollama.

Antes de executar a tarefa, leia os arquivos:
- docs/PRD.md
- docs/ARQUITETURA.md
- docs/FLUXOGRAMA.md
- prompts.md
- package.json
- app/
- components/
- lib/
- types/
- tests/, se existir

Use esses arquivos como fonte de verdade para entender o escopo e a estrutura atual do projeto.

Tecnologias do projeto:
- Next.js
- TypeScript
- Tailwind CSS
- Ollama como LLM local
- Modelo sugerido: llama3.2:3b
- Execução local, sem deploy obrigatório

Tarefa atual:
Refatorar o código da aplicação para melhorar organização, legibilidade, separação de responsabilidades e manutenibilidade, sem alterar o comportamento funcional existente.

Objetivos da refatoração:
1. Melhorar a organização dos componentes.
2. Separar responsabilidades entre interface, lógica de chamada da API e tipos.
3. Reduzir duplicação de código.
4. Melhorar nomes de funções, tipos e variáveis quando necessário.
5. Garantir que a integração com Ollama continue funcionando.
6. Garantir que os testes existentes continuem passando.
7. Atualizar `prompts.md` registrando este prompt como uma nova entrada.

Regras obrigatórias:
- Não alterar o escopo funcional da aplicação.
- Não adicionar novas funcionalidades.
- Não remover a integração real com Ollama.
- Não criar resposta mockada no código de produção.
- Não alterar o conteúdo de `docs/PRD.md`, `docs/ARQUITETURA.md` ou `docs/FLUXOGRAMA.md`, salvo correção mínima necessária.
- Não modificar `README.md` nesta etapa.
- Não criar login, banco de dados, histórico ou dashboard.
- Manter textos da interface em português.
- Manter o projeto simples e adequado a um MVP avaliativo.
- Preservar ou melhorar a tipagem TypeScript.
- Manter os testes automatizados funcionando.

Durante a refatoração, avalie se faz sentido:
- extrair funções auxiliares para `lib/`;
- centralizar tipos em `types/`;
- separar componentes menores em `components/`;
- simplificar a rota `app/api/analyze/route.ts`;
- melhorar tratamento de erros;
- melhorar clareza dos testes, se necessário, sem reduzir cobertura.

Após refatorar:
1. Rode ou indique o comando para rodar os testes.
2. Informe quais arquivos foram alterados.
3. Explique resumidamente quais melhorias foram feitas.
4. Atualize `prompts.md` com este prompt seguindo a estrutura existente:
   - Data
   - Ferramenta utilizada: Codex CLI
   - Etapa do desenvolvimento: Refatoração
   - Objetivo: Melhorar organização e legibilidade do código sem alterar comportamento
   - Prompt utilizado
   - Resultado gerado
5. Sugira uma mensagem de commit curta seguindo Conventional Commits.
````

- **Resultado gerado:** Refatoração do formulário, rota e helpers para separar chamada da API, mensagens, validação, serviço de análise via Ollama e componentes menores de interface; preservação do comportamento existente com testes e build passando.

### Prompt 007 - Documentação do README

- **Data:** 2026-05-29
- **Ferramenta utilizada:** Codex CLI
- **Etapa do desenvolvimento:** Documentação do README
- **Objetivo:** Criar um README completo descrevendo o projeto, tecnologias, execução, testes, escolhas técnicas e papel funcional da IA.
- **Prompt utilizado:**

````text
Você é um assistente sênior de engenharia de software especializado em documentação técnica, README profissional, Next.js, TypeScript, testes automatizados e aplicações com IA local.

Contexto:
Estou desenvolvendo um projeto avaliativo chamado IdeaCheck AI. A aplicação permite que o usuário informe uma ideia de negócio e receba uma análise estruturada gerada por IA local via Ollama.

Antes de executar a tarefa, leia os arquivos:

* docs/PRD.md
* docs/ARQUITETURA.md
* docs/FLUXOGRAMA.md
* prompts.md
* package.json
* app/
* components/
* lib/
* types/
* tests/, se existir

Use esses arquivos como fonte de verdade para documentar o projeto. Não invente funcionalidades que não existem no código atual.

Tecnologias do projeto:

* Next.js
* TypeScript
* Tailwind CSS
* Ollama como LLM local
* Modelo sugerido: llama3.2:3b
* Execução local, sem deploy obrigatório
* Testes automatizados com a stack já configurada no projeto

Tarefa atual:
Criar um `README.md` completo, claro e profissional para o projeto IdeaCheck AI.

O README deve conter obrigatoriamente:

1. Nome do projeto
2. Descrição curta
3. Problema resolvido
4. Como a IA atua no produto
5. Funcionalidades implementadas
6. Tecnologias utilizadas
7. Arquitetura geral da aplicação
8. Fluxo de funcionamento
9. Como instalar o projeto
10. Como configurar e rodar o Ollama
11. Como baixar o modelo `llama3.2:3b`
12. Como executar a aplicação localmente
13. Como rodar os testes automatizados
14. Como verificar cobertura de testes, se houver script configurado
15. Estrutura de pastas do projeto
16. Escolhas técnicas
17. Limitações conhecidas
18. Escopo futuro
19. Documentação complementar
20. Evidências de uso de IA no desenvolvimento
21. Observação sobre execução sem deploy obrigatório

A seção “Como a IA atua no produto” deve deixar claro que:

* A IA não foi usada apenas para gerar código.
* A IA tem papel funcional dentro da aplicação.
* O usuário envia uma ideia de negócio.
* A aplicação envia essa ideia para um LLM local via Ollama.
* O modelo retorna uma análise estruturada contendo:

  * problema que a ideia resolve;
  * público-alvo;
  * concorrência básica;
  * pontos de atenção;
  * próximos passos sugeridos;
  * nota inicial de viabilidade, se implementada.

A seção de execução local deve incluir comandos práticos, como:

* instalação das dependências;
* execução do Ollama;
* download do modelo;
* execução da aplicação;
* execução dos testes.

Inclua exemplos de comandos usando Markdown, por exemplo:

```bash
npm install
ollama serve
ollama pull llama3.2:3b
npm run dev
npm test
```

Se houver scripts reais no `package.json`, use exatamente os nomes existentes. Não invente scripts que não existem. Se não houver script de cobertura, apenas mencione que a cobertura é opcional ou que pode ser adicionada futuramente.

Inclua uma seção de documentação complementar com links relativos para:

* `docs/PRD.md`
* `docs/ARQUITETURA.md`
* `docs/FLUXOGRAMA.md`
* `prompts.md`

Atualize também o arquivo `prompts.md`, registrando este prompt como uma nova entrada seguindo a estrutura existente:

* Data
* Ferramenta utilizada: Codex CLI
* Etapa do desenvolvimento: Documentação do README
* Objetivo: Criar um README completo descrevendo o projeto, tecnologias, execução, testes, escolhas técnicas e papel funcional da IA
* Prompt utilizado
* Resultado gerado

Restrições:

* Não alterar código da aplicação nesta etapa, salvo correção mínima necessária para alinhar documentação a scripts reais.
* Não alterar testes nesta etapa.
* Não modificar `docs/PRD.md`, `docs/ARQUITETURA.md` ou `docs/FLUXOGRAMA.md`, salvo correção mínima de inconsistência evidente.
* Não inventar funcionalidades não implementadas.
* Não afirmar que existe deploy.
* Não afirmar que a aplicação usa OpenAI, Gemini ou outra API externa.
* Manter todo o README em português.
* Usar Markdown limpo, organizado e profissional.
* Priorizar clareza para avaliadores que irão rodar o projeto localmente.

Ao final:

1. Informe quais arquivos foram alterados.
2. Informe os principais comandos documentados no README.
3. Sugira uma mensagem de commit curta seguindo Conventional Commits.
````

- **Resultado gerado:** Criação de um README completo em português com descrição do projeto, papel funcional da IA, funcionalidades, arquitetura, fluxo, instalação, Ollama, execução local, testes, estrutura de pastas, escolhas técnicas, limitações, escopo futuro, documentação complementar e evidências de uso de IA; atualização deste registro em `prompts.md`.

### Prompt 008 - Template de Pull Request

- **Data:** 2026-05-29
- **Ferramenta utilizada:** Codex CLI
- **Etapa do desenvolvimento:** Template de Pull Request
- **Objetivo:** Criar um template completo de Pull Request para evidenciar critérios de entrega, testes, documentação e uso funcional de IA.
- **Prompt utilizado:**

````text
Você é um assistente sênior de engenharia de software especializado em GitHub, documentação técnica, revisão de código e boas práticas de Pull Requests.

Contexto:
Estou desenvolvendo um projeto avaliativo chamado IdeaCheck AI. A aplicação permite que o usuário informe uma ideia de negócio e receba uma análise estruturada gerada por IA local via Ollama.

Antes de executar a tarefa, leia os arquivos:

* README.md
* docs/PRD.md
* docs/ARQUITETURA.md
* docs/FLUXOGRAMA.md
* prompts.md
* package.json

Use esses arquivos como fonte de verdade para entender os critérios avaliativos e o estado atual do projeto.

Tarefa atual:
Criar um template completo de Pull Request para o repositório.

Arquivo a criar:

* `.github/pull_request_template.md`

O template deve conter seções para:

1. Resumo do PR
2. Alterações realizadas
3. Como a IA atua no produto
4. Documentação impactada
5. Testes realizados
6. Como testar localmente
7. Evidências de uso de IA
8. Checklist avaliativo
9. Limitações conhecidas
10. Observações adicionais

O checklist avaliativo deve incluir:

* README.md completo
* docs/PRD.md versionado
* Viabilidade documentada no PRD ou em documento equivalente
* Fluxograma versionado no repositório
* prompts.md com evidências dos prompts utilizados
* IA com papel funcional no produto
* Integração real com LLM local via Ollama
* Código-fonte versionado
* Pelo menos 5 testes automatizados
* Pull Request aberto com template completo
* Aplicação executável localmente
* Sem dependência de deploy obrigatório

Na seção “Como testar localmente”, inclua comandos como:

```bash
npm install
ollama serve
ollama pull llama3.2:3b
npm run dev
npm test
```

Se os scripts reais do `package.json` forem diferentes, use os scripts reais existentes.

Atualize também o arquivo `prompts.md`, registrando este prompt como uma nova entrada seguindo a estrutura existente:

* Data
* Ferramenta utilizada: Codex CLI
* Etapa do desenvolvimento: Template de Pull Request
* Objetivo: Criar um template completo de Pull Request para evidenciar critérios de entrega, testes, documentação e uso funcional de IA
* Prompt utilizado
* Resultado gerado

Restrições:

* Não alterar código da aplicação.
* Não alterar testes.
* Não alterar README.md nesta etapa.
* Não alterar arquivos em `docs/`, salvo se for absolutamente necessário corrigir inconsistência mínima.
* Não criar `docs/PULL_REQUEST.md`.
* Criar apenas um template reutilizável, não uma descrição de PR específica.
* Manter o conteúdo em português.
* Usar Markdown limpo e profissional.
* Não inventar funcionalidades que não existem no projeto.

Ao final:

1. Informe quais arquivos foram criados ou alterados.
2. Explique rapidamente como o template será usado ao abrir um PR no GitHub.
3. Sugira uma mensagem de commit curta seguindo Conventional Commits.
````

- **Resultado gerado:** Criação de `.github/pull_request_template.md` com seções reutilizáveis para resumo, alterações, papel funcional da IA, documentação, testes, execução local, evidências de IA, checklist avaliativo, limitações e observações; atualização deste registro em `prompts.md`.

