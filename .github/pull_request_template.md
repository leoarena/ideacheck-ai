## Resumo do PR

Descreva de forma objetiva o que este Pull Request entrega e qual problema ele resolve no contexto do IdeaCheck AI.

## Alterações realizadas

- [ ] Código da aplicação
- [ ] Documentação
- [ ] Testes automatizados
- [ ] Configuração do projeto
- [ ] Refatoração
- [ ] Outro:

Detalhes:

-

## Como a IA atua no produto

O IdeaCheck AI usa IA como parte funcional da aplicação, não apenas como apoio ao desenvolvimento.

- O usuário informa uma ideia de negócio.
- A aplicação envia essa ideia para a rota local `/api/analyze`.
- A rota local monta um prompt estruturado em português.
- A aplicação chama um LLM local via Ollama.
- O modelo retorna uma análise estruturada com problema resolvido, público-alvo, concorrência básica, pontos de atenção, próximos passos sugeridos e nota inicial de viabilidade.

## Documentação impactada

- [ ] `README.md`
- [ ] `docs/PRD.md`
- [ ] `docs/ARQUITETURA.md`
- [ ] `docs/FLUXOGRAMA.md`
- [ ] `prompts.md`
- [ ] Nenhuma documentação impactada

Observações:

-

## Testes realizados

Marque os comandos executados e descreva resultados relevantes.

- [ ] `npm test`
- [ ] `npm run build`
- [ ] Teste manual da aplicação local
- [ ] Teste manual da integração com Ollama
- [ ] Não aplicável

Resultado:

-

## Como testar localmente

Instale as dependências:

```bash
npm install
```

Inicie o Ollama:

```bash
ollama serve
```

Baixe o modelo sugerido:

```bash
ollama pull llama3.2:3b
```

Execute a aplicação:

```bash
npm run dev
```

Execute os testes automatizados:

```bash
npm test
```

Opcionalmente, execute o build:

```bash
npm run build
```

## Evidências de uso de IA

- [ ] Prompt registrado em `prompts.md`
- [ ] IA usada em requisitos
- [ ] IA usada em código
- [ ] IA usada em refatoração
- [ ] IA usada em testes
- [ ] IA com papel funcional no produto via Ollama

Detalhes ou referência ao prompt:

-

## Checklist avaliativo

- [ ] `README.md` completo
- [ ] `docs/PRD.md` versionado
- [ ] Viabilidade documentada no PRD ou em documento equivalente
- [ ] Fluxograma versionado no repositório
- [ ] `prompts.md` com evidências dos prompts utilizados
- [ ] IA com papel funcional no produto
- [ ] Integração real com LLM local via Ollama
- [ ] Código-fonte versionado
- [ ] Pelo menos 5 testes automatizados
- [ ] Pull Request aberto com template completo
- [ ] Aplicação executável localmente
- [ ] Sem dependência de deploy obrigatório

## Limitações conhecidas

- A aplicação depende do Ollama instalado e em execução localmente.
- O modelo `llama3.2:3b` precisa estar disponível no ambiente local ou configurado por `OLLAMA_MODEL`.
- O tempo de resposta pode variar conforme o hardware local.
- A análise gerada pela IA é apoio exploratório e não substitui validação real de mercado.

Outras limitações deste PR:

-

## Observações adicionais

Inclua contexto adicional para revisão, decisões técnicas relevantes ou pontos que merecem atenção.

-
