import { Cep } from '../src/core/cep.vo';

describe('Cep', () => {
  it('deve aceitar CEP válido', () => {
    const cep = new Cep('87013001');
    expect(cep.getLimpo()).toBe('87013001');
    expect(cep.getFormatado()).toBe('87013-001');
    expect(cep.equals(new Cep('87013001'))).toBe(true);
  });

  it('deve lançar erro para CEP inválido', () => {
    expect(() => new Cep('0000000')).toThrow();
  });
});
