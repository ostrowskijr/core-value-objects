import { IValueObjects } from "../interface/vo.interface";

export class Email implements IValueObjects<string> {
  private readonly value: string;

  constructor(value: string) {
    if (!Email.validate(value.trim().toLowerCase())) throw new Error('E-mail inválido.');
    this.value = value.trim().toLowerCase();
  }
  static validate = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email.trim().toLowerCase());
  getValue = (): string => this.value;
  equals = (value: IValueObjects): boolean => value instanceof Email && this.value === value.getValue();
}
