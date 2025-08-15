import { IValueObjects } from "../interface/vo.interface";

export class Nome implements IValueObjects<string> {
  private readonly value: string;

  constructor(value: string) {
    if (!value) {
      throw new Error("Nome deve conter ao menos nome e sobrenome.");
    }
    const trimmedValue = value.trim();
    if (!Nome.validate(trimmedValue)) {
      throw new Error("Nome deve conter ao menos nome e sobrenome.");
    }
    this.value = trimmedValue.replace(/\s+/g, " ");
  }

  static validate = (value: string): boolean => {
    if (!value || value.trim().length === 0) {
      return false;
    }
    const partes = value
      .trim()
      .split(/\s+/)
      .filter((parte) => parte.length > 0);
    if (partes.length < 2) {
      return false;
    }

    if (partes.some((parte) => parte.length < 2)) {
      return false;
    }
    const regexParte = /^[a-zA-ZÀ-ÿ\u00C0-\u017F\s'-]+$/;
    if (!partes.every((parte) => regexParte.test(parte))) {
      return false;
    }
    if (partes.some((parte) => /^[\s'-]+$/.test(parte))) {
      return false;
    }
    return true;
  };

  getValue = (): string => this.value;

  equals = (value: IValueObjects): boolean =>
    value instanceof Nome && this.value === value.getValue();
}
