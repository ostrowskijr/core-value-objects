import { Logradouro } from '../src/core/logradouro.vo';

describe('Logradouro', () => {
  it('deve criar um logradouro válido', () => {
    const logradouro = new Logradouro('  Rua das Flores  ');
    expect(logradouro.getValue()).toBe('Rua das Flores');
  });

  it('deve lançar um erro para logradouro inválido', () => {
    expect(() => new Logradouro(' ')).toThrow('Logradouro inválido.');
    expect(() => new Logradouro('AB')).toThrow('Logradouro inválido.');
  });

  it('deve comparar dois logradouros iguais', () => {
    const logradouro1 = new Logradouro('Avenida Brasil');
    const logradouro2 = new Logradouro('avenida brasil');
    expect(logradouro1.equals(logradouro2)).toBe(true);
  });
});
