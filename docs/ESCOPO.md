# Definição de escopo da evolução

## 1. Resumo do produto atual
O IdeaCheck AI é um MVP local em Next.js que permite ao usuário enviar uma única ideia de negócio e receber uma análise estruturada gerada por um modelo local via Ollama. O comportamento atual deve ser preservado integralmente: a interface valida ideia vazia, envia `POST /api/analyze`, a rota local monta o prompt, chama o Ollama, transforma a resposta em `BusinessIdeaAnalysis` e exibe as seções de resultado na tela.

A evolução definida neste refinamento adiciona uma segunda funcionalidade principal: **comparar duas ideias de negócio com suporte do modelo local**. Essa comparação deve reutilizar a arquitetura existente de API route, camada `lib/`, prompt estruturado, integração com Ollama, parsing/validação de resposta e tipos TypeScript. A melhoria “Copiar análise em Markdown” deixa de ser funcionalidade principal e passa a ser apenas uma melhoria secundária opcional de experiência do usuário.

## 2. Funcionalidades principais do escopo
| Funcionalidade | Situação | Objetivo | Prioridade |
| --- | --- | --- | --- |
| Análise individual de ideia | Existente e preservada | Gerar análise estruturada de viabilidade inicial para uma única ideia | Principal, já implementada |
| Comparação de duas ideias | Nova evolução funcional | Comparar duas ideias distintas e recomendar uma delas com justificativa estruturada | Principal, próxima evolução |
| Copiar análise em Markdown | Melhoria opcional | Facilitar reaproveitamento textual da análise ou comparação | Secundária, sem prioridade sobre comparação |

## 3. Funcionalidade escolhida
A funcionalidade escolhida é **comparar duas ideias de negócio com suporte do modelo local**.

O usuário deverá informar duas ideias distintas. A aplicação validará que ambas foram preenchidas, impedirá comparação de entradas idênticas e enviará as duas ideias para uma nova rotina de comparação apoiada pelo modelo local via Ollama. A resposta deverá ser estruturada, validável e adequada para ajudar o usuário a decidir qual ideia parece mais promissora para investigação inicial.

## 4. Problema resolvido
O produto atual ajuda o usuário a avaliar uma ideia isolada, mas não apoia uma decisão comum em fases iniciais: escolher entre duas alternativas de negócio. Sem uma comparação estruturada, o usuário precisa executar análises individuais separadas e inferir manualmente diferenças de público-alvo, riscos, vantagens e próximos passos.

A nova funcionalidade resolve esse problema ao transformar duas descrições livres em uma comparação organizada, com recomendação justificada e critérios explícitos. Isso adiciona lógica de negócio real ao produto sem exigir banco de dados, autenticação, deploy ou integrações externas adicionais.

## 5. Comportamento esperado
1. O usuário continua podendo executar a análise individual atual sem mudança de comportamento.
2. A interface passa a oferecer um fluxo de comparação de duas ideias.
3. O usuário informa `ideaA` e `ideaB`.
4. A aplicação normaliza ambas as entradas com a mesma regra de `trim` usada no fluxo individual.
5. Se uma das ideias estiver vazia, a comparação é bloqueada e uma mensagem clara é exibida.
6. Se as duas ideias forem idênticas após normalização, a comparação é bloqueada e uma mensagem informa que as ideias devem ser diferentes.
7. Se as duas ideias forem válidas e diferentes, a aplicação envia a solicitação para uma rota local de comparação.
8. A rota local valida novamente as entradas no servidor.
9. A camada de serviço monta um prompt comparativo em português.
10. A integração existente com Ollama é reutilizada para gerar a comparação com `stream: false`.
11. A resposta do modelo é transformada em uma estrutura de comparação validável.
12. A API retorna a comparação estruturada ao frontend.
13. A interface exibe resumo comparativo, ideia recomendada, justificativa, vantagens, riscos, diferenças de público-alvo, próximos passos e notas individuais ou critérios comparativos.
14. Erros de entrada, Ollama indisponível ou resposta fora do formato esperado são tratados sem afetar a análise individual existente.

## 6. Entrada
Entrada esperada no frontend:

```ts
{
  ideaA: string;
  ideaB: string;
}
```

Entrada esperada na API local de comparação:

