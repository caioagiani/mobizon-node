import 'dotenv/config';

import { mobizon } from '../../src';

mobizon.setConfig({
  apiServer: 'https://api.mobizon.com.br' /** Endpoint do serviço. */,
  apiKey: process.env.API_KEY /** Chave de acesso do usuário. */,
  format: 'json' /** Retorno da requisição (json, xml), por padrão é json. */,
});

export { mobizon };
