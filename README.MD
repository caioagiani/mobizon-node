<!--
/*
 * Obrigado por baixar este projeto, caso tenha alguma ideia, ajustes, etc...
 * dê um fork no repositório e crie uma Pull Request.
 */
-->

<div style="align-items: center; text-align: center;">
  <a href="https://mobizon.com.br">
    <img src=".github/logo.svg" alt="MobizonBR" title="MobizonBR">
  </a>

  <h2>Biblioteca para comunicação API HTTP Mobizon SMS</h2>

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/caioagiani/mobizon-br">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/caioagiani/mobizon-br">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/caioagiani/mobizon-br">
  <img alt="GitHub last commit" src="https://img.shields.io/badge/license-MIT-blue.svg">
</div>

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install mobizon-br or yarn install mobizon-br
```
## Test

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
