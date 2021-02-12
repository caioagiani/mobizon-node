const axios = require('axios');
const https = require('https');

module.exports = {
  mobizonUrl: axios.create({
    baseURL: 'https://api.mobizon.com.br',
    headers: { 'Content-Type': 'application/json' },
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  }),
};
