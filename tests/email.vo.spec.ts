import { Email } from "../src/core/email.vo";
import { InvalidEmailException } from "../src/exceptions/email.exceptions";

describe("Email", () => {
  it("deve aceitar email válido", () => {
    const email = new Email("usuario@dominio.com");
    expect(email.getValue()).toBe("usuario@dominio.com");
  });

  it("deve limpar espaços e formatar para lowercase", () => {
    const email = new Email("  USUARIO@Dominio.com  ");
    expect(email.getValue()).toBe("usuario@dominio.com");
  });

  it("deve lançar erro para email inválido", () => {
    expect(() => new Email("email-invalido")).toThrow(InvalidEmailException);
  });

  it("deve comparar igualdade corretamente", () => {
    const e1 = new Email("EXEMPLO@teste.com");
    const e2 = new Email("exemplo@teste.com");
    expect(e1.equals(e2)).toBe(true);
  });
});
