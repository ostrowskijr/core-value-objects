import { IValueObjects } from "../interface/vo.interface";

export class Crp implements IValueObjects<string> {
  private readonly value: string;

  constructor(value: string) {
    const valueClean = value.replace(/\D/g, '');
    if (!Crp.validate(valueClean)) throw new Error('CRP inválido.');
    this.value = valueClean;
  }

  private static validate = (crp: string): boolean => /^\d{2}\d{5}$/.test(crp);
  getValue = (): string => this.value;
  getValueFormatted = (): string => this.value.replace(/(\d{2})(\d{5})/, '$1/$2');
  equals = (value: IValueObjects): boolean => value instanceof Crp && this.value === value.getValue();
}
