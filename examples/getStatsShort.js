import { mobizon } from './config/setup';

(async () => {
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
