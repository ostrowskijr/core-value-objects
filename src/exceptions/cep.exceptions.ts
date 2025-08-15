export class InvalidCepException extends Error {
  constructor(message: string = "CEP inválido.") {
    super(message);
    this.name = "InvalidCepException";
  }
}

export class InvalidCepLengthException extends Error {
  constructor(message: string = "CEP deve ter 8 dígitos.") {
    super(message);
    this.name = "InvalidCepLengthException";
  }
}
