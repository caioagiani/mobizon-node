import 'dotenv/config';

import { mobizon } from 'mobizon-node';

mobizon.setConfig({
  /** Endpoint do serviço. */
  apiServer: 'https://api.mobizon.com.br',
  /** Chave de acesso do usuário. */
  apiKey: process.env.API_KEY,
  /** Retorno da requisição (json, xml), por padrão é json. */
  format: 'json',
});

(async () => {
  /** Obter saldo */
  const getBalance = await mobizon.getBalance();

  console.log(getBalance);

  /** Listar SMS por ID */
  const getSms = await mobizon.getSms({
    ids: ['49567', '49566'],
  });

  console.log(getSms);

  /** Enviar SMS */
  const sendSms = await mobizon.sendSms({
    recipient: process.env.NUMBER,
    from: '',
    text: 'SMS sent by Mobizon.',
  });

  console.log(sendSms);

  /** Listar todos os SMS enviados */
  const listSms = await mobizon.listSms({
    criteria: {
      from: '',
    },
    pagination: {
      currentPage: '2',
      pageSize: '50',
    },
    sort: {
      campaignId: 'ASC',
    },
  });

  console.dir(listSms, { depth: null });

  /** Listar link curto by ID */
  const getShort = await mobizon.getShort({
    code: '92qe4',
  });

  console.log(getShort);

  /** Listar Links encurtados */
  const listShort = await mobizon.listShort({
    criteria: {
      status: '1',
      moderatorStatus: '1',
    },
    pagination: {
      currentPage: '2',
      pageSize: '50',
    },
    sort: {
      clickCnt: 'ASC',
    },
  });

  console.dir(listShort, { depth: null });

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

  /** Deletar link encurtado by ID */
  const deleteShort = await mobizon.deleteShort({
    ids: ['718', '697', '689'],
  });

  console.log(deleteShort);

  /** Atualizar link encurtado */
  const updateShort = await mobizon.updateShort({
    id: '723',
    data: {
      status: 1,
      expirationDate: '',
      comment: 'Updated link.',
    },
  });

  console.log(updateShort);

  /** Listar status dos links encurtados by ID */
  const getStatsShort = await mobizon.getStatsShort({
    ids: ['723', '722'],
    type: 'monthly',
    criteria: {
      dateFrom: '2021-01-01 13:30:00',
    },
  });

  console.dir(getStatsShort, { depth: null });
})();
