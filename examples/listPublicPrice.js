import { mobizon } from './config/setup';

(async () => {
  const payload = {
    countryA2: 'BR',
    currency: 'BRL',
    language: 'br',
  };

  const currentPrice = await mobizon.listPublicPrice(payload);

  console.dir(currentPrice, { depth: null });
})();
