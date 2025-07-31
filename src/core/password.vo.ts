import { IValueObjects } from "../interface/vo.interface";

const MIN_PASSWORD_LENGTH = 6;
const ERROR_MSG_LENGTH = `A senha deve conter no mínimo ${MIN_PASSWORD_LENGTH} dígitos.`;
const ERROR_MSG_SPECIAL_CHARS = (num: number) => `A senha deve conter ${num} caracteres especiais.`;
const ERROR_MSG_UPPERCASE = (num: number) => `A senha deve conter ${num} caracteres maiúsculos.`;

export class Password implements IValueObjects<string> {
  private readonly value: string;

  constructor(value: string, options?: PasswordOptions) {
    Password.validate(value, options);
    this.value = value;
  }

  static validate(value: string, options?: PasswordOptions): void {
    const defaultOptions = {
      numberOfDigits: options?.numberOfDigits || MIN_PASSWORD_LENGTH,
      ...options,
    };

    if (!this.hasMinLength(value, defaultOptions.numberOfDigits)) {
      throw new Error(ERROR_MSG_LENGTH);
    }
    if (options?.numberOfSpecialCharacters && !this.hasSpecialChars(value, options.numberOfSpecialCharacters)) {
      throw new Error(ERROR_MSG_SPECIAL_CHARS(options.numberOfSpecialCharacters));
    }
    if (options?.numberOfUppercase && !this.hasUppercase(value, options.numberOfUppercase)) {
      throw new Error(ERROR_MSG_UPPERCASE(options.numberOfUppercase));
    }
  }

  getValue = (): string => this.value;
  equals = (value: IValueObjects): boolean => value instanceof Password && this.value === value.getValue();

  private static hasMinLength = (value: string, minLength: number): boolean => value.length >= minLength;
  private static hasSpecialChars = (value: string, count: number): boolean => (value.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length >= count;
  private static hasUppercase = (value: string, count: number): boolean => (value.match(/[A-Z]/g) || []).length >= count;
}

type PasswordOptions = {
  numberOfDigits?: number;
  numberOfSpecialCharacters?: number;
  numberOfUppercase?: number;
};
