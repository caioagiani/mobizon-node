import { setConfig, mobizon } from './config/setup';

describe('Mobizon check current price methods', () => {
  const payload = {
    countryA2: 'BR',
    currency: 'BRL',
    language: 'br',
  };

  beforeAll(() => setConfig({}));

  it('should display the current price (BRL)', async () => {
    const { code } = await mobizon.listPublicPrice(payload);

    expect(code).toBe(0);
  });

  it('should display error when check without parameters', async () => {
    const { code } = await mobizon.listPublicPrice({});

    expect(code).not.toBe(0);
  });

  it('should display error when receive invalid parameters', async () => {
    const { code } = await mobizon.listPublicPrice({
      ...payload,
      countryA2: 'any_country',
      currency: 'any_currency',
      language: 'any_language',
    });

    expect(code).toBe(12);
  });
});
