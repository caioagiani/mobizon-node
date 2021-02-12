const mobizon = require('mobizon-br');

mobizon.setKey(process.env.API_KEY);

(async () => {
  /**
   * OBTER SALDO API
   */
  const getBalance = await mobizon.getBalance();

  console.log(getBalance);

  /**
   * ENCURTAR LINK
   */
  const short = await mobizon.short({
    fullLink: 'https://mobizon.com.br',
    status: 1,
    expirationDate: '',
    comment: 'MobizonBR',
  });

  console.log(short);

  /**
   * DELETAR LINK CURTO
   */
  const shortDelete = await mobizon.shortDelete(['532']);

  console.log(shortDelete);

  /**
   * ENVIAR SMS
   */
  const sendSms = await mobizon.sendSms({
    recipient: process.env.NUMBER,
    from: '',
    text: 'MobizonBR',
  });

  console.log(sendSms);

  /**
   * LISTAR SMS PELO ID
   */
  const getSms = await mobizon.getSms(['49567', '49566']);

  console.log(getSms);

  /**
   * LISTAR TODOS SMS ENVIADOS
   */
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
