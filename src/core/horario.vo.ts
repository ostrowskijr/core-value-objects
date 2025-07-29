import { IValueObjects } from "../interface/vo.interface";

export class Horario implements IValueObjects<string> {
  private readonly value: string;

  constructor(value: string) {
    if (!Horario.validar(value)) throw new Error('Horário inválido.');
    this.value = value;
  }

  static validar(horario: string): boolean {
    return /^([01]?\d|2[0-3]):[0-5]\d$/.test(horario);
  }

  getValue(): string {
    return this.value;
  }

  getValueFormatted(): string {
    return this.value.replace(":", "h");
  }

  equals(outro: Horario): boolean {
    return this.value === outro.getValue();
  }
}
