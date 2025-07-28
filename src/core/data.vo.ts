import { format } from 'date-fns';

export class Data {
  private readonly valor: Date;

  constructor(data: string | Date) {
    if (typeof data === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(data)) {
      const [ano, mes, dia] = data.split('-').map(Number);
      this.valor = new Date(ano, mes - 1, dia); // modo local, evita timezone bug
    } else {
      const parsed = new Date(data);
      if (isNaN(parsed.getTime())) throw new Error('Data inválida.');
      this.valor = parsed;
    }
  }

  getData(): Date {
    return this.valor;
  }

  getFormatada(): string {
    return format(this.valor, 'dd/MM/yyyy');
  }

  equals(outro: Data): boolean {
    return this.valor.toISOString() === outro.getData().toISOString();
  }
}
