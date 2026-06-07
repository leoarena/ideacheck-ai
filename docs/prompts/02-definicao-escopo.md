# Prompt 02 — Definição de escopo mínimo

## Objetivo
Escolher a menor evolução funcional coerente com o produto, definir dois cenários de uso e registrar limites explícitos.

## Prompt utilizado
````md
Atue como product engineer sênior especializado em definição de escopo, arquitetura de software e desenvolvimento incremental.

## Objetivo

Definir a menor evolução funcional coerente com o produto IdeaCheck AI, aproveitando a arquitetura existente e evitando complexidade desnecessária.

Esta etapa é exclusivamente de definição de escopo e documentação. Não implemente funcionalidades, não refatore código e não altere configurações.

## Regra de segurança

Antes de iniciar:

1. Execute `git branch --show-current`.
2. Confirme que a branch atual é `feature/especificacao-arquitetura`.
3. Caso esteja em outra branch, interrompa a execução e informe o problema.
4. Execute `git status --short`.
5. Não execute comandos destrutivos.
6. Não instale dependências.
7. Não altere arquivos existentes, exceto quando explicitamente permitido abaixo.

## Contexto obrigatório

Leia:

* `docs/prompts/01-diagnostico-arquitetura.md`
* `README.md`
* `AGENTS.md`, caso exista
* `package.json`
* documentação existente em `docs/`
* arquivos relevantes indicados no diagnóstico arquitetural

Use o diagnóstico já produzido como principal fonte de contexto.

## Critérios para escolher a evolução

A funcionalidade escolhida deve:

1. ser coerente com o propósito atual do IdeaCheck AI;
2. reaproveitar a arquitetura e os componentes existentes;
3. adicionar valor perceptível ao usuário;
4. possuir entrada definida;
5. produzir saída estruturada e validável;
6. permitir pelo menos dois cenários demonstráveis;
7. incluir lógica de negócio real;
8. ser testável;
9. evitar dependências novas, salvo necessidade claramente justificada;
10. evitar banco de dados, autenticação, deploy e integrações externas adicionais;
11. evitar mudanças amplas na interface;
12. preservar o comportamento atual.

## Processo de decisão

Antes de escolher a funcionalidade final:

1. Proponha no máximo três opções pequenas de evolução.
2. Compare as opções usando:

   * valor para o usuário;
   * complexidade técnica;
   * quantidade estimada de arquivos alterados;
   * risco de regressão;
   * facilidade de testes;
   * aderência à arquitetura atual.
3. Escolha somente uma opção.
4. Justifique objetivamente a decisão.
5. Liste funcionalidades descartadas e explique por que ficaram fora do escopo.

## Formato obrigatório da resposta

Produza uma resposta em Markdown com esta estrutura:

```md
# Definição de escopo da evolução

## 1. Resumo do produto atual
Descrição breve do comportamento existente que será preservado.

## 2. Opções avaliadas
Tabela com:
- opção;
- valor para o usuário;
- complexidade;
- arquivos provavelmente envolvidos;
- risco;
- facilidade de teste;
- decisão.

## 3. Funcionalidade escolhida
Descrição objetiva da única funcionalidade que será implementada.

## 4. Problema resolvido
Qual necessidade do usuário será atendida.

## 5. Comportamento esperado
Passo a passo do fluxo funcional.

## 6. Entrada
Campos, formato e validações esperadas.

## 7. Saída estruturada
Campos e formato da resposta esperada.

## 8. Regras de negócio
Lista objetiva das regras que devem ser implementadas.

## 9. Cenários de uso

### Cenário 1 — fluxo principal
- Contexto:
- Entrada:
- Resultado esperado:

### Cenário 2 — fluxo alternativo ou caso limite
- Contexto:
- Entrada:
- Resultado esperado:

## 10. Critérios de aceite
Lista verificável das condições necessárias para considerar a funcionalidade concluída.

## 11. Fora do escopo
Lista explícita das funcionalidades descartadas.

## 12. Arquivos provavelmente envolvidos
Tabela com:
- arquivo ou diretório;
- alteração provável;
- justificativa.

## 13. Testes mínimos necessários
Lista dos testes que deverão ser criados ou ajustados.

## 14. Riscos e mitigação
Tabela com:
- risco;
- impacto;
- mitigação.

## 15. Próximos passos
Lista ordenada das próximas atividades, sem implementar código.
```

## Documentação obrigatória

Crie ou atualize:

