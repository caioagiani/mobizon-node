<!--
/*
 * Obrigado por baixar este projeto, caso tenha alguma ideia, ajustes, etc...
 * dê um fork no repositório e crie uma Pull Request.
 */
-->

<p align="center">
  <a href="https://mobizon.com.br">
    <img src=".github/default.svg" width="60%" alt="MobizonBR" title="MobizonBR">
  </a>
</p>

<h2 align="center">Biblioteca para comunicação API HTTP Mobizon SMS</h2>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/caioagiani/mobizon-br">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/caioagiani/mobizon-br">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/caioagiani/mobizon-br">
  <img alt="GitHub license" src="https://img.shields.io/badge/license-MIT-blue.svg">
</p>

## Instalação

Baixe o node em [nodejs.org](http://nodejs.org) e instale-o, caso ainda não tenha,

Pacote: `npm i mobizon-br` ou `yarn add mobizon-br`

## Configuração:

```js
const mobizon = require('mobizon-br');

mobizon.setConfig({
  apiServer: 'https://api.mobizon.com.br',
  apiKey: process.env.API_KEY,
  format: 'json',
});
```

## Exemplos de uso

Confira em [docs](https://github.com/caioagiani/mobizon-br/blob/master/docs) todos os response status code.

```js
(async () => {
  /** Saldo */
  const getBalance = await mobizon.getBalance();

  console.log(getBalance);

  /** Encurtar URL */
  const short = await mobizon.short({
    fullLink: 'https://mobizon.com.br',
    status: 1,
    expirationDate: '',
    comment: 'MobizonBR',
  });

  console.log(short);

  /** Enviar SMS */
  const sendSms = await mobizon.sendSms({
    recipient: process.env.NUMBER,
    from: '',
    text: 'MobizonBR',
  });

  console.log(sendSms);
})();
```

Dê uma olhada em [example.js](https://github.com/caioagiani/mobizon-br/blob/master/example.js) para mais casos de uso.

## Testes

```javascript
 jest --setupFiles dotenv/config --detectOpenHandles --forceExit
 PASS  tests/mobizon.test.js
  Mobizon feature tests
    ✓ should receive the account balance (323 ms)
    ✓ should create short link (447 ms)
    ✓ should get short link (349 ms)
    ✓ should update short link (325 ms)
    ✓ should delete short link (390 ms)
    ✓ should send a test sms (610 ms)
    ✓ should list the sms sent by id (312 ms)
    ✓ should list the all sms sent (762 ms)

Test Suites: 1 passed, 1 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        4.208 s
Ran all test suites.
Done in 4.65s.
```

## Licença

Copyright © 2021 [caioagiani](https://github.com/caioagiani).<br />
Este projeto é licenciado [MIT](https://github.com/caioagiani/mobizon-br/blob/master/LICENSE).
