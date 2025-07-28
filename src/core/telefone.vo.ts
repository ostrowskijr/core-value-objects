export class Telefone {
  private readonly valor: string;

  constructor(valor: string) {
    const somenteNumeros = valor.replace(/\D/g, '');

    if (!Telefone.validar(somenteNumeros)) {
      throw new Error('Telefone inválido.');
    }

    this.valor = somenteNumeros;
  }

  static validar(telefone: string): boolean {
    const regexCelular = /^(\d{2})(9\d{8})$/; // ex: 11987654321
    const regexFixo = /^(\d{2})([2-5]\d{7})$/; // ex: 1132345678
    return regexCelular.test(telefone) || regexFixo.test(telefone);
  }

  getLimpo(): string {
    return this.valor;
  }

  getFormatado(): string {
    const ddd = this.valor.slice(0, 2);
    const numero = this.valor.slice(2);

    if (numero.length === 9) {
      return `(${ddd}) ${numero.slice(0, 5)}-${numero.slice(5)}`;
    } else {
      return `(${ddd}) ${numero.slice(0, 4)}-${numero.slice(4)}`;
    }
  }

  equals(outro: Telefone): boolean {
    return this.valor === outro.getLimpo();
  }
}