```text
docs/ESCOPO.md
```

Esse arquivo deve conter integralmente a definição de escopo produzida.

Crie também:

```text
docs/prompts/02-definicao-escopo.md
```

Esse arquivo deve conter exatamente esta estrutura:

```md
# Prompt 02 — Definição de escopo mínimo

## Objetivo
Escolher a menor evolução funcional coerente com o produto, definir dois cenários de uso e registrar limites explícitos.

## Prompt utilizado
Cole integralmente este prompt, sem resumir, omitir ou reformular trechos.

## Resposta gerada
Cole integralmente a definição de escopo produzida.

## Arquivos gerados ou alterados
- `docs/ESCOPO.md`
- `docs/prompts/02-definicao-escopo.md`

## Metadados
- Branch analisada:
- Data e horário:
- Comandos executados:

## Revisão humana
Aguardando revisão.
```

## Validação final

Após criar os arquivos:

1. Execute `git status --short`.
2. Confirme que somente estes arquivos foram criados ou alterados:

   * `docs/ESCOPO.md`
   * `docs/prompts/02-definicao-escopo.md`
3. Caso outro arquivo tenha sido alterado, reverta a alteração.
4. Exiba um resumo curto contendo:

   * funcionalidade escolhida;
   * justificativa;
   * dois cenários definidos;
   * itens explicitamente fora do escopo;
   * arquivos alterados.

Não implemente código nesta etapa.
````

## Resposta gerada
# Definição de escopo da evolução

## 1. Resumo do produto atual
O IdeaCheck AI é um MVP local em Next.js que permite ao usuário descrever uma ideia de negócio e solicitar uma análise gerada por um modelo local via Ollama. O fluxo atual será preservado: a interface valida ideia vazia, envia `POST /api/analyze`, a rota local monta o prompt, chama o Ollama, transforma a resposta em uma estrutura `BusinessIdeaAnalysis` e exibe seis seções na tela.

A evolução definida nesta etapa não altera a integração com o LLM, o formato da requisição para `/api/analyze`, o prompt atual, os estados de carregamento/erro/sucesso nem a apresentação principal da análise. O objetivo é acrescentar uma forma simples e estruturada de reaproveitar o resultado já gerado.

## 2. Opções avaliadas
| Opção | Valor para o usuário | Complexidade | Arquivos provavelmente envolvidos | Risco | Facilidade de teste | Decisão |
| --- | --- | --- | --- | --- | --- | --- |
| Copiar a análise em Markdown | Alto: permite salvar, compartilhar ou colar a análise em outro documento sem histórico ou banco de dados | Baixa | 3 a 5 arquivos | Baixo, pois usa apenas o objeto de análise já existente | Alta: função pura e mock de clipboard | Escolhida |
| Validar tamanho mínimo da ideia | Médio: reduz análises pobres para entradas vagas | Baixa | 3 a 5 arquivos | Médio, pois muda comportamento atual de validação e pode bloquear entradas antes aceitas | Alta | Descartada por alterar o fluxo de entrada atual sem evidência suficiente |
| Timeout explícito na chamada ao Ollama | Médio: melhora falha operacional quando o modelo trava ou demora demais | Média | 4 a 6 arquivos | Médio, pois mexe no fluxo server-side e em erros da integração | Média | Descartada por ser melhoria técnica importante, mas menos perceptível como evolução funcional |

## 3. Funcionalidade escolhida
A funcionalidade escolhida é **copiar a análise gerada em Markdown**.

Após uma análise bem-sucedida, a interface deverá oferecer uma ação discreta para copiar uma versão em Markdown da análise exibida. O conteúdo copiado deverá ser produzido a partir do objeto `BusinessIdeaAnalysis` já retornado pela API, mantendo ordem fixa das seções e formato determinístico.

## 4. Problema resolvido
Hoje o usuário consegue visualizar a análise, mas não há uma forma estruturada de reaproveitar o resultado fora da aplicação. Como o MVP não possui histórico, banco de dados ou exportação, o usuário precisa selecionar e copiar manualmente blocos da tela para guardar, compartilhar ou continuar a reflexão em outro lugar.

A evolução resolve esse problema com baixo custo técnico: transforma a saída estruturada existente em Markdown copiável, sem adicionar persistência, novas dependências ou integrações externas.

