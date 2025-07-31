import { IValueObjects } from "../interface/vo.interface";

export class Horario implements IValueObjects<string> {
  private readonly value: string;

  constructor(value: string) {
    if (!Horario.validate(value)) throw new Error('Horário inválido.');
    this.value = value;
  }
  static validate = (horario: string): boolean => /^([01]?\d|2[0-3]):[0-5]\d$/.test(horario);
  getValue = (): string => this.value;
  getValueFormatted = (): string => this.value.replace(":", "h");
  equals = (value: IValueObjects): boolean => value instanceof Horario && this.value === value.getValue();
}
