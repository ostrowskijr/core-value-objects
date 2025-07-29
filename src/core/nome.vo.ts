import { IValueObjects } from "../interface/vo.interface";


export class Nome implements IValueObjects<string> {
  private readonly value: string;

  constructor(value: string) {
    if (!Nome.validate(value)) {
      throw new Error('Nome inválido.');
    }
    this.value = value.trim();
  }

  static validate(value: string): boolean {
    return value.length >= 2 && /[a-zA-Z]+ [a-zA-Z]+/.test(value);
  }

  getValue(): string {
    return this.value;
  }

  equals(value: Nome): boolean {
    return this.value === value.getValue();
  }
}