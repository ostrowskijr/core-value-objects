import { Endereco } from '../src/core/endereco.vo';
import { Cep } from '../src/core/cep.vo';
import { Cidade } from '../src/core/cidade.vo';
import { Logradouro } from '../src/core/logradouro.vo';
import { UF } from '../src/core/uf.vo';

describe('Endereco', () => {
  const cep = new Cep('80000-000');
  const uf = new UF('PR');
  const cidade = new Cidade('Curitiba');
  const logradouro = new Logradouro('Rua Teste');

  it('deve criar um endereço válido', () => {
    const endereco = new Endereco({
      cep,
      uf,
      cidade,
      logradouro,
      numero: '123',
      bairro: 'Centro',
    });

    expect(endereco.getValueFormatted()).toBe('Rua Teste, 123 - Centro, Curitiba - PR, CEP: 80000-000');
  });

  it('deve criar um endereço válido com complemento', () => {
    const endereco = new Endereco({
      cep,
      uf,
      cidade,
      logradouro,
      numero: '123',
      bairro: 'Centro',
      complemento: 'Apto 456'
    });

    expect(endereco.getValueFormatted()).toBe('Rua Teste, 123 - Centro, Curitiba - PR, CEP: 80000-000, Apto 456');
  });

  it('deve comparar dois endereços iguais', () => {
    const endereco1 = new Endereco({ cep, uf, cidade, logradouro, numero: '123', bairro: 'Centro' });
    const endereco2 = new Endereco({ cep, uf, cidade, logradouro, numero: '123', bairro: 'Centro' });
    expect(endereco1.equals(endereco2)).toBe(true);
  });
});
