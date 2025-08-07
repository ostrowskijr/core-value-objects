import { IValueObjects } from "../interface/vo.interface";


export class Nome implements IValueObjects<string> {
  private readonly value: string;

  constructor(value: string) {
    const trimmedValue = value.trim();
    if (!Nome.validate(trimmedValue)) {
      throw new Error('Nome inválido.');
    }
    this.value = trimmedValue;
  }
  static validate = (value: string): boolean => value.length >= 2 && /^[a-zA-ZÀ-ú\s'-]+ [a-zA-ZÀ-ú\s'-]+$/.test(value);
  getValue = (): string => this.value;
  equals = (value: IValueObjects): boolean => value instanceof Nome && this.value === value.getValue();
}