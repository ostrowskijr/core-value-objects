# 📦 Core Value Objects

Biblioteca de Value Objects reutilizáveis para aplicações Node.js/TypeScript, com foco em domínios brasileiros como CPF/CNPJ, E-mail, Telefone e outros tipos de dados comuns.

---

## ✨ Objetivo

Centralizar e padronizar a validação, formatação e comparação de valores fundamentais utilizados em diversos contextos de negócio, seguindo princípios de Domain-Driven Design (DDD) e Clean Architecture.

---

## 🚀 Instalação

### Via NPM:

```bash
npm install core-value-objects
```

### Via Yarn:

```bash
yarn add core-value-objects
```

### Local (link simbólico):

```bash
npm install /caminho/absoluto/para/core-value-objects
# ou
yarn add /caminho/absoluto/para/core-value-objects
```

### Ou via GitHub:

```bash
npm install git+https://github.com/ostrowskijr/core-value-objects.git
# ou
yarn add git+https://github.com/ostrowskijr/core-value-objects.git
```

---

## 📦 Value Objects disponíveis

### 🏠 **Endereços e Localização**

#### ✅ `Cep`

```ts
import { Cep } from "core-value-objects";

const cep = new Cep("80000-000");
cep.getValue(); // "80000000"
cep.getValueFormatted(); // "80000-000"
```

#### ✅ `Cidade`

```ts
import { Cidade } from "core-value-objects";

const cidade = new Cidade("Curitiba");
cidade.getValue(); // "Curitiba"
```

#### ✅ `Logradouro`

```ts
import { Logradouro } from "core-value-objects";

const logradouro = new Logradouro("Rua das Flores");
logradouro.getValue(); // "Rua das Flores"
```

#### ✅ `UF`

```ts
import { UF } from "core-value-objects";

const uf = new UF("  sp  ");
uf.getValue(); // "SP"
```

#### ✅ `Endereco` (VO Composto)

```ts
import { Endereco, Cep, Cidade, Logradouro, UF } from "core-value-objects";

const endereco = new Endereco({
  cep: new Cep("80000-000"),
  uf: new UF("PR"),
  cidade: new Cidade("Curitiba"),
  logradouro: new Logradouro("Rua Teste"),
  numero: "123",
  bairro: "Centro",
  complemento: "Apto 456",
});

endereco.getValueFormatted();
// "Rua Teste, 123 - Centro, Curitiba - PR, CEP: 80000-000, Apto 456"
```

### 👤 **Identificação e Dados Pessoais**

#### ✅ `CpfCnpj`

```ts
import { CpfCnpj } from "core-value-objects";

const cpf = new CpfCnpj("123.456.789-09");
cpf.getValue(); // "12345678909"
cpf.getValueFormatted(); // "123.456.789-09"

const cnpj = new CpfCnpj("12.345.678/0001-90");
cnpj.getValue(); // "12345678000190"
cnpj.getValueFormatted(); // "12.345.678/0001-90"
```

#### ✅ `Crp`

```ts
import { Crp } from "core-value-objects";

const crp = new Crp("06/12345");
crp.getValue(); // "0612345"
crp.getValueFormatted(); // "06/12345"
```

#### ✅ `Nome`

```ts
import { Nome } from "core-value-objects";

// Nome válido com nome e sobrenome
const nome = new Nome("João Silva");
nome.getValue(); // "João Silva"

// Nome com múltiplas palavras (nome, sobrenome, etc.)
const nomeCompleto = new Nome("  João da Silva  ");
nomeCompleto.getValue(); // "João da Silva" (espaços normalizados)

// Nome com acentos e caracteres especiais
const nomeEspecial = new Nome("José D'Ávila");
nomeEspecial.getValue(); // "José D'Ávila"

// Validações automáticas:
// ✅ Deve conter ao menos nome e sobrenome
// ✅ Cada parte deve ter ao menos 2 caracteres
// ✅ Aceita letras, acentos, espaços, hífens e apóstrofos
// ❌ Rejeita: "João" (apenas uma palavra), "J Silva" (parte muito curta)
```

#### ✅ `UUID`

```ts
import { UUID } from "core-value-objects";

// Gera um UUID automático
const uuid = new UUID();
uuid.getValue(); // "550e8400-e29b-41d4-a716-446655440000"

// Ou use um UUID específico
const uuidCustom = new UUID("550e8400-e29b-41d4-a716-446655440000");
```

### 📞 **Comunicação**

#### ✅ `Email`

```ts
import { Email } from "core-value-objects";

const email = new Email(" USUARIO@dominio.com ");
email.getValue(); // "usuario@dominio.com"
```

#### ✅ `Telefone`

```ts
import { Telefone } from "core-value-objects";

const tel = new Telefone("(11) 98765-4321");
tel.getValue(); // "11987654321"
tel.getValueFormatted(); // "(11) 98765-4321"
```

