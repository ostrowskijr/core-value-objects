export class InvalidUFException extends Error {
  constructor(message: string = "UF inválida.") {
    super(message);
    this.name = "InvalidUFException";
  }
}
