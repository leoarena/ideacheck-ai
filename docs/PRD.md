# PRD - IdeaCheck AI

**Versão:** 0.1  
**Data:** 2026-05-28  
**Status:** Planejamento inicial  
**Tipo de projeto:** Aplicação web avaliativa com execução local

## Histórico de Versões

| Versão | Data | Descrição |
| --- | --- | --- |
| 0.1 | 2026-05-28 | Criação inicial do Product Requirements Document. |

## 1. Nome do Produto

**IdeaCheck AI**

## 2. Visão Geral

O IdeaCheck AI será uma aplicação web local para apoiar a avaliação inicial de ideias de negócio. O usuário informará uma descrição livre da ideia e a aplicação retornará uma análise estruturada gerada por IA, cobrindo o problema resolvido, possível público-alvo, concorrência básica e pontos de atenção.

O projeto será desenvolvido com Next.js, TypeScript e Tailwind CSS. A integração com IA será feita localmente por meio do Ollama, utilizando preferencialmente o modelo `llama3.2:3b`. Não há obrigatoriedade de deploy nesta versão; a execução local faz parte do escopo planejado.

## 3. Problema Identificado

Pessoas em fase inicial de criação de negócios costumam ter ideias pouco estruturadas e dificuldade para avaliar rapidamente seus principais riscos, público-alvo e contexto competitivo. Esse processo geralmente exige pesquisa manual, conhecimento de mercado e organização analítica.

O IdeaCheck AI busca reduzir essa barreira inicial ao transformar uma ideia descrita em linguagem natural em uma análise objetiva e organizada, servindo como ponto de partida para reflexão e refinamento.

## 4. Público-Alvo

- Estudantes de tecnologia, negócios, empreendedorismo e inovação.
- Pessoas que desejam validar uma ideia de negócio em estágio inicial.
- Participantes de projetos acadêmicos, hackathons ou atividades avaliativas.
- Pequenos empreendedores que precisam de uma primeira leitura estruturada sobre uma ideia.

## 5. Objetivo do Produto

Criar uma ferramenta simples, local e acessível que permita ao usuário inserir uma ideia de negócio e receber uma análise inicial gerada por IA, com estrutura padronizada e linguagem clara.

O produto não pretende substituir validação real de mercado, pesquisa com usuários ou análise especializada. Seu objetivo é apoiar a organização inicial do pensamento e indicar aspectos que merecem investigação posterior.

## 6. Viabilidade

### Viabilidade Técnica

O produto é tecnicamente viável para um MVP local porque utiliza tecnologias consolidadas e adequadas ao escopo:

- Next.js para interface web e rotas de servidor.
- TypeScript para maior segurança de tipos e manutenção.
- Tailwind CSS para construção rápida e consistente da interface.
- Ollama para execução local de modelo de linguagem sem depender de APIs externas.
- Modelo `llama3.2:3b`, sugerido por equilibrar capacidade de resposta e consumo local de recursos.

### Viabilidade de Produto

O escopo inicial é limitado e mensurável: receber uma ideia textual, enviar o conteúdo para a IA local e exibir uma análise estruturada. Isso reduz complexidade de produto e permite validar o valor principal rapidamente.

### Viabilidade Operacional

A aplicação será executada localmente. O usuário precisará ter o Ollama instalado, o modelo configurado e a aplicação Next.js em execução. Não serão necessários deploy, autenticação, banco de dados ou infraestrutura externa nesta versão.

### Dependências Principais

- Ambiente Node.js compatível com Next.js.
- Ollama instalado e em execução local.
- Modelo `llama3.2:3b` disponível no ambiente local.
- Recursos de hardware suficientes para executar o modelo com tempo de resposta aceitável.

## 7. Papel Funcional da IA Dentro da Aplicação

A IA será o componente central de análise do IdeaCheck AI. Sua função será interpretar a ideia de negócio informada pelo usuário e produzir uma resposta organizada em seções predefinidas.

A IA deverá:

- Reescrever e interpretar a ideia de forma objetiva.
- Identificar o problema principal que a ideia tenta resolver.
- Sugerir possíveis segmentos de público-alvo.
- Apontar tipos de concorrentes ou alternativas existentes.
- Listar riscos, incertezas e pontos de atenção.
- Manter linguagem clara, direta e adequada a uma avaliação inicial.

A IA não deverá ser apresentada como fonte definitiva de verdade. A resposta gerada deverá ser tratada como apoio exploratório.

## 8. Estrutura da Análise Gerada pela IA

A resposta da IA deverá seguir uma estrutura fixa para facilitar leitura, comparação e testes automatizados.

### Problema que a ideia resolve

Descrição do problema, dor ou necessidade que a ideia busca atender. Deve explicar por que esse problema pode ser relevante para usuários ou clientes.

### Público-alvo

Identificação dos grupos de pessoas, empresas ou segmentos que poderiam se beneficiar da solução. Pode incluir perfis iniciais, contexto de uso e necessidades comuns.

### Concorrência básica

