import { mobizon } from './config/setup';

(async () => {
  /** Encurtar URL */
  const createShort = await mobizon.createShort({
    data: {
      fullLink: 'https://mobizon.com.br',
      status: 1,
      expirationDate: '',
      comment: 'Shortened link.',
    },
  });

  console.log(createShort);
})();
