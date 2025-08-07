import { Percentual } from "../src/core/percentual.vo";

describe("Percentual", () => {
  it("deve criar percentual válido", () => {
    const percentual = new Percentual(25.5);
    expect(percentual.getValue()).toBeCloseTo(25.5);
    expect(percentual.getValueFormatted()).toBe("25.50%");
  });

  it("deve arredondar para 2 casas decimais", () => {
    const percentual = new Percentual(25.567);
    expect(percentual.getValue()).toBeCloseTo(25.57);
    expect(percentual.getValueFormatted()).toBe("25.57%");
  });

  it("deve aceitar percentual zero", () => {
    const percentual = new Percentual(0);
    expect(percentual.getValue()).toBe(0);
    expect(percentual.getValueFormatted()).toBe("0.00%");
  });

  it("deve aceitar percentual cem", () => {
    const percentual = new Percentual(100);
    expect(percentual.getValue()).toBe(100);
    expect(percentual.getValueFormatted()).toBe("100.00%");
  });

  it("deve lançar erro para percentual negativo", () => {
    expect(() => new Percentual(-1)).toThrow(
      "Percentual não pode ser negativo."
    );
  });

  it("deve lançar erro para percentual maior que 100", () => {
    expect(() => new Percentual(101)).toThrow(
      "Percentual não pode ser maior que 100%."
    );
  });

  it("deve validar percentual corretamente", () => {
    expect(Percentual.validate(0)).toBe(true);
    expect(Percentual.validate(50)).toBe(true);
    expect(Percentual.validate(100)).toBe(true);
    expect(Percentual.validate(-1)).toBe(false);
    expect(Percentual.validate(101)).toBe(false);
  });

  it("deve comparar percentuais corretamente", () => {
    const percentual1 = new Percentual(25.5);
    const percentual2 = new Percentual(25.5);
    const percentual3 = new Percentual(75.0);
    expect(percentual1.equals(percentual2)).toBe(true);
    expect(percentual1.equals(percentual3)).toBe(false);
  });
});
