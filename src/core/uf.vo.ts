const UF_LIST = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

export class UF {
  private readonly valor: string;

  constructor(valor: string) {
    const uf = valor.trim().toUpperCase();
    if (!UF_LIST.includes(uf)) throw new Error('UF inválido.');
    this.valor = uf;
  }

  getValor(): string {
    return this.valor;
  }

  equals(outro: UF): boolean {
    return this.valor === outro.getValor();
  }
}
