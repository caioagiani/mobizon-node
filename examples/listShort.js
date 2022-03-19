import { mobizon } from './config/setup';

(async () => {
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
})();
