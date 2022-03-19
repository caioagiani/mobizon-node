import { mobizon } from './config/setup';

(async () => {
  /** Listar link curto by ID */
  const getShort = await mobizon.getShort({
    code: '92qe4',
  });

  console.log(getShort);
})();
