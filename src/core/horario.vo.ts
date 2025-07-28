export class Horario {
  private readonly valor: string;

  constructor(valor: string) {
    if (!Horario.validar(valor)) throw new Error('Horário inválido.');
    this.valor = valor;
  }

  static validar(horario: string): boolean {
    return /^([01]?\d|2[0-3]):[0-5]\d$/.test(horario);
  }

  getValor(): string {
    return this.valor;
  }

  equals(outro: Horario): boolean {
    return this.valor === outro.getValor();
  }
}
