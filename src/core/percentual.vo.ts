import { IValueObjects } from "../interface/vo.interface";

export class Percentual implements IValueObjects<number> {
  private readonly value: number;

  constructor(value: number) {
    if (value < 0) throw new Error("Percentual não pode ser negativo.");
    if (value > 100) throw new Error("Percentual não pode ser maior que 100%.");
    this.value = parseFloat(value.toFixed(2));
  }

  static validate = (value: number): boolean => value >= 0 && value <= 100;
  getValue = (): number => this.value;
  getValueFormatted = (): string => `${this.value.toFixed(2)}%`;
  equals = (value: IValueObjects): boolean =>
    value instanceof Percentual && this.value === value.getValue();
}
