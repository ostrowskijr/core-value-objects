import { CreditCard } from "../src/core/credit-card.vo";
import { InvalidCreditCardException } from "../src/exceptions/credit-card.exceptions";

describe("CreditCard", () => {
  it("deve aceitar número válido de cartão", () => {
    const cc = new CreditCard("4111111111111111"); // Visa test card
    expect(cc.getValue()).toBe("4111111111111111");
    expect(cc.getValueFormatted()).toContain("4111");
  });

  it("deve lançar erro para número inválido de cartão", () => {
    expect(() => new CreditCard("1234567890123456")).toThrow(
      InvalidCreditCardException
    );
  });

  it("deve formatar número de cartão corretamente", () => {
    const cc = new CreditCard("4111111111111111");
    expect(cc.getValueFormatted()).toBe("4111 1111 1111 1111");
  });

  it("deve verificar igualdade entre cartões", () => {
    const cc1 = new CreditCard("4111111111111111");
    const cc2 = new CreditCard("4111111111111111");
    const cc3 = new CreditCard("5500000000000004"); // MasterCard test card
    expect(cc1.equals(cc2)).toBe(true);
    expect(cc1.equals(cc3)).toBe(false);
  });
});
