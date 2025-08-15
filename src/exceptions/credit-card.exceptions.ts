export class InvalidCreditCardException extends Error {
  constructor(message: string = "Cartão de crédito inválido.") {
    super(message);
    this.name = "InvalidCreditCardException";
  }
}
