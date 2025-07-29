import { Horario } from '../src/core/horario.vo';

describe('Horario', () => {
  it('deve aceitar horários válidos', () => {
    const h = new Horario('08:30');
    expect(h.getValue()).toBe('08:30');
  });

  it('deve lançar erro para horários inválidos', () => {
    expect(() => new Horario('24:01')).toThrow();
  });

  it('deve formatar o horário corretamente', () => {
    const h = new Horario('08:30');
    expect(h.getValueFormatted()).toBe('08h30');
  });

  it('deve comparar horários corretamente', () => {
    const h1 = new Horario('08:30');
    const h2 = new Horario('08:30');
    const h3 = new Horario('09:00');
    expect(h1.equals(h2)).toBe(true);
    expect(h1.equals(h3)).toBe(false);
  });
});
