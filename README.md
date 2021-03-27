<!--
/*
 * Obrigado por baixar este projeto, caso tenha alguma ideia, ajustes, etc...
 * dê um fork no repositório e crie uma Pull Request.
 */
-->

<p align="center">
  <a href="https://mobizon.com.br">
    <img src=".github/default.svg" width="60%" alt="Mobizon" title="Mobizon">
  </a>
</p>

<h2 align="center">Biblioteca para comunicação API HTTP Mobizon SMS</h2>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/caioagiani/mobizon-node">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/caioagiani/mobizon-node">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/caioagiani/mobizon-node">
  <img alt="NPM downloads" src="https://img.shields.io/npm/dt/mobizon-node?color=blue">
  <img alt="GitHub license" src="https://img.shields.io/badge/license-MIT-blue.svg">
</p>

## Instalação

Baixe o node em [nodejs.org](http://nodejs.org) e instale-o, caso ainda não tenha,

Pacote: `npm i mobizon-node` ou `yarn add mobizon-node`

## Configuração:

```js
const { mobizon } = require('mobizon-node');

mobizon.setConfig({
  apiServer: 'https://api.mobizon.com.br',
  apiKey: 'br01xxxxxx',
  format: 'json',
});
```

## Exemplos de uso

Confira em [docs](https://github.com/caioagiani/mobizon-node/blob/master/docs) todos os response status code.

```js
(async () => {
  /** Saldo */
  const getBalance = await mobizon.getBalance();

  console.log(getBalance);

  /** Encurtar URL */
  const createShort = await mobizon.createShort({
    data: {
      fullLink: 'https://mobizon.com.br',
      status: 1,
      expirationDate: '',
      comment: 'Shortened link.',
    },
  });

  console.log(createShort);

  /** Enviar SMS */
  const sendSms = await mobizon.sendSms({
    recipient: '5511941439844',
    from: '',
    text: 'SMS sent by Mobizon.',
  });

  console.log(sendSms);
})();
```

Dê uma olhada em [example.js](https://github.com/caioagiani/mobizon-node/blob/master/example.js) para mais casos de uso.

## Testes

```javascript
 PASS  __tests__/shortlink.test.js (5.569 s)
 PASS  __tests__/sms.test.js
 PASS  __tests__/balance.test.js
------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------|---------|----------|---------|---------|-------------------
All files         |   99.19 |    83.33 |     100 |   99.19 |
 __tests__/config |     100 |      100 |     100 |     100 |
  index.js        |     100 |      100 |     100 |     100 |
 src              |   97.73 |       75 |     100 |   97.73 |
  environment.js  |     100 |      100 |     100 |     100 |
  index.js        |   95.65 |    66.67 |     100 |   95.65 | 5
 src/services     |     100 |    83.33 |     100 |     100 |
  mobizon.js      |     100 |    83.33 |     100 |     100 | 7
 src/structures   |     100 |    84.62 |     100 |     100 |
  balance.js      |     100 |      100 |     100 |     100 |
  shortlink.js    |     100 |    83.33 |     100 |     100 | 5
  sms.js          |     100 |       75 |     100 |     100 | 5
------------------|---------|----------|---------|---------|-------------------

Test Suites: 3 passed, 3 total
Tests:       20 passed, 20 total
Snapshots:   0 total
Time:        12.374 s
Ran all test suites.
Done in 15.49s.
```

## Licença

Copyright © 2021 [caioagiani](https://github.com/caioagiani).<br />
Este projeto é licenciado [MIT](https://github.com/caioagiani/mobizon-node/blob/master/LICENSE).
