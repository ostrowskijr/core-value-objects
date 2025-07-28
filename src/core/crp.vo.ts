export class CRP {
  private readonly valor: string;

  constructor(valor: string) {
    const padrao = /^\d{2}\/\d{2,6}$/;
    if (!padrao.test(valor)) throw new Error('CRP inválido.');
    this.valor = valor;
  }

  getValor(): string {
    return this.valor;
  }

  equals(outro: CRP): boolean {
    return this.valor === outro.getValor();
  }
}
