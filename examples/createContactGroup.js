import { mobizon } from './config/setup';

(async () => {
  /** Criar novo grupo */
  const createContactGroup = await mobizon.createContactGroup({
    data: {
      name: 'Mobizon API Contact Group',
    },
  });

  console.log(createContactGroup);
})();
