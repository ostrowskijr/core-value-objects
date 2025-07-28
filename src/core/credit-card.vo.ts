export class CreditCard {
  private readonly valor: string;

  constructor(valor: string) {
    const limpo = valor.replace(/\D/g, '');
    if (!CreditCard.validar(limpo)) throw new Error('Cartão de crédito inválido.');
    this.valor = limpo;
  }

  static validar(numero: string): boolean {
    let soma = 0;
    let par = false;
    for (let i = numero.length - 1; i >= 0; i--) {
      let dig = parseInt(numero.charAt(i), 10);
      if (par) {
        dig *= 2;
        if (dig > 9) dig -= 9;
      }
      soma += dig;
      par = !par;
    }
    return soma % 10 === 0;
  }

  getLimpo(): string {
    return this.valor;
  }

  getFormatado(): string {
    return this.valor.replace(/(\d{4})(?=\d)/g, '$1 ');
  }

  equals(outro: CreditCard): boolean {
    return this.valor === outro.getLimpo();
  }
}
