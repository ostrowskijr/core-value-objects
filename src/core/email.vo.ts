import { IValueObjects } from "../interface/vo.interface";

export class Email implements IValueObjects<string> {
  private readonly valor: string;

  constructor(valor: string) {
    const emailLimpo = valor.trim().toLowerCase();

    if (!Email.validate(emailLimpo)) {
      throw new Error('E-mail inválido.');
    }

    this.valor = emailLimpo;
  }

  static validate(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return regex.test(email.trim().toLowerCase());
  }

  getValue(): string {
    return this.valor;
  }

  equals(value: IValueObjects): boolean {
    if (!(value instanceof Email)) {
      return false;
    }
    return this.valor === value.getValue();
  }
}
