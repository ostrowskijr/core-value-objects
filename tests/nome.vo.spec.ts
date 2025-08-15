import { InvalidNomeException } from "../src/exceptions/nome.exceptions";
import { Nome } from "./../src/core/nome.vo";

describe("Nome", () => {
  describe("Validações de sucesso", () => {
    it("deve criar um nome válido com nome e sobrenome", () => {
      const nome = new Nome("João Silva");
      expect(nome.getValue()).toBe("João Silva");
    });

    it("deve criar um nome válido com nome, sobrenome e outros nomes", () => {
      const nome = new Nome("João da Silva");
      expect(nome.getValue()).toBe("João da Silva");
    });

    it("deve criar um nome válido com acentos", () => {
      const nome = new Nome("José de Souza");
      expect(nome.getValue()).toBe("José de Souza");
    });

    it("deve criar um nome válido com hífen", () => {
      const nome = new Nome("Maria-Luiza Santos");
      expect(nome.getValue()).toBe("Maria-Luiza Santos");
    });

    it("deve criar um nome válido com apóstrofo", () => {
      const nome = new Nome("João D'Ávila");
      expect(nome.getValue()).toBe("João D'Ávila");
    });

    it("deve criar um nome válido removendo espaços extras", () => {
      const nome = new Nome("  João   Silva  ");
      expect(nome.getValue()).toBe("João Silva");
    });
  });

  describe("Validações de erro", () => {
    it("deve lançar erro para nome com apenas uma palavra", () => {
      expect(() => new Nome("João")).toThrow(InvalidNomeException);
    });

    it("deve lançar erro para nome vazio", () => {
      expect(() => new Nome("")).toThrow(InvalidNomeException);
      expect(() => new Nome("   ")).toThrow(InvalidNomeException);
    });

    it("deve lançar erro para nome com apenas uma letra", () => {
      expect(() => new Nome("J Silva")).toThrow(InvalidNomeException);
      expect(() => new Nome("João S")).toThrow(InvalidNomeException);
    });

    it("deve lançar erro para nome com caracteres inválidos", () => {
      expect(() => new Nome("João123 Silva")).toThrow(InvalidNomeException);
      expect(() => new Nome("João Silva!")).toThrow(InvalidNomeException);
    });

    it("deve lançar erro para nome com apenas espaços, hífens ou apóstrofos", () => {
      expect(() => new Nome("- Silva")).toThrow(InvalidNomeException);
      expect(() => new Nome("João '")).toThrow(InvalidNomeException);
    });

    it("deve lançar erro para nome undefined ou null", () => {
      expect(() => new Nome(undefined as any)).toThrow(InvalidNomeException);
      expect(() => new Nome(null as any)).toThrow(InvalidNomeException);
    });
  });

  describe("Método equals", () => {
    it("deve comparar nomes corretamente", () => {
      const nome1 = new Nome("Maria da Silva");
      const nome2 = new Nome("Maria da Silva");
      expect(nome1.equals(nome2)).toBe(true);
    });

    it("deve retornar false para nomes diferentes", () => {
      const nome1 = new Nome("Maria da Silva");
      const nome2 = new Nome("João da Silva");
      expect(nome1.equals(nome2)).toBe(false);
    });
  });

  describe("Método validate estático", () => {
    it("deve validar nomes corretamente", () => {
      expect(Nome.validate("João Silva")).toBe(true);
      expect(Nome.validate("Maria da Silva")).toBe(true);
      expect(Nome.validate("José de Souza")).toBe(true);
    });

    it("deve rejeitar nomes inválidos", () => {
      expect(Nome.validate("João")).toBe(false);
      expect(Nome.validate("")).toBe(false);
      expect(Nome.validate("J Silva")).toBe(false);
      expect(Nome.validate("João123 Silva")).toBe(false);
    });
  });
});
