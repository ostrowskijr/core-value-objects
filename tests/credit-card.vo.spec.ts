import { CreditCard } from '../src/core/credit-card.vo';

describe('CreditCard', () => {
  it('deve aceitar número válido de cartão', () => {
    const cc = new CreditCard('4111111111111111'); // Visa test card
    expect(cc.getLimpo()).toBe('4111111111111111');
    expect(cc.getFormatado()).toContain('4111');
  });

  it('deve lançar erro para número inválido de cartão', () => {
    expect(() => new CreditCard('1234567890123456')).toThrow();
  });
});
