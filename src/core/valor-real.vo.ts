export class ValorReal {
  private readonly valor: number;

  constructor(valor: number) {
    if (valor < 0) throw new Error('Valor não pode ser negativo.');
    this.valor = parseFloat(valor.toFixed(2));
  }

  getValor(): number {
    return this.valor;
  }

  getFormatado(): string {
    return this.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  equals(outro: ValorReal): boolean {
    return this.valor === outro.getValor();
  }
}
