import { IValueObjects } from "../interface/vo.interface";
import crypto from 'crypto';

export class UUID implements IValueObjects<string> {
  private readonly value: string;

  constructor() {
    this.value = crypto.randomUUID();
  }
  getValue = (): string => this.value;
  equals = (value: IValueObjects): boolean => value instanceof UUID && this.value === value.getValue();
}