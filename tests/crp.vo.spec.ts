import { CRP } from '../src/core/crp.vo';

describe('CRP', () => {
  it('deve aceitar CRP válido', () => {
    const crp = new CRP('12/3456');
    expect(crp.getValor()).toBe('12/3456');
  });

  it('deve lançar erro para CRP inválido', () => {
    expect(() => new CRP('abc')).toThrow();
  });
});
