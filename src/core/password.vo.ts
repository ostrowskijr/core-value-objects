import { IValueObjects } from "../interface/vo.interface";

export class Password implements IValueObjects<string> {
  private value: string;

  constructor(value: string, options?: PasswordOptions ) {
    try {
      Password.validate(value, options);
      this.value = value;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  static validate(value: string, options?: PasswordOptions): boolean {
    const defaultOptions = {
      ...options,
      numberOfDigits: options?.numberOfDigits || 6,
    };
    if (defaultOptions?.numberOfDigits && this.isValidNumberOfDigits(value, defaultOptions.numberOfDigits)) {
      throw new Error(`A senha deve conter ${defaultOptions.numberOfDigits} digítos.`);
    }
    if (defaultOptions?.numberOfSpecialCharacters && this.isValidSpecialCharacters(value, defaultOptions.numberOfSpecialCharacters)) {
      throw new Error(`A senha deve conter ${defaultOptions.numberOfSpecialCharacters} caracteres especiais.`);
    }
    if (defaultOptions?.numberOfUppercase && this.isValidUppercase(value, defaultOptions.numberOfUppercase)) {
      throw new Error(`A senha deve conter ${defaultOptions.numberOfUppercase} caracteres maiúsculos.`);
    }
    return true;
  }

  getValue = (): string => this.value;
  equals = (value: IValueObjects): boolean => this.value === value.getValue();  
  
  private static isValidNumberOfDigits = (value: string, numberOfDigits: number): boolean => value.length < numberOfDigits || value.length > numberOfDigits;
  private static isValidSpecialCharacters = (value: string, numberOfSpecialCharacters: number): boolean => (value.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length !== numberOfSpecialCharacters;
  private static isValidUppercase = (value: string, numberOfUppercase: number): boolean => (value.match(/[A-Z]/g) || []).length !== numberOfUppercase;
}

type PasswordOptions = {
  numberOfDigits?: number;
  numberOfSpecialCharacters?: number;
  numberOfUppercase?: number;
};