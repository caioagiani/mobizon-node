import { mobizon } from '../../src';

const setConfig = (data) => {
  const options = {
    apiServer: 'https://api.mobizon.com.br',
    apiKey: process.env.API_KEY,
    format: 'json',
    ...data,
  };

  return mobizon.setConfig(options);
};

export { mobizon, setConfig };
