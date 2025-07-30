import { IValueObjects } from "../interface/vo.interface";

export class Cep implements IValueObjects<string> {
  private readonly value: string;

  constructor(value: string) {
    const valueClean = value.replace(/\D/g, '');
    if (!Cep.validate(valueClean)) throw new Error('CEP inválido.');
    this.value = valueClean;
  }
  private static validate = (cep: string): boolean => /^\d{8}$/.test(cep);
  getValue = (): string => this.value;
  getValueFormatted = (): string => this.value.replace(/(\d{5})(\d{3})/, '$1-$2');
  equals = (value: IValueObjects): boolean => value instanceof Cep && this.value === value.getValue();
}
