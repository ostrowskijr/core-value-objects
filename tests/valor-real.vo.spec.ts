import { ValorReal } from '../src/core/valor-real.vo';

describe('ValorReal', () => {
  it('deve criar valor válido', () => {
    const valor = new ValorReal(123.456);
    expect(valor.getValue()).toBeCloseTo(123.46);
    expect(valor.getValueFormatted()).toBe('R$ 123,46');
  });

  it('deve lançar erro para valor negativo', () => {
    expect(() => new ValorReal(-1)).toThrow();
  });

  it('deve comparar valores corretamente', () => {
    const valor1 = new ValorReal(123.456);
    const valor2 = new ValorReal(123.456);
    const valor3 = new ValorReal(789.012);
    expect(valor1.equals(valor2)).toBe(true);
    expect(valor1.equals(valor3)).toBe(false);
  });
});
