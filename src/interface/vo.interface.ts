export interface IValueObjects<T = any> {  
  getValue(): T;
  getValueFormatted?(): string;
  equals(value: IValueObjects): boolean;
}