```json
{
  "ideaA": "Aplicativo para pequenos restaurantes preverem demanda e reduzirem desperdício.",
  "ideaB": "Plataforma para conectar produtores locais a consumidores do bairro."
}
```

Validações esperadas:

- `ideaA` deve ser string preenchida após `trim`.
- `ideaB` deve ser string preenchida após `trim`.
- As duas ideias devem ser distintas após normalização.
- Entradas não string devem ser tratadas como vazias.
- A validação deve ocorrer no frontend para feedback rápido e na API route para proteger o contrato server-side.
- O fluxo de comparação não deve aceitar apenas uma ideia.
- O fluxo individual existente deve continuar aceitando uma única ideia no contrato atual `{ idea: string }`.

## 7. Saída estruturada
Saída esperada da API local de comparação:

```ts
interface BusinessIdeaComparison {
  comparativeSummary: string;
  recommendedIdea: "ideaA" | "ideaB" | "tie";
  recommendationJustification: string;
  ideaAAdvantages: string;
  ideaBAdvantages: string;
  ideaARisks: string;
  ideaBRisks: string;
  targetAudienceDifferences: string;
  nextSteps: string;
  comparativeScores: string;
  rawText: string;
}
```

Resposta HTTP de sucesso:

```json
{
  "comparison": {
    "comparativeSummary": "Resumo objetivo da comparação.",
    "recommendedIdea": "ideaA",
    "recommendationJustification": "Justificativa da recomendação.",
    "ideaAAdvantages": "Vantagens da primeira ideia.",
    "ideaBAdvantages": "Vantagens da segunda ideia.",
    "ideaARisks": "Riscos da primeira ideia.",
    "ideaBRisks": "Riscos da segunda ideia.",
    "targetAudienceDifferences": "Diferenças entre os públicos-alvo.",
    "nextSteps": "Próximos passos sugeridos.",
    "comparativeScores": "Notas individuais ou critérios comparativos.",
    "rawText": "Resposta original do modelo."
  }
}
```

Resposta HTTP de erro:

```json
{
  "error": "Mensagem em português"
}
```

## 8. Regras de negócio
- A análise individual atual deve ser preservada integralmente.
- A comparação deve receber exatamente duas ideias.
- As duas ideias devem ser normalizadas antes da validação.
- A comparação deve ser bloqueada quando `ideaA` estiver vazia.
- A comparação deve ser bloqueada quando `ideaB` estiver vazia.
- A comparação deve ser bloqueada quando `ideaA` e `ideaB` forem idênticas após normalização.
- A comparação deve reutilizar a integração local com Ollama, sem adicionar provedor externo.
- A comparação deve usar prompt próprio, separado do prompt de análise individual.
- A resposta da comparação deve ser estruturada em campos conhecidos.
- A API deve rejeitar resposta do modelo que não contenha a estrutura mínima esperada.
- A recomendação deve indicar `ideaA`, `ideaB` ou `tie`.
- A recomendação deve vir acompanhada de justificativa textual.
- A comparação deve apresentar vantagens e riscos de cada ideia separadamente.
- A comparação deve explicitar diferenças de público-alvo.
- A comparação deve apresentar próximos passos acionáveis.
- A comparação deve apresentar notas individuais ou critérios comparativos.
- A funcionalidade não deve persistir ideias ou resultados.
- A funcionalidade não deve exigir autenticação.
- A funcionalidade não deve alterar o contrato existente de `/api/analyze`.

## 9. Cenários de uso

### Cenário 1 — Análise individual
- Contexto: o usuário quer avaliar uma única ideia de negócio, como já ocorre no produto atual.
- Entrada: `{ "idea": "Aplicativo para pequenos restaurantes preverem demanda e reduzirem desperdício." }`
- Resultado esperado: a aplicação mantém o fluxo atual e retorna uma análise estruturada com problema resolvido, público-alvo, concorrência básica, pontos de atenção, próximos passos sugeridos e nota inicial de viabilidade.

### Cenário 2 — Comparação de ideias
- Contexto: o usuário tem duas ideias diferentes e quer decidir qual investigar primeiro.
- Entrada: `{ "ideaA": "Aplicativo para pequenos restaurantes preverem demanda e reduzirem desperdício.", "ideaB": "Plataforma para conectar produtores locais a consumidores do bairro." }`
- Resultado esperado: a aplicação retorna uma comparação estruturada com resumo comparativo, ideia recomendada, justificativa, vantagens de cada ideia, riscos de cada ideia, diferenças de público-alvo, próximos passos e notas individuais ou critérios comparativos.

