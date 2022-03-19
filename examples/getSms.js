import { mobizon } from './config/setup';

(async () => {
  /** Listar SMS por ID */
  const getSms = await mobizon.getSms({
    ids: ['49567', '49566'],
  });

  console.log(getSms);
})();
