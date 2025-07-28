import { Data } from '../src/core/data.vo';

describe('Data', () => {
  it('deve aceitar datas válidas', () => {
    const data = new Data('2024-05-01');
    expect(data.getFormatada()).toBe('01/05/2024');
    expect(data.equals(new Data('2024-05-01'))).toBe(true);
  });

  it('deve lançar erro para data inválida', () => {
    expect(() => new Data('data invalida')).toThrow();
  });
});