### 💳 **Financeiro e Pagamentos**

#### ✅ `CreditCard`

```ts
import { CreditCard } from "core-value-objects";

const card = new CreditCard("4992 7345 6789 1234");
card.getValue(); // "4992734567891234"
card.getValueFormatted(); // "4992 7345 6789 1234"
```

#### ✅ `ValorReal`

```ts
import { ValorReal } from "core-value-objects";

const valor = new ValorReal(1234.56);
valor.getValue(); // 1234.56
valor.getValueFormatted(); // "R$ 1.234,56"
```

#### ✅ `Percentual`

```ts
import { Percentual } from "core-value-objects";

const percentual = new Percentual(25.5);
percentual.getValue(); // 25.5
percentual.getValueFormatted(); // "25.50%"

// Valida automaticamente: 0% <= percentual <= 100%
```

### 📅 **Data e Hora**

#### ✅ `Data`

```ts
import { Data } from "core-value-objects";

const data = new Data("2025-07-31");
data.getValue(); // Objeto Date de '2025-07-31T03:00:00.000Z'
data.getValueFormatted(); // "31/07/2025"
```

#### ✅ `Horario`

```ts
import { Horario } from "core-value-objects";

const horario = new Horario("14:30");
horario.getValue(); // "14:30"
horario.getValueFormatted(); // "14h30"
```

### 🔐 **Segurança**

#### ✅ `Password`

```ts
import { Password } from "core-value-objects";

// Lança erro se a senha não atender aos critérios de segurança
const senha = new Password("Senha@123");
```

---

## ✅ Validações automáticas

Todos os VOs lançam `Error` se o valor for inválido, logo são seguros por construção. As validações incluem:

- **Formato**: Verificação de padrões e estruturas válidas
- **Faixa de valores**: Percentuais entre 0% e 100%, valores positivos, etc.
- **Integridade**: Validação de CPF/CNPJ, cartão de crédito, etc.
- **Segurança**: Critérios de senha forte
- **Composição**: Nomes devem conter ao menos nome e sobrenome, cada parte com mínimo de 2 caracteres

---

## 🧪 Testes

Para rodar os testes unitários:

```bash
# Instalar dependências
npm install
# ou
yarn install

# Executar testes
npm test
# ou
yarn test
```

---

## 🛠️ Build

```bash
npm run build
# ou
yarn build
```

Gera os arquivos `.js` e `.d.ts` dentro da pasta `dist/`.

---

## 🏗️ Arquitetura

Este projeto segue os princípios de:

- **Domain-Driven Design (DDD)**: Value Objects como conceito central do domínio
- **Clean Architecture**: Separação clara de responsabilidades
- **Clean Code**: Código legível, testável e mantível
- **SOLID**: Princípios de design orientado a objetos

---

## 📦 **Gerenciamento de Dependências**

### **NPM vs Yarn**

Este projeto suporta tanto **NPM** quanto **Yarn** como gerenciadores de pacotes. Escolha o que preferir:

| Comando              | NPM                    | Yarn                |
| -------------------- | ---------------------- | ------------------- |
| **Instalar**         | `npm install`          | `yarn install`      |
| **Adicionar**        | `npm install <pkg>`    | `yarn add <pkg>`    |
| **Testes**           | `npm test`             | `yarn test`         |
| **Build**            | `npm run build`        | `yarn build`        |
| **Dev Dependencies** | `npm install -D <pkg>` | `yarn add -D <pkg>` |

---

## 🚀 **Scripts Disponíveis**

### **Desenvolvimento**

```bash
# Instalar dependências
npm install
# ou
yarn install

# Executar testes em modo watch
npm run test:watch
# ou
yarn test:watch

# Executar testes com coverage
npm run test:cov
# ou
yarn test:cov
```

### **Produção**

```bash
# Build do projeto
npm run build
# ou
yarn build

# Limpar build (Linux/Mac)
npm run clean
# ou
yarn clean

# No Windows, use:
# rmdir /s dist
# ou delete manualmente a pasta dist/
```

---

## 🔍 **Validações Específicas por VO**

### 📝 **Nome**

- **Estrutura**: Deve conter ao menos nome e sobrenome
- **Comprimento**: Cada parte deve ter mínimo de 2 caracteres
- **Caracteres**: Aceita letras, acentos, espaços, hífens e apóstrofos
- **Normalização**: Remove espaços múltiplos automaticamente
- **Exemplos válidos**: "João Silva", "Maria da Silva", "José D'Ávila"
- **Exemplos inválidos**: "João", "J Silva", "João123 Silva"

---

## 📝 Licença

MIT - Luis A. Ostrowski Jr.
<ostrowskijr@gmail.com>
