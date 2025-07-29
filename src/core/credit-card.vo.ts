import { IValueObjects } from "../interface/vo.interface";
export class CreditCard implements IValueObjects<string> {
  private readonly value: string;

  constructor(value: string) {
    const valueClean = value.replace(/\D/g, '');
    if (!CreditCard.validate(valueClean)) throw new Error('Cartão de crédito inválido.');
    this.value = valueClean;
  }

  static validate(numero: string): boolean {
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

  getValue(): string {
    return this.value;
  }

  getValueFormatted(): string {
    return this.value.replace(/(\d{4})(?=\d)/g, '$1 ');
  }

  equals(value: CreditCard): boolean {
    if (!(value instanceof CreditCard)) {
      return false;
    }
    return this.value === value.getValue();
  }
}
