export class InvalidUUIDException extends Error {
  constructor(message: string = "UUID inválido.") {
    super(message);
    this.name = "InvalidUUIDException";
  }
}