## 5. Comportamento esperado
1. O usuário informa uma ideia de negócio como no fluxo atual.
2. O usuário solicita a análise.
3. A aplicação mantém o fluxo existente de validação, chamada da API local, integração com Ollama e exibição do resultado.
4. Quando `analysis` existir e a aplicação não estiver em carregamento, a área de resultado exibe uma ação para copiar a análise em Markdown.
5. Ao acionar a cópia, a aplicação gera um texto Markdown determinístico com as seis seções exibidas.
6. A aplicação tenta gravar o Markdown no clipboard do navegador.
7. Em caso de sucesso, a interface informa que a análise foi copiada.
8. Em caso de falha de clipboard, a interface informa que não foi possível copiar naquele momento, sem apagar a análise nem alterar o fluxo principal.

## 6. Entrada
Entrada funcional da evolução:

```ts
BusinessIdeaAnalysis
```

Contrato reaproveitado:

```ts
interface BusinessIdeaAnalysis {
  problemResolved: string;
  targetAudience: string;
  basicCompetition: string;
  attentionPoints: string;
  nextSteps: string;
  viabilityScore: string;
  rawText: string;
}
```

Validações esperadas:

- A ação de copiar só deve ficar disponível quando houver um objeto `BusinessIdeaAnalysis`.
- A ação não deve ficar disponível durante o estado de carregamento.
- Cada campo textual deve ser tratado como string.
- Campos vazios devem receber fallback previsível no Markdown, sem quebrar a cópia.
- `rawText` não deve entrar na exportação padrão, pois a saída esperada pelo usuário são as seções estruturadas exibidas na interface.

## 7. Saída estruturada
Saída esperada no clipboard:

```md
# Análise da ideia

## Problema que resolve
<problemResolved ou fallback>

## Público-alvo
<targetAudience ou fallback>

## Concorrência básica
<basicCompetition ou fallback>

## Pontos de atenção
<attentionPoints ou fallback>

## Próximos passos sugeridos
<nextSteps ou fallback>

## Nota inicial de viabilidade
<viabilityScore ou fallback>
```

Formato de estado de UI sugerido para a ação:

```ts
type CopyStatus = "idle" | "success" | "error";
```

Mensagens esperadas:

- Sucesso: análise copiada em Markdown.
- Erro: não foi possível copiar a análise.

## 8. Regras de negócio
- A exportação deve ser gerada exclusivamente a partir de `BusinessIdeaAnalysis`.
- A ordem das seções deve ser fixa e igual à ordem exibida em `AnalysisResult`.
- O Markdown deve conter exatamente as seis seções estruturadas do resultado atual.
- A exportação padrão não deve incluir `rawText`.
- Campos vazios devem ser substituídos por `Não informado.` para manter saída legível e validável.
- A ação de cópia não deve disparar nova análise nem chamar `/api/analyze`.
- A ação de cópia não deve chamar o Ollama.
- A funcionalidade só deve aparecer quando houver análise gerada.
- Falha no clipboard deve ser tratada com mensagem na interface, preservando a análise exibida.
- O comportamento atual de envio, validação de ideia vazia, carregamento, erro de API e renderização das seções deve permanecer igual.

## 9. Cenários de uso

### Cenário 1 — fluxo principal
- Contexto: o usuário recebeu uma análise completa para uma ideia de negócio e deseja guardar o resultado em outro documento.
- Entrada: objeto `BusinessIdeaAnalysis` com os seis campos estruturados preenchidos.
- Resultado esperado: a ação de copiar fica disponível; ao acioná-la, o clipboard recebe um Markdown com título `# Análise da ideia` e as seis seções preenchidas na ordem definida; a interface informa sucesso.

### Cenário 2 — fluxo alternativo ou caso limite
- Contexto: o modelo retornou uma análise aceita pelo contrato da API, mas uma seção opcional, como `nextSteps` ou `viabilityScore`, veio como string vazia.
- Entrada: objeto `BusinessIdeaAnalysis` com pelo menos uma seção vazia.
- Resultado esperado: o Markdown ainda é gerado, a seção vazia aparece com `Não informado.`, a cópia não dispara nova análise e a interface continua exibindo a análise disponível.

