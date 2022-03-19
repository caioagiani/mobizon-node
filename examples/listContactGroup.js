import { mobizon } from './config/setup';

(async () => {
  /** Listar grupo de contatos */
  const listContactGroup = await mobizon.listContactGroup({
    pagination: {
      currentPage: 0,
      pageSize: 25,
    },
    criteria: {
      name: 'Mobizon API',
    },
    sort: {
      name: 'ASC',
    },
  });

  console.log(listContactGroup);
})();
