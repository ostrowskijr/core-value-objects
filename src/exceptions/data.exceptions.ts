export class InvalidDataException extends Error {
  constructor(message: string = "Data inválida.") {
    super(message);
    this.name = "InvalidDataException";
  }
}
