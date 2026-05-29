# IdeaCheck AI

Aplicação web local para análise inicial de ideias de negócio com apoio de IA via Ollama.

## Descrição Curta

O IdeaCheck AI permite que o usuário descreva uma ideia de negócio e receba uma análise estruturada gerada por um LLM local. A aplicação roda localmente com Next.js, TypeScript, Tailwind CSS e Ollama, sem necessidade de deploy obrigatório.

## Problema Resolvido

Pessoas em fase inicial de criação de negócios costumam ter dificuldade para organizar rapidamente uma ideia, entender o problema que ela resolve, identificar público-alvo, mapear concorrência básica e levantar pontos de atenção.

O IdeaCheck AI resolve esse problema como uma ferramenta de apoio exploratório: ele transforma uma descrição livre em uma análise estruturada, ajudando o usuário a refletir sobre riscos, próximos passos e viabilidade inicial.

## Como a IA Atua no Produto

A IA não foi usada apenas para gerar código durante o desenvolvimento. Ela tem papel funcional dentro da aplicação.

No fluxo principal:

1. O usuário informa uma ideia de negócio no formulário da aplicação.
2. O frontend envia a ideia para a rota local `/api/analyze`.
3. A rota monta um prompt estruturado em português.
4. A aplicação envia esse prompt para um LLM local via Ollama em `http://localhost:11434/api/generate`.
5. O modelo configurado retorna uma análise estruturada.
6. O frontend exibe o resultado para o usuário.

A análise retornada pela IA contém as seguintes seções implementadas:

- Problema que resolve.
- Público-alvo.
- Concorrência básica.
- Pontos de atenção.
- Próximos passos sugeridos.
- Nota inicial de viabilidade.

A resposta deve ser interpretada como apoio inicial à reflexão, não como validação definitiva de mercado.

## Funcionalidades Implementadas

- Página inicial com apresentação do IdeaCheck AI.
- Formulário para inserir uma ideia de negócio.
- Validação para impedir envio de ideia vazia.
- Estado visual de carregamento durante a análise.
- Rota local `/api/analyze` com validação de entrada.
- Integração real com Ollama local.
- Configuração do modelo via variável `OLLAMA_MODEL`.
- Exibição da análise estruturada retornada pela IA.
- Tratamento de erros para entrada inválida, Ollama indisponível e resposta inesperada.
- Testes automatizados com Vitest e React Testing Library.
- Registro versionado dos prompts usados no projeto.

## Tecnologias Utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- Ollama
- Modelo sugerido: `llama3.2:3b`
- Vitest
- React Testing Library
- jsdom
- Testing Library user-event

## Arquitetura Geral da Aplicação

A aplicação segue uma arquitetura simples para execução local:

- `app/page.tsx`: página inicial da aplicação.
- `components/`: componentes reutilizáveis de interface.
- `app/api/analyze/route.ts`: rota local responsável por validar a entrada e acionar a análise.
- `lib/`: funções auxiliares para chamada da API, integração com Ollama, parsing da resposta, mensagens, prompts e validações.
- `types/`: tipos TypeScript compartilhados.
- `tests/`: testes automatizados de componentes e rota.
- `docs/`: documentação de produto, arquitetura e fluxo.

A interface não chama o Ollama diretamente. O frontend envia a ideia para a API route local, e a rota de servidor centraliza a comunicação com o serviço local do Ollama.

## Fluxo de Funcionamento

1. O usuário acessa a aplicação localmente.
2. O usuário digita uma ideia de negócio no formulário.
3. O frontend valida se o campo foi preenchido.
4. O frontend envia a ideia para `/api/analyze`.
5. A API route valida novamente a entrada.
6. A aplicação monta o prompt de análise.
7. A rota chama o Ollama em `http://localhost:11434/api/generate`.
8. O Ollama executa o modelo `llama3.2:3b` ou o modelo definido em `OLLAMA_MODEL`.
9. O texto retornado pelo modelo é convertido em uma estrutura de análise.
10. A API retorna a análise ao frontend.
11. O frontend exibe as seções da análise para o usuário.

## Como Instalar o Projeto

Pré-requisitos:

- Node.js compatível com Next.js 15.
- npm.
- Ollama instalado na máquina.

Instale as dependências do projeto:

```bash
npm install
```

## Como Configurar e Rodar o Ollama

Em um terminal separado, inicie o serviço local do Ollama:

```bash
ollama serve
```

Se o Ollama já estiver rodando como serviço do sistema, esse comando pode não ser necessário.

## Como Baixar o Modelo `llama3.2:3b`

Baixe o modelo sugerido:

```bash
ollama pull llama3.2:3b
```

A aplicação usa `llama3.2:3b` como padrão. Também é possível definir o modelo por variável de ambiente:

