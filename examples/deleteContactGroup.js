import { mobizon } from './config/setup';

(async () => {
  /** Deletar grupo de contatos */
  const deleteContactGroup = await mobizon.deleteContactGroup({
    id: '331',
  });

  console.log(deleteContactGroup);
})();
