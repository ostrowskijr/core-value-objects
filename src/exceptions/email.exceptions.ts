export class InvalidEmailException extends Error {
  constructor(message: string = "E-mail inválido.") {
    super(message);
    this.name = "InvalidEmailException";
  }
}
