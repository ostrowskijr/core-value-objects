import { InvalidUFException } from "../exceptions/uf.exceptions";
import { IValueObjects } from "./../interface/vo.interface";

export class UF implements IValueObjects<string> {
  private static readonly UF_LIST = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];
  private readonly value: string;

  constructor(value: string) {
    const uf = value.trim().toUpperCase();
    if (!UF.UF_LIST.includes(uf)) throw new InvalidUFException();
    this.value = uf;
  }
  getValue = (): string => this.value;
  equals = (value: IValueObjects): boolean =>
    value instanceof UF && this.value === value.getValue();
}