Mapeamento inicial de concorrentes diretos, indiretos ou alternativas que o público já utiliza para resolver o mesmo problema. Não deve ser tratado como pesquisa de mercado completa.

### Pontos de atenção

Lista de riscos, hipóteses, dependências, desafios técnicos, desafios comerciais ou aspectos que precisam de validação antes de evoluir a ideia.

## 9. Escopo do MVP

O MVP deverá contemplar:

- Interface web com campo para o usuário descrever uma ideia de negócio.
- Validação básica do texto informado.
- Botão para solicitar análise da IA.
- Integração local com Ollama.
- Uso do modelo `llama3.2:3b` como modelo sugerido.
- Exibição da resposta em seções estruturadas.
- Estados de carregamento, sucesso e erro.
- Tratamento de falhas comuns, como Ollama indisponível ou resposta inválida.
- Documentação inicial em `README.md`, `docs/PRD.md` e `prompts.md`.
- Fluxograma versionado em arquivo do repositório em etapa própria de documentação.
- Pelo menos 5 testes automatizados em código-fonte quando a implementação for iniciada.

## 10. Fora de Escopo Nesta Versão

Não fazem parte desta versão inicial:

- Deploy em ambiente de produção.
- Autenticação de usuários.
- Cadastro de contas.
- Persistência histórica das ideias analisadas.
- Banco de dados.
- Pagamentos ou planos de assinatura.
- Integração com APIs externas de pesquisa de mercado.
- Análise financeira detalhada.
- Ranking automático de ideias.
- Exportação em PDF ou formatos externos.
- Suporte a múltiplos modelos configuráveis pela interface.
- Colaboração em tempo real.

## 11. Requisitos Funcionais

| ID | Requisito |
| --- | --- |
| RF-01 | A aplicação deve permitir que o usuário informe uma ideia de negócio em um campo de texto. |
| RF-02 | A aplicação deve validar se o texto informado não está vazio antes de solicitar a análise. |
| RF-03 | A aplicação deve enviar a ideia informada para uma rota interna responsável pela comunicação com o Ollama. |
| RF-04 | A aplicação deve solicitar que a IA gere uma análise estruturada com as quatro seções definidas no PRD. |
| RF-05 | A aplicação deve exibir estado de carregamento enquanto aguarda a resposta da IA. |
| RF-06 | A aplicação deve exibir a análise retornada em formato legível e organizado. |
| RF-07 | A aplicação deve apresentar mensagem de erro quando não for possível obter resposta da IA. |
| RF-08 | A aplicação deve evitar apresentar respostas parciais como resultado válido quando a estrutura mínima não for atendida. |
| RF-09 | A aplicação deve manter os prompts utilizados documentados em `prompts.md`. |
| RF-10 | A aplicação deve ser acompanhada por testes automatizados cobrindo comportamento crítico do MVP. |

## 12. Requisitos Não Funcionais

| ID | Requisito |
| --- | --- |
| RNF-01 | A aplicação deve executar localmente em ambiente de desenvolvimento. |
| RNF-02 | A comunicação com IA deve ocorrer via Ollama local, sem dependência obrigatória de APIs pagas externas. |
| RNF-03 | O código deverá utilizar TypeScript. |
| RNF-04 | A interface deverá ser implementada com Tailwind CSS. |
| RNF-05 | A interface deverá ser responsiva para uso em desktop e telas menores. |
| RNF-06 | O sistema deverá tratar erros de rede local, modelo indisponível e resposta inesperada. |
| RNF-07 | O projeto deverá manter documentação clara sobre requisitos, prompts e justificativa do uso de IA. |
| RNF-08 | A aplicação deverá evitar armazenar dados do usuário nesta versão, reduzindo risco de privacidade. |
| RNF-09 | A experiência deverá priorizar clareza, tempo de resposta razoável e facilidade de uso. |
| RNF-10 | A estrutura de código deverá favorecer testes automatizados e manutenção. |

## 13. User Stories

### US-01 - Enviar ideia para análise

Como usuário com uma ideia de negócio inicial, quero informar minha ideia em um campo de texto para receber uma análise estruturada gerada por IA.

### US-02 - Entender riscos e público-alvo

Como usuário avaliando uma oportunidade, quero visualizar público-alvo, concorrência e pontos de atenção para decidir quais aspectos preciso investigar melhor.

### US-03 - Usar a ferramenta localmente

Como avaliador ou desenvolvedor do projeto, quero executar a aplicação localmente com Ollama para verificar a integração real com IA sem depender de deploy externo.

## 14. Critérios de Aceitação

