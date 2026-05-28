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
