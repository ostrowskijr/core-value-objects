import { Cidade } from '../src/core/cidade.vo';

describe('Cidade', () => {
  it('deve criar uma cidade válida', () => {
    const cidade = new Cidade('  São Paulo  ');
    expect(cidade.getValue()).toBe('São Paulo');
  });

  it('deve lançar um erro para nome de cidade inválido', () => {
    expect(() => new Cidade(' ')).toThrow('Nome de cidade inválido.');
    expect(() => new Cidade('AB')).toThrow('Nome de cidade inválido.');
  });

  it('deve comparar duas cidades iguais', () => {
    const cidade1 = new Cidade('Curitiba');
    const cidade2 = new Cidade('curitiba');
    expect(cidade1.equals(cidade2)).toBe(true);
  });
});
