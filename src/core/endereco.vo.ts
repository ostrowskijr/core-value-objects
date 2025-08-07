import { Cep } from "./cep.vo";
import { Cidade } from "./cidade.vo";
import { Logradouro } from "./logradouro.vo";
import { UF } from "./uf.vo";
import { IValueObjects } from "../interface/vo.interface";

interface EnderecoProps {
  logradouro: Logradouro;
  numero: string;
  bairro: string;
  cidade: Cidade;
  uf: UF;
  cep: Cep;
  complemento?: string;
}

export class Endereco implements IValueObjects<EnderecoProps> {
  private readonly props: EnderecoProps;

  constructor(props: EnderecoProps) {
    this.props = {
      ...props,
      bairro: props.bairro.trim(),
      numero: props.numero.trim(),
    };
  }

  getValue = (): EnderecoProps => this.props;

  getValueFormatted = (): string => {
    const { logradouro, numero, bairro, cidade, uf, cep, complemento } = this.props;
    let enderecoFormatado = `${logradouro.getValue()}, ${numero} - ${bairro}, ${cidade.getValue()} - ${uf.getValue()}, CEP: ${cep.getValueFormatted()}`;
    if (complemento) {
      enderecoFormatado += `, ${complemento}`;
    }
    return enderecoFormatado;
  }

  equals = (value: IValueObjects): boolean => {
    if (!(value instanceof Endereco)) return false;
    return (
      this.props.cep.equals(value.props.cep) &&
      this.props.uf.equals(value.props.uf) &&
      this.props.cidade.equals(value.props.cidade) &&
      this.props.logradouro.equals(value.props.logradouro) &&
      this.props.numero === value.props.numero &&
      this.props.bairro === value.props.bairro &&
      this.props.complemento === value.props.complemento
    );
  }
}
