import { Cep } from "../src/core/cep.vo";
import { InvalidCepException } from "../src/exceptions/cep.exceptions";

describe("Cep", () => {
  it("deve aceitar CEP válido", () => {
    const cep = new Cep("87013001");
    expect(cep.getValue()).toBe("87013001");
    expect(cep.getValueFormatted()).toBe("87013-001");
    expect(cep.equals(new Cep("87013001"))).toBe(true);
  });

  it("deve lançar erro para CEP inválido", () => {
    expect(() => new Cep("0000000")).toThrow(InvalidCepException);
  });
});
