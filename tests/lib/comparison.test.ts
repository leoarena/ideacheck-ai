import { describe, expect, it } from "vitest";
import { parseBusinessIdeaComparison, parseRecommendedIdea } from "@/lib/comparison";

const comparisonText = `1. Resumo comparativo: A ideia A é mais simples de validar, enquanto a ideia B depende de rede local.
2. Ideia recomendada: Ideia B
3. Justificativa da recomendação: A ideia B tem maior potencial de diferenciação se houver oferta inicial suficiente.
4. Vantagens da ideia A: Implantação rápida e problema operacional claro.
5. Vantagens da ideia B: Efeito de rede e apelo comunitário.
6. Riscos da ideia A: Mercado com soluções genéricas estabelecidas.
7. Riscos da ideia B: Aquisição simultânea de produtores e consumidores.
8. Diferenças de público-alvo: A ideia A atende restaurantes; a ideia B atende produtores e consumidores locais.
9. Próximos passos: Validar demanda com entrevistas e simular a operação manualmente.
10. Critérios comparativos: Ideia A 7/10; Ideia B 8/10.`;

describe("parseBusinessIdeaComparison", () => {
  it("extrai uma comparação estruturada a partir da resposta textual do modelo", () => {
    const comparison = parseBusinessIdeaComparison(comparisonText);

    expect(comparison).not.toBeNull();
    expect(comparison?.recommendedIdea).toBe("ideaB");
    expect(comparison?.comparativeSummary).toMatch(/mais simples de validar/i);
    expect(comparison?.ideaBAdvantages).toMatch(/efeito de rede/i);
    expect(comparison?.comparativeScores).toMatch(/ideia b 8\/10/i);
  });

  it("rejeita recomendações fora do formato esperado", () => {
    expect(parseRecommendedIdea("Talvez a alternativa intermediária")).toBeNull();
  });
});
