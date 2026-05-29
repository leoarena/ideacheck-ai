# Fluxograma de Funcionamento - IdeaCheck AI

**Status:** Planejamento técnico inicial  
**Data:** 2026-05-28  
**Base de referência:** `docs/PRD.md`

## 1. Descrição Textual do Fluxo Principal

O fluxo principal planejado para o IdeaCheck AI descreve como a ideia de negócio informada pelo usuário será enviada para análise local por IA e retornará como uma resposta estruturada.

1. Usuário acessa a aplicação localmente no navegador.
2. Usuário digita uma ideia de negócio no formulário principal.
3. Frontend valida se a entrada possui conteúdo mínimo.
4. Frontend envia a ideia para a rota local `/api/analyze`.
5. A rota local monta o prompt para o LLM com instruções de formato e idioma.
6. A rota local envia a requisição para `http://localhost:11434/api/generate`.
7. Ollama executa o modelo `llama3.2:3b` no ambiente local.
8. O LLM retorna uma análise estruturada.
9. A API route retorna a resposta ao frontend.
10. O frontend exibe a análise para o usuário em seções organizadas.

## 2. Fluxograma Principal da Aplicação

```mermaid
flowchart TD
    A[Usuário acessa a aplicação localmente] --> B[Usuário digita uma ideia de negócio]
    B --> C{Frontend valida a entrada}
    C -- Entrada válida --> D[Frontend envia POST para /api/analyze]
    C -- Entrada vazia --> V[Frontend exibe mensagem de validação]
    D --> E[API route local recebe a ideia]
    E --> F[API route monta o prompt para o LLM]
    F --> G[API route envia requisição para http://localhost:11434/api/generate]
    G --> H[Ollama executa o modelo llama3.2:3b]
    H --> I[LLM gera análise estruturada]
    I --> J[Ollama retorna a resposta para a API route]
    J --> K[API route retorna a análise ao frontend]
    K --> L[Frontend exibe problema, público-alvo, concorrência e pontos de atenção]
```

## 3. Fluxo de Erro Quando o Ollama Não Estiver Disponível

Quando o Ollama não estiver instalado, iniciado ou acessível em `http://localhost:11434`, a rota local deverá tratar a falha e retornar uma mensagem compreensível ao frontend. O usuário não deverá receber erro técnico bruto nem uma resposta parcial apresentada como análise válida.

```mermaid
flowchart TD
    A[Frontend envia POST para /api/analyze] --> B[API route monta o prompt]
    B --> C[API route tenta chamar http://localhost:11434/api/generate]
    C --> D{Ollama disponível?}
    D -- Sim --> E[Ollama processa a solicitação]
    E --> F[API route retorna análise ao frontend]
    D -- Não --> G[API route captura erro de conexão ou indisponibilidade]
    G --> H[API route retorna status de erro e mensagem clara]
    H --> I[Frontend encerra estado de carregamento]
    I --> J[Frontend informa que não foi possível conectar ao Ollama local]
```

## 4. Fluxo de Validação Para Ideia Vazia

Quando o usuário tenta solicitar análise sem preencher a ideia de negócio, o frontend deverá impedir o envio para `/api/analyze`. Essa validação reduz chamadas desnecessárias e melhora a clareza da experiência.

```mermaid
flowchart TD
    A[Usuário acessa a aplicação] --> B[Campo de ideia está vazio]
    B --> C[Usuário solicita análise]
    C --> D{Frontend identifica texto preenchido?}
    D -- Sim --> E[Frontend envia a ideia para /api/analyze]
    D -- Não --> F[Frontend bloqueia o envio]
    F --> G[Frontend exibe orientação para preencher a ideia]
    G --> H[Usuário pode editar o campo e tentar novamente]
```

## 5. Observações Para a Implementação

- A rota `/api/analyze` deverá validar a entrada mesmo que o frontend já tenha feito validação inicial.
- O endpoint do Ollama planejado é `http://localhost:11434/api/generate`.
- O modelo sugerido para o MVP é `llama3.2:3b`.
- A resposta esperada deverá manter as seções definidas no PRD: problema que a ideia resolve, público-alvo, concorrência básica e pontos de atenção.
- A documentação representa o planejamento técnico da próxima etapa e não afirma que a aplicação já está implementada.
