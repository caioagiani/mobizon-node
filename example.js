const mobizon = require('mobizon-node');

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

  /** Encurtar URL */
  const short = await mobizon.short({
    fullLink: 'https://mobizon.com.br',
    status: 1,
    expirationDate: '',
    comment: 'Mobizon',
  });

  console.log(short);

  /** Listar link curto */
  const shortGet = await mobizon.shortGet('05xxi');

  console.log(shortGet);

  /** Atualizar link curto */
  const shortUpdate = await mobizon.shortUpdate({
    id: '626',
    data: {
      status: 0,
      expirationDate: '',
      comment: 'Link atualizado.',
    },
  });

  console.log(shortUpdate);

  /** Deletar link encurtado by ID */
  const shortDelete = await mobizon.shortDelete(['532']);

  console.log(shortDelete);

  /** Enviar SMS */
  const sendSms = await mobizon.sendSms({
    recipient: process.env.NUMBER,
    from: '',
    text: 'Mobizon',
  });

  console.log(sendSms);

  /** Listar SMS por ID */
  const getSms = await mobizon.getSms(['49567', '49566']);

  console.log(getSms);

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
})();
