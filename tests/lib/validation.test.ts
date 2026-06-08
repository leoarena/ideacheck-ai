import { describe, expect, it } from "vitest";
import { areIdeasEquivalent, normalizeIdeaInput } from "@/lib/validation";

describe("normalizeIdeaInput", () => {
  it("remove espaços extras nas extremidades de uma ideia", () => {
    expect(normalizeIdeaInput("  Marketplace para produtores locais  ")).toBe(
      "Marketplace para produtores locais"
    );
  });

  it("trata valores não textuais como entrada vazia", () => {
    expect(normalizeIdeaInput(null)).toBe("");
    expect(normalizeIdeaInput(123)).toBe("");
  });
});

describe("areIdeasEquivalent", () => {
  it("considera equivalentes ideias iguais após trim e sem diferenciar maiúsculas de minúsculas", () => {
    expect(areIdeasEquivalent("  Plataforma para restaurantes  ", "plataforma para restaurantes")).toBe(true);
  });

  it("não considera equivalentes ideias diferentes ou vazias", () => {
    expect(areIdeasEquivalent("App para restaurantes", "Marketplace para produtores locais")).toBe(false);
    expect(areIdeasEquivalent("", "  ")).toBe(false);
  });
});
