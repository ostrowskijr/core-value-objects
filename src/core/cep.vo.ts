export class Cep {
  private readonly valor: string;

  constructor(valor: string) {
    const limpo = valor.replace(/\D/g, '');
    if (!Cep.validar(limpo)) throw new Error('CEP inválido.');
    this.valor = limpo;
  }

  static validar(cep: string): boolean {
    return /^\d{8}$/.test(cep);
  }

  getLimpo(): string {
    return this.valor;
  }

  getFormatado(): string {
    return this.valor.replace(/(\d{5})(\d{3})/, '$1-$2');
  }

  equals(outro: Cep): boolean {
    return this.valor === outro.getLimpo();
  }
}
