import { IValueObjects } from "../interface/vo.interface";

export class Telefone implements IValueObjects<string> {
  private readonly value: string;

  constructor(value: string) {
    const numbers = value.replace(/\D/g, '');
    if (!Telefone.validar(numbers)) {
      throw new Error('Telefone inválido.');
    }
    this.value = numbers;
  }

  static validar(telefone: string): boolean {
    const regexCelular = /^(\d{2})(9\d{8})$/; // ex: 11987654321
    const regexFixo = /^(\d{2})([2-5]\d{7})$/; // ex: 1132345678
    return regexCelular.test(telefone) || regexFixo.test(telefone);
  }

  getValue = (): string => this.value;
  getValueFormatted = (): string => {
    const ddd = this.value.slice(0, 2);
    const numer = this.value.slice(2);
    if (numer.length === 9) {
      return `(${ddd}) ${numer.slice(0, 5)}-${numer.slice(5)}`;
    } else {
      return `(${ddd}) ${numer.slice(0, 4)}-${numer.slice(4)}`;
    }
  }
  equals = (value: IValueObjects): boolean => value instanceof Telefone && this.value === value.getValue();
}