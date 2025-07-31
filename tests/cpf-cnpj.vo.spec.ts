import { CpfCnpj } from '../src/core/cpf-cnpj.vo';

describe('CpfCnpj', () => {
  it('deve aceitar CPF válido', () => {
    const cpf = new CpfCnpj('123.456.789-09');
    expect(cpf.getValue()).toBe('12345678909');
    expect(cpf.getValueFormatted()).toBe('123.456.789-09');
  });

  it('Deve lançar erro devido primeiro digito inválido', () => {
    expect(() => new CpfCnpj('123.456.789-99')).toThrow('CPF ou CNPJ inválido.');
  });
  it('Deve lançar erro devido segundo digito inválido', () => {
    expect(() => new CpfCnpj('123.456.789-00')).toThrow('CPF ou CNPJ inválido.');
  });

  it('deve aceitar CNPJ válido', () => {
    const cnpj = new CpfCnpj('45.723.174/0001-10');
    expect(cnpj.getValue()).toBe('45723174000110');
    expect(cnpj.getValueFormatted()).toBe('45.723.174/0001-10');
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

  it('deve retornar false para string com tamanho inválido', () => {
    // 12 dígitos
    expect(() => new CpfCnpj('123456789012')).toThrow('CPF ou CNPJ inválido.');
    // 13 dígitos
    expect(() => new CpfCnpj('1234567890123')).toThrow('CPF ou CNPJ inválido.');
    // string vazia
    expect(() => new CpfCnpj('')).toThrow('CPF ou CNPJ inválido.');
  });

  it('deve retornar false para CPF e CNPJ com todos os dígitos iguais', () => {
    expect(() => new CpfCnpj('111.111.111-11')).toThrow('CPF ou CNPJ inválido.');
    expect(() => new CpfCnpj('22222222222222')).toThrow('CPF ou CNPJ inválido.');
  });

  it('deve formatar corretamente CPF e CNPJ', () => {
    const cpf = new CpfCnpj('12345678909');
    expect(cpf.getValueFormatted()).toBe('123.456.789-09');
    const cnpj = new CpfCnpj('45723174000110');
    expect(cnpj.getValueFormatted()).toBe('45.723.174/0001-10');
  });

  it('equals deve retornar false para tipos diferentes', () => {
    const cpf = new CpfCnpj('12345678909');
    expect(cpf.equals({ getValue: () => '12345678909' } as any)).toBe(false);
  });

  it('equals deve retornar false para valores diferentes', () => {
    const doc1 = new CpfCnpj('12345678909');
    const doc2 = new CpfCnpj('98765432100');
    expect(doc1.equals(doc2)).toBe(false);
  });
});
