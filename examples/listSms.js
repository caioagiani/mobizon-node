import { mobizon } from './config/setup';

(async () => {
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
