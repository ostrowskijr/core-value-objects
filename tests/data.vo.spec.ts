import { Data } from '../src/core/data.vo';

describe('Data', () => {
  it('deve aceitar datas válidas em formato string', () => {
    const data = new Data('2024-05-01');
    expect(data.getValueFormatted()).toBe('01/05/2024');
  });

  it('deve aceitar datas válidas em formato Date', () => {
    const date = new Date(Date.UTC(2024, 4, 1));
    const data = new Data(date);
    expect(data.getValueFormatted()).toBe('01/05/2024');
  });

  it('deve lançar erro para data inválida em formato string', () => {
    expect(() => new Data('data invalida')).toThrow('Data inválida.');
    expect(() => new Data('2024-02-31')).toThrow('Data inválida.');
  });

  it('deve lidar corretamente com anos bissextos', () => {
    const data = new Data('2024-02-29');
    expect(data.getValueFormatted()).toBe('29/02/2024');
    expect(() => new Data('2023-02-29')).toThrow('Data inválida.');
  });

  it('deve comparar duas datas iguais', () => {
    const data1 = new Data('2024-05-01');
    const data2 = new Data(new Date(Date.UTC(2024, 4, 1)));
    expect(data1.equals(data2)).toBe(true);
  });

  it('deve comparar duas datas diferentes', () => {
    const data1 = new Data('2024-05-01');
    const data2 = new Data('2024-05-02');
    expect(data1.equals(data2)).toBe(false);
  });
});
