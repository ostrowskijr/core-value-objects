import { Telefone } from '../src/core/telefone.vo';

describe('Telefone', () => {
  it('deve aceitar celular válido', () => {
    const tel = new Telefone('11987654321');
    expect(tel.getValue()).toBe('11987654321');
    expect(tel.getValueFormatted()).toBe('(11) 98765-4321');
  });

  it('deve aceitar telefone fixo válido', () => {
    const tel = new Telefone('(11) 3234-5678');
    expect(tel.getValue()).toBe('1132345678');
    expect(tel.getValueFormatted()).toBe('(11) 3234-5678');
  });

  it('deve lançar erro para telefone inválido', () => {
    expect(() => new Telefone('abc')).toThrow();
    expect(() => new Telefone('91234')).toThrow();
  });

  it('deve comparar igualdade corretamente', () => {
    const t1 = new Telefone('(11) 98765-4321');
    const t2 = new Telefone('11987654321');
    expect(t1.equals(t2)).toBe(true);
  });
});
