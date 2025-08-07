import { Nome } from './../src/core/nome.vo';

describe('Nome', () => {

  it('deve criar um nome válido', () => {
    const nome = new Nome('João da Silva');
    expect(nome.getValue()).toBe('João da Silva');
  });

  it('deve criar um nome válido com acentos', () => {
    const nome = new Nome('José de Souza');
    expect(nome.getValue()).toBe('José de Souza');
  });

  it('deve lançar erro para nome inválido', () => {
    expect(() => new Nome('João')).toThrow('Nome inválido.');
  });

  it('deve lançar um erro para nomes inválidos', () => {
    expect(() => new Nome('J')).toThrow('Nome inválido.');
    expect(() => new Nome('')).toThrow('Nome inválido.');
    expect(() => new Nome('João123')).toThrow('Nome inválido.');
  });

  it('deve comparar nomes corretamente', () => {
    const nome1 = new Nome('Maria da Silva');
    const nome2 = new Nome('Maria da Silva');
    expect(nome1.equals(nome2)).toBe(true);
  });

});