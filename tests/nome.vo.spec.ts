import { Nome } from './../src/core/nome.vo';

describe('Name of the group', () => {

  it('should create a valid name', () => {
    const nome = new Nome('João da Silva');
    expect(nome.getValue()).toBe('João da Silva');
  });

  it('should create a invalid name', () => {
    expect(() => new Nome('João')).toThrow('Nome inválido.');
  });

  it('should throw an error for invalid names', () => {
    expect(() => new Nome('J')).toThrow('Nome inválido.');
    expect(() => new Nome('')).toThrow('Nome inválido.');
    expect(() => new Nome('João123')).toThrow('Nome inválido.');
  });
  
});