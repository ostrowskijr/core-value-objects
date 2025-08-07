import { IValueObjects } from "../interface/vo.interface";
import crypto from 'crypto';

export class UUID implements IValueObjects<string> {
  private readonly value: string;
  private static readonly UUID_REGEX = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;


  constructor(value?: string) {
    if (value) {
      if (!UUID.validate(value)) throw new Error('UUID inválido.');
      this.value = value;
    } else {
      this.value = crypto.randomUUID();
    }
  }

  static validate = (uuid: string): boolean => UUID.UUID_REGEX.test(uuid);
  getValue = (): string => this.value;
  equals = (value: IValueObjects): boolean => value instanceof UUID && this.value === value.getValue();
}
