import { UF } from '../src/core/uf.vo';

describe('UF', () => {
  it('deve aceitar uma UF válida', () => {
    const uf = new UF('sp');
    expect(uf.getValue()).toBe('SP');
  });

  it('deve lançar erro para UF inválida', () => {
    expect(() => new UF('XX')).toThrow();
  });

  it('deve comparar UFs corretamente', () => {
    const uf1 = new UF('RJ');
    const uf2 = new UF('RJ');    
    expect(uf1.equals(uf2)).toBe(true);    
  });
  it('deve comparar UFs erradas', () => {
    const uf1 = new UF('RJ');
    const uf3 = new UF('SP');    
    expect(uf1.equals(uf3)).toBe(false);
  });
});
