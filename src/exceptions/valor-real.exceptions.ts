export class InvalidValorRealException extends Error {
  constructor(message: string = "Valor real inválido.") {
    super(message);
    this.name = "InvalidValorRealException";
  }
}
