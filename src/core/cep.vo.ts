import { IValueObjects } from "../interface/vo.interface";

export class Cep implements IValueObjects<string> {
  private readonly value: string;

  constructor(value: string) {
    const valueClean = value.replace(/\D/g, '');
    if (!Cep.validate(valueClean)) throw new Error('CEP inválido.');
    this.value = valueClean;
  }

  static validate(cep: string): boolean {
    return /^\d{8}$/.test(cep);
  }

  getValue(): string {
    return this.value;
  }

  getValueFormatted(): string {
    return this.value.replace(/(\d{5})(\d{3})/, '$1-$2');
  }

  equals(value: IValueObjects): boolean {
    return value instanceof Cep && this.value === value.getValue();
  }
}