## 10. Critérios de aceite
- A análise continua sendo gerada e exibida pelo fluxo atual sem mudança de contrato da API.
- A ação de copiar não aparece antes de existir análise.
- A ação de copiar não aparece ou fica indisponível durante carregamento.
- Dada uma análise completa, o Markdown gerado contém as seis seções na ordem definida.
- Dada uma seção vazia, o Markdown usa o fallback `Não informado.`.
- A cópia usa o clipboard do navegador e informa sucesso quando a operação resolve corretamente.
- Falhas no clipboard são tratadas com mensagem de erro sem remover a análise da tela.
- A funcionalidade não adiciona dependências.
- A funcionalidade não adiciona banco de dados, autenticação, deploy ou integração externa.
- Os testes existentes continuam válidos.
- Há testes mínimos cobrindo geração do Markdown e comportamento da ação de copiar.

## 11. Fora do escopo
- Exportação em PDF.
- Download de arquivo `.md`.
- Histórico local de análises.
- Persistência em banco de dados ou local storage.
- Compartilhamento por link.
- Envio por e-mail ou integração com ferramentas externas.
- Edição manual da análise antes de copiar.
- Inclusão da ideia original no Markdown, porque o contrato atual não preserva esse dado junto de `BusinessIdeaAnalysis`.
- Alteração do prompt enviado ao Ollama.
- Alteração do formato de resposta de `/api/analyze`.
- Validação adicional de tamanho mínimo da ideia.
- Timeout da chamada ao Ollama.
- Migração da resposta do LLM para JSON estruturado.
- Mudanças amplas de layout ou redesign da interface.

## 12. Arquivos provavelmente envolvidos
| Arquivo ou diretório | Alteração provável | Justificativa |
| --- | --- | --- |
| `lib/analysis-export.ts` | Criar função pura para converter `BusinessIdeaAnalysis` em Markdown | Isola a regra de negócio e facilita teste unitário. |
| `components/AnalysisResult.tsx` | Exibir ação de copiar quando houver análise e controlar feedback visual da cópia | O componente já é responsável por apresentar o resultado estruturado. |
| `lib/messages.ts` | Adicionar mensagens de sucesso e erro da cópia, se a implementação optar por centralizar textos | Mantém o padrão existente de mensagens compartilhadas. |
| `tests/lib/analysis-export.test.ts` | Criar testes da geração determinística do Markdown | Cobre a regra de negócio sem depender da UI. |
| `tests/components/IdeaForm.test.tsx` ou `tests/components/AnalysisResult.test.tsx` | Cobrir presença da ação e comportamento de clipboard com mock | Garante o comportamento demonstrável na interface. |

## 13. Testes mínimos necessários
- Teste unitário: dado um `BusinessIdeaAnalysis` completo, a função de exportação retorna Markdown com as seis seções na ordem correta.
- Teste unitário: dado um `BusinessIdeaAnalysis` com seção vazia, a função usa `Não informado.` como fallback.
- Teste de componente: antes de haver análise, a ação de copiar não está disponível.
- Teste de componente: após análise bem-sucedida, a ação de copiar aparece.
- Teste de componente: ao clicar na ação, `navigator.clipboard.writeText` recebe o Markdown esperado.
- Teste de componente: quando o clipboard falha, a interface exibe mensagem de erro e mantém a análise visível.

## 14. Riscos e mitigação
| Risco | Impacto | Mitigação |
| --- | --- | --- |
| Clipboard indisponível no navegador ou ambiente de teste | Usuário não consegue copiar mesmo com análise pronta | Tratar rejeição de `writeText` e exibir mensagem clara; mockar clipboard nos testes. |
| Duplicação da lista de seções entre renderização e exportação | Divergência de ordem ou títulos no futuro | Centralizar a definição das seções ou manter teste que valide ordem e títulos esperados. |
| UI ficar mais ruidosa | Pequena piora na simplicidade do MVP | Usar ação discreta somente quando houver análise, sem alterar o formulário principal. |
| Campos opcionais vazios gerarem Markdown confuso | Saída pouco útil para o usuário | Aplicar fallback `Não informado.`. |
| Testes de componente dependerem demais de detalhes visuais | Fragilidade na suíte | Testar por papel acessível/texto da ação e efeito no clipboard, não por classes CSS. |

## 15. Próximos passos
1. Submeter esta definição de escopo para revisão humana.
2. Confirmar a decisão de não incluir `rawText` nem a ideia original no Markdown.
3. Na próxima etapa, implementar uma função pura de exportação em `lib/analysis-export.ts`.
4. Adicionar testes unitários para a função de exportação.
5. Integrar a ação de copiar em `AnalysisResult`.
6. Adicionar testes de componente com mock de clipboard.
7. Executar `npm test` após a implementação futura.

