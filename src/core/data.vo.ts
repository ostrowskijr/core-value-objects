export class Data {
  private readonly valor: Date;

  constructor(data: string | Date) {
    const parsed = new Date(data);
    if (isNaN(parsed.getTime())) throw new Error('Data inválida.');
    this.valor = parsed;
  }

  getData(): Date {
    return this.valor;
  }

  getFormatada(): string {
    return this.valor.toLocaleDateString('pt-BR');
  }

  equals(outro: Data): boolean {
    return this.valor.toISOString() === outro.getData().toISOString();
  }
}
