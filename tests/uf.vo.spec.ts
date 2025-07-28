import { UF } from '../src/core/uf.vo';

describe('UF', () => {
  it('deve aceitar uma UF válida', () => {
    const uf = new UF('sp');
    expect(uf.getValor()).toBe('SP');
  });

  it('deve lançar erro para UF inválida', () => {
    expect(() => new UF('XX')).toThrow();
  });
});
