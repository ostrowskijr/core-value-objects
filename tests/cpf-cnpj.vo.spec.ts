import { CpfCnpj } from '../src/core/cpf-cnpj.vo';

describe('CpfCnpj', () => {
  it('deve aceitar CPF válido', () => {
    const cpf = new CpfCnpj('123.456.789-09');
    expect(cpf.getLimpo()).toBe('12345678909');
    expect(cpf.getFormatado()).toBe('123.456.789-09');
  });

  it('deve aceitar CNPJ válido', () => {
    const cnpj = new CpfCnpj('45.723.174/0001-10');
    expect(cnpj.getLimpo()).toBe('45723174000110');
    expect(cnpj.getFormatado()).toBe('45.723.174/0001-10');
  });

  it('deve lançar erro para CPF inválido', () => {
    expect(() => new CpfCnpj('123.456.789-00')).toThrow();
  });

  it('deve lançar erro para CNPJ inválido', () => {
    expect(() => new CpfCnpj('00.000.000/0000-00')).toThrow();
  });

  it('deve comparar igualdade corretamente', () => {
    const doc1 = new CpfCnpj('12345678909');
    const doc2 = new CpfCnpj('123.456.789-09');
    expect(doc1.equals(doc2)).toBe(true);
  });
});
