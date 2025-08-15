export class InvalidCRPException extends Error {
  constructor(message: string = "CRP inválido.") {
    super(message);
    this.name = "InvalidCRPException";
  }
}
