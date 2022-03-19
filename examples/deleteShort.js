import { mobizon } from './config/setup';

(async () => {
  /** Deletar link encurtado by ID */
  const deleteShort = await mobizon.deleteShort({
    ids: ['718', '697', '689'],
  });

  console.log(deleteShort);
})();
