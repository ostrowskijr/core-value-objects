import { IValueObjects } from "../interface/vo.interface";

export class Logradouro implements IValueObjects<string> {
  private readonly value: string;

  constructor(value: string) {
    const trimmedValue = value.trim();
    if (!Logradouro.validate(trimmedValue)) {
      throw new Error('Logradouro inválido.');
    }
    this.value = trimmedValue;
  }

  static validate = (value: string): boolean => value.length >= 3;

  getValue = (): string => this.value;

  equals = (value: IValueObjects): boolean => value instanceof Logradouro && this.value.toLowerCase() === value.getValue().toLowerCase();
}
