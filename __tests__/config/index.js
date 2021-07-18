import { mobizon } from '../../src';

const setConfig = (data) =>
  mobizon.setConfig({
    apiServer: 'https://api.mobizon.com.br',
    apiKey: process.env.API_KEY,
    format: 'json',
    ...data,
  });

export { mobizon, setConfig };
