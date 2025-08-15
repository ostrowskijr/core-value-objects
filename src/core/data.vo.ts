import { InvalidDataException } from "../exceptions/data.exceptions";
import { IValueObjects } from "./../interface/vo.interface";

export class Data implements IValueObjects<Date> {
  private readonly value: Date;

  constructor(data: string | Date) {
    let parsedDate: Date;

    if (typeof data === "string") {
      if (/^\d{4}-\d{2}-\d{2}$/.test(data)) {
        const [year, month, day] = data.split("-").map(Number);
        parsedDate = new Date(Date.UTC(year, month - 1, day));
        if (
          parsedDate.getUTCFullYear() !== year ||
          parsedDate.getUTCMonth() !== month - 1 ||
          parsedDate.getUTCDate() !== day
        ) {
          throw new InvalidDataException();
        }
      } else {
        parsedDate = new Date(data);
      }
    } else {
      parsedDate = new Date(data);
    }

    if (isNaN(parsedDate.getTime())) {
      throw new InvalidDataException();
    }
    this.value = parsedDate;
  }
  getValue = (): Date => this.value;
  getValueFormatted = (): string => {
    const day = String(this.value.getUTCDate()).padStart(2, "0");
    const month = String(this.value.getUTCMonth() + 1).padStart(2, "0");
    const year = this.value.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };
  equals = (value: IValueObjects): boolean =>
    value instanceof Data &&
    this.value.toISOString() === value.getValue().toISOString();
}
