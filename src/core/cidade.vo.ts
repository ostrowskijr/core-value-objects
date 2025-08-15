import { InvalidCidadeException } from "../exceptions/cidade.exceptions";
import { IValueObjects } from "../interface/vo.interface";

export class Cidade implements IValueObjects<string> {
  private readonly value: string;

  constructor(value: string) {
    const trimmedValue = value.trim();
    if (!Cidade.validate(trimmedValue)) {
      throw new InvalidCidadeException();
    }
    this.value = trimmedValue;
  }

  static validate = (value: string): boolean => value.length >= 3;

  getValue = (): string => this.value;

  equals = (value: IValueObjects): boolean =>
    value instanceof Cidade &&
    this.value.toLowerCase() === value.getValue().toLowerCase();
}
