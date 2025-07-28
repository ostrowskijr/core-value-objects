export class Email {
  private readonly valor: string;

  constructor(valor: string) {
    const emailLimpo = valor.trim().toLowerCase();

    if (!Email.validar(emailLimpo)) {
      throw new Error('E-mail inválido.');
    }

    this.valor = emailLimpo;
  }

  static validar(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return regex.test(email.trim().toLowerCase());
  }

  getValor(): string {
    return this.valor;
  }

  equals(outro: Email): boolean {
    return this.valor === outro.getValor();
  }
}