- Dado que o usuário informa uma ideia válida, quando solicita a análise, então a aplicação deve enviar o texto para a integração com Ollama.
- Dado que o Ollama retorna uma resposta válida, quando a análise é exibida, então as seções "Problema que a ideia resolve", "Público-alvo", "Concorrência básica" e "Pontos de atenção" devem estar presentes.
- Dado que o campo de ideia está vazio, quando o usuário tenta solicitar análise, então a aplicação deve impedir o envio e orientar o preenchimento.
- Dado que o Ollama não está disponível, quando o usuário solicita análise, então a aplicação deve exibir uma mensagem de erro compreensível.
- Dado que a IA retorna conteúdo fora da estrutura esperada, quando a resposta é processada, então a aplicação deve tratar o caso sem quebrar a interface.
- Dado que a aplicação está em carregamento, quando a resposta ainda não chegou, então o usuário deve receber feedback visual de processamento.
- Dado que o projeto é avaliado, quando a documentação é revisada, então `docs/PRD.md` e `prompts.md` devem estar atualizados e versionados no repositório.

## 15. Fluxo Principal de Uso

1. O usuário acessa a aplicação localmente no navegador.
2. A interface exibe um campo para descrição da ideia de negócio.
3. O usuário escreve a ideia em linguagem natural.
4. O usuário aciona o comando para gerar análise.
5. A aplicação valida o preenchimento mínimo.
6. A aplicação envia a ideia para uma rota interna do Next.js.
7. A rota interna monta o prompt de análise e chama o Ollama local.
8. O Ollama processa a solicitação usando o modelo configurado.
9. A aplicação recebe a resposta e valida sua estrutura mínima.
10. A interface exibe a análise organizada em quatro seções.
11. Em caso de erro, a interface informa o problema de forma clara.

## 16. Integração com IA via Ollama

A integração planejada será feita por uma rota de servidor da aplicação Next.js, responsável por isolar a chamada ao Ollama da interface.

Configuração planejada:

- Provedor local: Ollama.
- Modelo sugerido: `llama3.2:3b`.
- Execução: local.
- Endpoint padrão esperado do Ollama: `http://localhost:11434`.
- Tipo de uso: geração de texto estruturado a partir de prompt controlado.

Responsabilidades da integração:

- Receber a ideia enviada pela interface.
- Montar o prompt final com instruções claras sobre formato e tom da resposta.
- Enviar a requisição ao Ollama local.
- Tratar indisponibilidade do serviço local.
- Retornar resposta estruturada para a interface.

O prompt deverá orientar a IA a responder em português, com seções fixas e sem prometer validação definitiva de mercado.

## 17. Limitações Conhecidas

- A qualidade da análise depende da clareza da ideia informada pelo usuário.
- O modelo local pode gerar respostas incompletas, genéricas ou imprecisas.
- A aplicação não realizará pesquisa real de mercado nesta versão.
- A concorrência indicada pela IA pode ser aproximada e deve ser validada manualmente.
- O tempo de resposta pode variar conforme hardware local e modelo utilizado.
- O uso local exige instalação e configuração prévia do Ollama.
- O produto não substitui entrevistas com usuários, testes de mercado ou consultoria especializada.

## 18. Riscos Técnicos

- Ollama não estar instalado, iniciado ou acessível no ambiente local.
- Modelo `llama3.2:3b` não estar baixado no computador do usuário.
- Respostas da IA não seguirem exatamente a estrutura solicitada.
- Tempo de resposta elevado em máquinas com poucos recursos.
- Dificuldade de testar comportamentos dependentes de IA de forma determinística.
- Possíveis diferenças de resposta entre versões do modelo.
- Falhas de tratamento de erro causarem experiência confusa na interface.

## 19. Métricas de Sucesso

Para o MVP, as métricas de sucesso serão avaliadas de forma prática:

- Usuário consegue executar a aplicação localmente seguindo a documentação.
- Usuário consegue enviar uma ideia e receber uma análise estruturada.
- A resposta da IA contém as quatro seções obrigatórias.
- O fluxo principal funciona sem necessidade de deploy externo.
- O projeto contém documentação atualizada de requisitos e prompts.
- O código-fonte, quando implementado, possui pelo menos 5 testes automatizados.
- Erros comuns de integração local são tratados com mensagens compreensíveis.

## 20. Justificativa do Uso de IA

A IA é justificada como parte essencial do produto porque o valor central do IdeaCheck AI está na capacidade de interpretar texto livre e gerar uma análise inicial organizada. Sem IA, a aplicação seria apenas um formulário estático ou checklist manual.

No processo de desenvolvimento, o uso de IA também será documentado para apoiar requisitos, código, refatoração e testes. Os prompts utilizados deverão ser registrados em `prompts.md`, permitindo rastreabilidade e avaliação do papel da IA no projeto.

## 21. Escopo Futuro

Possíveis evoluções após o MVP:

- Histórico local de ideias analisadas.
- Exportação da análise em Markdown ou PDF.
- Comparação entre múltiplas ideias.
- Campos guiados para segmento, problema, cliente e proposta de valor.
- Configuração de modelo de IA pela interface.
- Melhor validação da estrutura da resposta da IA.
- Sugestões de próximos experimentos de validação.
- Inclusão de matriz de riscos ou pontuação qualitativa.
- Suporte a análises mais profundas, como proposta de valor, canais, monetização e hipóteses críticas.
- Testes automatizados adicionais cobrindo integração simulada com Ollama.
