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

## Licença

Copyright © 2021 [caioagiani](https://github.com/caioagiani).<br />
Este projeto é licenciado [MIT](https://github.com/caioagiani/mobizon-node/blob/master/LICENSE).
