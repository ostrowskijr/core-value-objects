export class InvalidCpfCnpjException extends Error {
  constructor(message: string = 'CPF ou CNPJ inválido.') {
    super(message);
    this.name = 'InvalidCpfCnpjException';
  }
}

export class InvalidCpfException extends Error {
  constructor(message: string = 'CPF inválido.') {
    super(message);
    this.name = 'InvalidCpfException';
  }
}

export class InvalidCnpjException extends Error {
  constructor(message: string = 'CNPJ inválido.') {
    super(message);
    this.name = 'InvalidCnpjException';
  }
}

export class InvalidDocumentLengthException extends Error {
  constructor(message: string = 'Documento deve ter 11 dígitos (CPF) ou 14 dígitos (CNPJ).') {
    super(message);
    this.name = 'InvalidDocumentLengthException';
  }
}
