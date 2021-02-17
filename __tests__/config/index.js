const mobizon = require('../../src/index');

mobizon.setConfig({
  apiServer: 'https://api.mobizon.com.br',
  apiKey: process.env.API_KEY,
  format: 'json',
});

module.exports = mobizon;
