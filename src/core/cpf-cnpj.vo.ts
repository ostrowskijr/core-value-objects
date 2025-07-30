import { IValueObjects } from "../interface/vo.interface";

export class CpfCnpj implements IValueObjects<string> {
  private readonly value: string;

  constructor(value: string) {
    const documentNumbers = value.replace(/\D/g, '');
    if (!CpfCnpj.validate(documentNumbers)) {
      throw new Error('CPF ou CNPJ inválido.');
    }
    this.value = documentNumbers;
  }

  private static validate(value: string): boolean {
    const documentNumbers = value.replace(/\D/g, '');
    if (documentNumbers.length === 11) {
      return this.validateCPF(documentNumbers);
    } else if (documentNumbers.length === 14) {
      return this.validateCNPJ(documentNumbers);
    }
    return false;
  }
  getValue = (): string => this.value;
  getValueFormatted = (): string => {
    if (this.value.length === 11) {
      return this.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    return this.value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }
  equals = (value: IValueObjects): boolean => this.value === value.getValue();

  private static validateCPF(cpf: string): boolean {
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf.charAt(10));
  }

  private static validateCNPJ(cnpj: string): boolean {
    if (/^(\d)\1{13}$/.test(cnpj)) return false;

    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    const digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(0))) return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    return resultado === parseInt(digitos.charAt(1));
  }
}
