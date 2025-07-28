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

### ✅ `CpfCnpj`
```ts
import { CpfCnpj } from 'core-value-objects';

const cpf = new CpfCnpj('123.456.789-09');
cpf.getLimpo();     // "12345678909"
cpf.getFormatado(); // "123.456.789-09"
```

### ✅ `Email`
```ts
import { Email } from 'core-value-objects';

const email = new Email(' USUARIO@dominio.com ');
email.getValor(); // "usuario@dominio.com"
```

### ✅ `Telefone`
```ts
import { Telefone } from 'core-value-objects';

const tel = new Telefone('(11) 98765-4321');
tel.getLimpo();     // "11987654321"
tel.getFormatado(); // "(11) 98765-4321"
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
