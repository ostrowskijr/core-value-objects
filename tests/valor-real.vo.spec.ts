import { ValorReal } from '../src/core/valor-real.vo';

describe('ValorReal', () => {
  it('deve criar valor válido', () => {
    const valor = new ValorReal(123.456);
    expect(valor.getValor()).toBeCloseTo(123.46);
    expect(valor.getFormatado()).toBe('R$ 123,46');
  });

  it('deve lançar erro para valor negativo', () => {
    expect(() => new ValorReal(-1)).toThrow();
  });
});
