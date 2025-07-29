export interface IValueObjects<T = string | Date | number> {  
  getValue(): T;
  getValueFormatted?(): string;
  equals(value: IValueObjects): boolean;
}