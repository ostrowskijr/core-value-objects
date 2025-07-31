# 📦 Core Value Objects

Biblioteca de Value Objects reutilizáveis para aplicações Node.js/TypeScript, com foco em domínios brasileiros como CPF/CNPJ, E-mail e Telefone.

---

## ✨ Objetivo

Centralizar e padronizar a validação, formatação e comparação de valores fundamentais utilizados em diversos contextos de negócio.

---

## 🚀 Instalação

### Local (link simbólico):
```bash
npm install /caminho/absoluto/para/core-value-objects
```

### Ou via GitHub:
```bash
npm install git+https://github.com/seu-usuario/core-value-objects.git
```

---

## 📦 Value Objects disponíveis

### ✅ `Cep`
```ts
import { Cep } from 'core-value-objects';

const cep = new Cep('80000-000');
cep.getValue();          // "80000000"
cep.getValueFormatted(); // "80000-000"
```

### ✅ `CpfCnpj`
```ts
import { CpfCnpj } from 'core-value-objects';

const cpf = new CpfCnpj('123.456.789-09');
cpf.getValue();          // "12345678909"
cpf.getValueFormatted(); // "123.456.789-09"

const cnpj = new CpfCnpj('12.345.678/0001-90');
cnpj.getValue();          // "12345678000190"
cnpj.getValueFormatted(); // "12.345.678/0001-90"
```

### ✅ `CreditCard`
```ts
import { CreditCard } from 'core-value-objects';

const card = new CreditCard('4992 7345 6789 1234');
card.getValue();          // "4992734567891234"
card.getValueFormatted(); // "4992 7345 6789 1234"
```

### ✅ `Crp`
```ts
import { Crp } from 'core-value-objects';

const crp = new Crp('06/12345');
crp.getValue();          // "0612345"
crp.getValueFormatted(); // "06/12345"
```

### ✅ `Data`
```ts
import { Data } from 'core-value-objects';

const data = new Data('2025-07-31');
data.getValue();          // Objeto Date de '2025-07-31T03:00:00.000Z'
data.getValueFormatted(); // "31/07/2025"
```

### ✅ `Email`
```ts
import { Email } from 'core-value-objects';

const email = new Email(' USUARIO@dominio.com ');
email.getValue(); // "usuario@dominio.com"
```

### ✅ `Endereco` (VO Composto)
```ts
import { Endereco, Cep, Cidade, Logradouro, UF } from 'core-value-objects';

const endereco = new Endereco({
  cep: new Cep('80000-000'),
  uf: new UF('PR'),
  cidade: new Cidade('Curitiba'),
  logradouro: new Logradouro('Rua Teste'),
  numero: '123',
  bairro: 'Centro',
  complemento: 'Apto 456'
});

endereco.getValueFormatted();
// "Rua Teste, 123 - Centro, Curitiba - PR, CEP: 80000-000, Apto 456"
```

### ✅ `Horario`
```ts
import { Horario } from 'core-value-objects';

const horario = new Horario('14:30');
horario.getValue();          // "14:30"
horario.getValueFormatted(); // "14h30"
```

### ✅ `Nome`
```ts
import { Nome } from 'core-value-objects';

const nome = new Nome('  João da Silva  ');
nome.getValue(); // "João da Silva"
```

### ✅ `Password`
```ts
import { Password } from 'core-value-objects';

// Lança erro se a senha não atender aos critérios
const senha = new Password('Senha@123');
```

### ✅ `Telefone`
```ts
import { Telefone } from 'core-value-objects';

const tel = new Telefone('(11) 98765-4321');
tel.getValue();          // "11987654321"
tel.getValueFormatted(); // "(11) 98765-4321"
```

### ✅ `UF`
```ts
import { UF } from 'core-value-objects';

const uf = new UF('  sp  ');
uf.getValue(); // "SP"
```

### ✅ `ValorReal`
```ts
import { ValorReal } from 'core-value-objects';

const valor = new ValorReal(1234.56);
valor.getValue();          // 1234.56
valor.getValueFormatted(); // "R$ 1.234,56"
```

---

## ✅ Validações automáticas

Todos os VOs lançam `Error` se o valor for inválido, logo são seguros por construção.

---

## 🧪 Testes

Para rodar os testes unitários:

```bash
npm install
npm test
```

---

## 🛠️ Build

```bash
npm run build
```

Gera os arquivos `.js` e `.d.ts` dentro da pasta `dist/`.

---

## 📝 Licença

MIT - Luis Ostrowski
