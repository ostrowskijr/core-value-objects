import { Crp } from '../src/core/crp.vo';

describe('Crp', () => {
  it('deve criar um CRP válido', () => {
    const crp = new Crp('06/12345');
    expect(crp.getValue()).toBe('0612345');
    expect(crp.getValueFormatted()).toBe('06/12345');
  });

  it('deve lançar um erro para CRP inválido', () => {
    expect(() => new Crp('06/1234')).toThrow('CRP inválido.');
    expect(() => new Crp('06/123456')).toThrow('CRP inválido.');
    expect(() => new Crp('6/12345')).toThrow('CRP inválido.');
  });

  it('deve comparar dois CRPs iguais', () => {
    const crp1 = new Crp('06/12345');
    const crp2 = new Crp('0612345');
    expect(crp1.equals(crp2)).toBe(true);
  });
});