### Cenário 3 — Uma das ideias vazia
- Contexto: o usuário tenta comparar duas ideias, mas deixa um dos campos em branco.
- Entrada: `{ "ideaA": "Aplicativo para pequenos restaurantes preverem demanda.", "ideaB": "" }`
- Resultado esperado: a comparação é bloqueada antes de chamar o modelo local; a interface exibe mensagem informando que as duas ideias devem ser preenchidas; nenhuma chamada ao Ollama é realizada.

### Cenário 4 — Duas ideias idênticas
- Contexto: o usuário preenche os dois campos com o mesmo texto, incluindo variações irrelevantes de espaço.
- Entrada: `{ "ideaA": "Marketplace para produtores locais", "ideaB": "  Marketplace para produtores locais  " }`
- Resultado esperado: a comparação é bloqueada após normalização; a interface informa que as ideias devem ser diferentes; nenhuma chamada ao Ollama é realizada.

## 10. Critérios de aceite
- O fluxo de análise individual existente continua funcionando sem alteração de contrato.
- A comparação possui uma entrada própria com `ideaA` e `ideaB`.
- A comparação valida que as duas ideias foram preenchidas.
- A comparação impede entradas idênticas após normalização.
- Entradas inválidas não disparam chamada ao Ollama.
- Entradas válidas disparam chamada ao modelo local via a mesma integração base usada pela análise individual.
- A resposta de sucesso contém `comparison`.
- `comparison` contém resumo comparativo, recomendação, justificativa, vantagens, riscos, diferenças de público-alvo, próximos passos, notas ou critérios e `rawText`.
- A recomendação aceita apenas `ideaA`, `ideaB` ou `tie`.
- Resposta incompleta ou fora do formato esperado é tratada como erro.
- Erros de Ollama indisponível são apresentados de forma clara.
- A funcionalidade não adiciona dependências.
- A funcionalidade não adiciona banco de dados, autenticação, deploy ou integrações externas adicionais.
- A melhoria “Copiar análise em Markdown” não bloqueia nem antecede a implementação da comparação.
- Testes mínimos cobrem sucesso, validações e erro de integração.

## 11. Fora do escopo
- Persistência em banco de dados.
- Autenticação.
- Histórico de análises.
- Deploy.
- Compartilhamento por link.
- Integrações externas adicionais.
- Interface avançada.
- Geração de relatórios complexos.
- Ranking de mais de duas ideias.
- Comparação em lote.
- Salvamento automático no navegador.
- Exportação em PDF.
- Download de arquivos.
- Dashboard.
- Configuração de modelo pela interface.
- Pesquisa real de mercado.
- Alteração da análise individual existente.
- Migração obrigatória da resposta do LLM para JSON nesta etapa.
- “Copiar análise em Markdown” como funcionalidade principal; ela fica apenas como melhoria opcional futura de experiência do usuário.

## 12. Arquivos provavelmente envolvidos
| Arquivo ou diretório | Alteração provável | Justificativa |
| --- | --- | --- |
| `app/api/compare/route.ts` | Criar rota local para comparação | Mantém o padrão server-side de isolar chamadas ao Ollama. |
| `components/ComparisonForm.tsx` | Criar formulário para duas ideias e estados de comparação | Evita misturar fluxo individual e comparativo em um componente único grande. |
| `components/ComparisonResult.tsx` | Criar renderização estruturada da comparação | Separa apresentação da comparação da análise individual. |
| `components/IdeaTextarea.tsx` | Reaproveitar textarea existente para `ideaA` e `ideaB` | Mantém consistência visual e reduz duplicação. |
| `app/page.tsx` | Integrar o fluxo de comparação à página atual | Disponibiliza a nova funcionalidade preservando a análise individual. |
| `lib/comparison-service.ts` | Orquestrar prompt, chamada ao Ollama, parsing e validação da comparação | Repete o padrão já usado em `analysis-service.ts`. |
| `lib/comparison.ts` | Parsear e validar campos da resposta comparativa | Centraliza lógica de negócio e validação estrutural. |
| `lib/prompts.ts` | Adicionar builder de prompt comparativo | Mantém prompts centralizados. |
| `lib/api.ts` | Adicionar cliente browser para a rota de comparação | Reaproveita padrão de chamada e tratamento de resposta. |
| `lib/messages.ts` | Adicionar mensagens de validação e erro da comparação | Mantém mensagens centralizadas. |
| `lib/validation.ts` | Reaproveitar normalização e, se necessário, adicionar helper de comparação | Evita regras duplicadas de trim e igualdade. |
| `types/analyze.ts` ou `types/compare.ts` | Definir contratos de request/response da comparação | Garante contratos TypeScript explícitos e testáveis. |
| `tests/app/compare-route.test.ts` | Cobrir rota de comparação | Testa validações server-side e erros de integração. |
| `tests/components/ComparisonForm.test.tsx` | Cobrir comportamento da interface de comparação | Garante cenários demonstráveis no frontend. |
| `tests/lib/comparison.test.ts` | Cobrir parsing e validação da comparação | Reduz risco de resposta incompleta do LLM. |

