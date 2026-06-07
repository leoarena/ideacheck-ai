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
