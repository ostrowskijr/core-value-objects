export class InvalidNomeException extends Error {
  constructor(message: string = "Nome deve conter ao menos nome e sobrenome.") {
    super(message);
    this.name = "InvalidNomeException";
  }
}
