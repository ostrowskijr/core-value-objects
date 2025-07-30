
import { IValueObjects } from './../interface/vo.interface';
import { format } from 'date-fns';
export class Data implements IValueObjects<Date> {
  private readonly value: Date;

  constructor(data: string | Date) {
    if (typeof data === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(data)) {
      const [year, month, day] = data.split('-').map(Number);
      this.value = new Date(year, month - 1, day); // modo local, evita timezone bug
    } else {
      const parsed = new Date(data);
      if (isNaN(parsed.getTime())) throw new Error('Data inválida.');
      this.value = parsed;
    }
  }
  getValue = (): Date => this.value;
  getValueFormatted = (): string => format(this.value, 'dd/MM/yyyy');
  equals = (outro: Data): boolean => this.value.toISOString() === outro.getValue().toISOString();
}