## Arquivos gerados ou alterados
- `docs/ESCOPO.md`
- `docs/prompts/02-definicao-escopo.md`

## Metadados
- Branch analisada: `feature/especificacao-arquitetura`
- Data e horário: `2026-06-07 15:20:16 -03`
- Comandos executados:
  - `git branch --show-current`
  - `git status --short`
  - `sed -n '1,260p' docs/prompts/01-diagnostico-arquitetura.md`
  - `sed -n '1,260p' README.md`
  - `sed -n '1,220p' package.json`
  - `find docs -maxdepth 3 -type f -print`
  - `sed -n '260,620p' docs/prompts/01-diagnostico-arquitetura.md`
  - `sed -n '1,320p' docs/ARQUITETURA.md`
  - `sed -n '1,320p' docs/FLUXOGRAMA.md`
  - `sed -n '1,360p' docs/PRD.md`
  - `test -f AGENTS.md`
  - `sed -n '1,260p' components/AnalysisResult.tsx`
  - `sed -n '1,260p' components/IdeaForm.tsx`
  - `sed -n '1,240p' types/analyze.ts`
  - `sed -n '1,260p' lib/api.ts`
  - `sed -n '1,260p' tests/components/IdeaForm.test.tsx`
  - `date '+%Y-%m-%d %H:%M:%S %Z'`

## Revisão humana
Aguardando revisão.

## Refinamento humano

A primeira sugestão foi revisada porque “Copiar a análise em Markdown” não representa uma funcionalidade principal com lógica de negócio suficiente.

## Prompt de refinamento
````md
Revise a definição de escopo anteriormente gerada.

A opção escolhida anteriormente, “Copiar a análise em Markdown”, não deve ser tratada como funcionalidade principal. Ela pode permanecer apenas como melhoria secundária opcional de experiência do usuário.

## Objetivo

Atualizar a definição de escopo para incluir uma segunda funcionalidade principal com lógica de negócio real, coerente com o IdeaCheck AI e reaproveitando a arquitetura existente.

## Decisão funcional

Defina como segunda funcionalidade principal:

**Comparar duas ideias de negócio com suporte do modelo local.**

A funcionalidade deve:

1. receber duas ideias de negócio distintas;
2. validar que ambas foram preenchidas;
3. impedir a comparação de entradas idênticas;
4. reutilizar a integração existente com o modelo local;
5. gerar resposta estruturada e validável;
6. apresentar:

   * resumo comparativo;
   * ideia recomendada;
   * justificativa da recomendação;
   * vantagens de cada ideia;
   * riscos de cada ideia;
   * diferenças de público-alvo;
   * próximos passos;
   * notas individuais ou critérios comparativos;
7. preservar integralmente a análise individual já existente;
8. evitar banco de dados, autenticação, deploy e dependências desnecessárias.

## Cenários mínimos

Documente pelo menos estes cenários:

### Cenário 1 — Análise individual

O usuário envia uma única ideia e recebe uma análise estruturada de viabilidade.

### Cenário 2 — Comparação de ideias

O usuário envia duas ideias diferentes e recebe uma comparação estruturada com recomendação justificada.

Inclua também cenários de validação para:

* uma das ideias vazia;
* duas ideias idênticas.

## Fora do escopo

Registre explicitamente como fora do escopo:

* persistência em banco de dados;
* autenticação;
* histórico de análises;
* deploy;
* compartilhamento por link;
* integrações externas adicionais;
* interface avançada;
* geração de relatórios complexos.

A funcionalidade “Copiar análise em Markdown” pode ser listada apenas como melhoria opcional, sem prioridade sobre a comparação de ideias.

## Atualização da documentação

Atualize:

```text
docs/ESCOPO.md
```

Corrija também:

```text
docs/prompts/02-definicao-escopo.md
```

No arquivo do prompt:

1. preserve integralmente o prompt original;
2. preserve a resposta original;
3. adicione uma seção:

```md
## Refinamento humano

A primeira sugestão foi revisada porque “Copiar a análise em Markdown” não representa uma funcionalidade principal com lógica de negócio suficiente.

## Prompt de refinamento

[cole integralmente este prompt]

## Resposta refinada

[cole integralmente a nova definição de escopo]
```

## Validação final

Execute:

```bash
git status --short
```

Confirme que somente estes arquivos foram alterados:

```text
docs/ESCOPO.md
docs/prompts/02-definicao-escopo.md
```

Não implemente código nesta etapa.
````

## Resposta refinada
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
