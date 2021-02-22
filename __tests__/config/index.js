import { mobizon } from '../../src';

mobizon.setConfig({
  apiServer: 'https://api.mobizon.com.br',
  apiKey: process.env.API_KEY,
  format: 'json',
});

export default mobizon;