## 13. Testes mínimos necessários
- Teste de componente: análise individual atual continua renderizando e enviando uma única ideia.
- Teste de componente: comparação bloqueia envio quando `ideaA` está vazia.
- Teste de componente: comparação bloqueia envio quando `ideaB` está vazia.
- Teste de componente: comparação bloqueia envio quando as ideias são idênticas após normalização.
- Teste de componente: comparação envia `ideaA` e `ideaB` normalizadas quando ambas são válidas e diferentes.
- Teste de componente: comparação exibe resumo, recomendação, justificativa, vantagens, riscos, diferenças de público-alvo, próximos passos e notas.
- Teste de rota: `POST /api/compare` retorna `400` quando uma ideia está vazia.
- Teste de rota: `POST /api/compare` retorna `400` quando as ideias são idênticas.
- Teste de rota: `POST /api/compare` retorna `503` quando o Ollama está indisponível.
- Teste de rota: `POST /api/compare` retorna `500` quando a resposta do modelo não possui estrutura mínima.
- Teste de serviço/parser: resposta comparativa válida é convertida para `BusinessIdeaComparison`.
- Teste de serviço/parser: recomendação fora de `ideaA`, `ideaB` ou `tie` é rejeitada ou normalizada de forma previsível.

## 14. Riscos e mitigação
| Risco | Impacto | Mitigação |
| --- | --- | --- |
| A resposta comparativa do LLM variar demais | Parser pode rejeitar respostas úteis ou aceitar respostas incompletas | Definir prompt com seções fixas, aliases controlados e testes com amostras representativas. |
| Comparação aumentar complexidade visual da página | Interface pode ficar confusa se os dois fluxos competirem por atenção | Separar análise individual e comparação em áreas ou abas simples, sem redesign avançado. |
| Duplicação entre análise e comparação | Serviços e parsers podem divergir em padrões de erro | Reaproveitar `generateTextWithOllama`, mensagens e validação comum; criar abstrações só quando reduzirem duplicação real. |
| Comparação parecer validação definitiva de mercado | Usuário pode interpretar recomendação como decisão objetiva | Manter linguagem de apoio exploratório e exigir justificativa, riscos e próximos passos. |
| Ideias quase iguais passarem pela validação | Comparações pouco úteis podem chegar ao modelo | Nesta etapa, bloquear apenas igualdade normalizada; validação semântica fica fora do escopo. |
| Recomendação do modelo ser inconsistente com a justificativa | Resultado pode gerar baixa confiança | Exigir campos separados de recomendação e justificativa; cobrir estrutura mínima em testes. |
| Integração com Ollama continuar sujeita a indisponibilidade | Comparação pode falhar em ambientes sem modelo local | Reutilizar tratamento de erro existente e mensagens claras. |

## 15. Próximos passos
1. Revisar e aprovar este escopo refinado.
2. Definir o contrato TypeScript definitivo de `BusinessIdeaComparison`.
3. Especificar o prompt comparativo em `lib/prompts.ts`.
4. Implementar validações compartilhadas para duas ideias.
5. Criar a rota local `POST /api/compare`.
6. Implementar serviço e parser de comparação.
7. Criar componentes de formulário e resultado da comparação.
8. Adicionar testes mínimos de validação, sucesso e erro.
9. Executar `npm test` após a implementação futura.
10. Considerar “Copiar análise em Markdown” apenas depois que a comparação estiver implementada e validada.
