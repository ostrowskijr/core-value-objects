import { InvalidValorRealException } from "../exceptions/valor-real.exceptions";
import { IValueObjects } from "../interface/vo.interface";

export class ValorReal implements IValueObjects<number> {
  private readonly valor: number;

  constructor(valor: number) {
    if (valor < 0) throw new InvalidValorRealException();
    this.valor = parseFloat(valor.toFixed(2));
  }
  getValue = (): number => this.valor;
  getValueFormatted = (): string =>
    this.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  equals = (value: IValueObjects): boolean =>
    value instanceof ValorReal && this.valor === value.getValue();
}
