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

Pacote: `npm i mobizon-br` ou `yarn install mobizon-br`

## Configuração:

```js
const mobizon = require('mobizon-br');

/**
 * Obtenha sua chave em: https://mobizon.com.br
 */
mobizon.setKey(process.env.API_KEY);
```

Veja todos os [exemplos](https://github.com/mobizon/mobizon-php/tree/master/docs/examples).
```js

(async () => {
  /**
   * Saldo
   */
  const getBalance = await mobizon.getBalance();

  console.log(getBalance);

  /**
   * Encurtar url
   */
  const short = await mobizon.short({
    fullLink: 'https://mobizon.com.br',
    status: 1,
    expirationDate: '',
    comment: 'MobizonBR',
  });

  console.log(short);
})();
```

## Testes

```javascript
$ jest --setupFiles dotenv/config --detectOpenHandles --forceExit
 PASS  tests/mobizon.test.js
  Mobizon feature tests
    ✓ should receive the account balance (697 ms)
    ✓ should create short link (485 ms)
    ✓ should delete short link (313 ms)
    ✓ should send a test sms (918 ms)
    ✓ should list the sms sent by id (312 ms)
    ✓ should list the all sms sent (523 ms)

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        3.94 s, estimated 4 s
Ran all test suites.
Done in 4.37s.
```