```bash
OLLAMA_MODEL=llama3.2:3b npm run dev
```

## Como Executar a Aplicação Localmente

Com as dependências instaladas e o Ollama disponível, execute:

```bash
npm run dev
```

Acesse no navegador:

```text
http://localhost:3000
```

Se a porta `3000` estiver em uso, o Next.js poderá sugerir outra porta no terminal.

## Como Rodar os Testes Automatizados

Execute a suíte de testes:

```bash
npm test
```

Também existe um modo de observação para desenvolvimento:

```bash
npm run test:watch
```

## Como Verificar Cobertura de Testes

No estado atual do projeto, não há script de cobertura configurado no `package.json`.

A cobertura pode ser adicionada futuramente com a configuração apropriada do Vitest, mas neste momento os scripts reais disponíveis são:

```bash
npm test
npm run test:watch
```

## Estrutura de Pastas do Projeto

```text
.
├── app/
│   ├── api/
│   │   └── analyze/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AnalysisResult.tsx
│   ├── FormStatusMessage.tsx
│   ├── IdeaForm.tsx
│   └── IdeaTextarea.tsx
├── docs/
│   ├── ARQUITETURA.md
│   ├── FLUXOGRAMA.md
│   └── PRD.md
├── lib/
│   ├── analysis-service.ts
│   ├── analysis.ts
│   ├── api.ts
│   ├── messages.ts
│   ├── ollama.ts
│   ├── prompts.ts
│   └── validation.ts
├── tests/
│   ├── app/
│   │   └── analyze-route.test.ts
│   └── components/
│       └── IdeaForm.test.tsx
├── types/
│   ├── analyze.ts
│   ├── ollama.ts
│   └── ui.ts
├── prompts.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── vitest.config.ts
└── vitest.setup.ts
```

## Escolhas Técnicas

- **Next.js App Router:** usado para combinar frontend e rota local de servidor no mesmo projeto.
- **TypeScript:** usado para melhorar clareza de contratos entre UI, API, Ollama e testes.
- **Tailwind CSS:** usado para estilização simples, responsiva e adequada a um MVP.
- **Ollama local:** usado para cumprir o requisito de IA local sem depender de APIs externas pagas.
- **API route local:** usada para evitar que o frontend se comunique diretamente com o Ollama.
- **Separação em `lib/`:** concentra prompt, chamada ao Ollama, parsing da análise, mensagens e validações.
- **Testes com Vitest e React Testing Library:** cobrem comportamento da interface e cenários principais da rota.

## Limitações Conhecidas

- O Ollama precisa estar instalado e em execução localmente.
- O modelo `llama3.2:3b` precisa estar baixado ou o modelo alternativo deve ser configurado em `OLLAMA_MODEL`.
- O tempo de resposta depende do hardware local e do carregamento do modelo.
- A análise gerada pode ser incompleta, genérica ou imprecisa.
- A aplicação não realiza pesquisa real de mercado.
- A concorrência indicada pela IA deve ser validada manualmente.
- Não há autenticação, banco de dados, histórico ou dashboard nesta versão.
- Não há deploy obrigatório configurado.
- Não há script de cobertura de testes configurado no momento.

## Escopo Futuro

Possíveis evoluções:

- Histórico local de ideias analisadas.
- Exportação da análise em Markdown ou PDF.
- Comparação entre múltiplas ideias.
- Campos guiados para problema, público, solução e diferenciais.
- Configuração de modelo pela interface.
- Validação mais robusta da estrutura retornada pelo LLM.
- Streaming da resposta para melhorar percepção de desempenho.
- Cobertura de testes automatizados.
- Análises adicionais, como proposta de valor, monetização, canais e hipóteses críticas.

## Documentação Complementar

- [PRD do produto](docs/PRD.md)
- [Arquitetura técnica](docs/ARQUITETURA.md)
- [Fluxograma de funcionamento](docs/FLUXOGRAMA.md)
- [Registro de prompts](prompts.md)

## Evidências de Uso de IA no Desenvolvimento

O projeto mantém um registro versionado de prompts em [prompts.md](prompts.md). Esse arquivo documenta o uso de IA nas etapas de requisitos, arquitetura, fluxograma, estrutura inicial, integração com Ollama, testes automatizados, refatoração e documentação.

Além disso, a IA tem papel funcional no produto: a aplicação usa um LLM local via Ollama para gerar a análise da ideia de negócio informada pelo usuário.

## Execução Sem Deploy Obrigatório

Este projeto foi planejado para execução local. Não há exigência de deploy para validar o MVP. Para avaliação, basta instalar as dependências, iniciar o Ollama, baixar o modelo sugerido e executar a aplicação localmente.
