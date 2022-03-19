import { mobizon } from './config/setup';

(async () => {
  /** Atualizar link encurtado */
  const updateShort = await mobizon.updateShort({
    id: '723',
    data: {
      status: 1,
      expirationDate: '',
      comment: 'Updated link.',
    },
  });

  console.log(updateShort);
})();
