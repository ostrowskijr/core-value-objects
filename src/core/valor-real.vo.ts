import { IValueObjects } from "../interface/vo.interface";

export class ValorReal implements IValueObjects<number> {
  private readonly valor: number;

  constructor(valor: number) {
    if (valor < 0) throw new Error('Valor não pode ser negativo.');
    this.valor = parseFloat(valor.toFixed(2));
  }

  getValue(): number {
    return this.valor;
  }

  getValueFormatted(): string {
    return this.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  equals(value: IValueObjects): boolean {
    if (value instanceof ValorReal) {
      return this.valor === value.getValue();
    }
    return false;
  }
}
