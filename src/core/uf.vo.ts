const UF_LIST = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
import { IValueObjects } from './../interface/vo.interface';

export class UF implements IValueObjects<string> {
  private readonly value: string;

  constructor(value: string) {
    const uf = value.trim().toUpperCase();
    if (!UF_LIST.includes(uf)) throw new Error('UF inválido.');
    this.value = uf;
  }

  getValue(): string {
    return this.value;
  }

  equals(value: IValueObjects): boolean {
    if (value instanceof UF) {
      return this.value === value.getValue();
    }
    return false;
  }
}
