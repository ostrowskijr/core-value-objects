import { Horario } from '../src/core/horario.vo';

describe('Horario', () => {
  it('deve aceitar horários válidos', () => {
    const h = new Horario('08:30');
    expect(h.getValor()).toBe('08:30');
  });

  it('deve lançar erro para horários inválidos', () => {
    expect(() => new Horario('24:01')).toThrow();
  });
});
