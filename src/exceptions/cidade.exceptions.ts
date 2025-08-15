export class InvalidCidadeException extends Error {
  constructor(message: string = "Nome de cidade inválido.") {
    super(message);
    this.name = "InvalidCidadeException";
  }
}
