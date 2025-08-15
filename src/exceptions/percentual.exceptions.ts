export class InvalidPercentualException extends Error {
  constructor(
    message: string = "Percentual não pode ser negativo ou maior que 100%."
  ) {
    super(message);
    this.name = "InvalidPercentualException";
  }
}
