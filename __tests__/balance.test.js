import { setConfig, mobizon } from './config/setup';

describe('Mobizon balance', () => {
  beforeAll(() => setConfig({}));

  it('should display the account balance', async () => {
    const { code } = await mobizon.getBalance();

    expect(code).toBe(0);
  });

  it('should display an error when querying the balance with invalid key', async () => {
    setConfig({ apiKey: 'invalid_key' });

    const { code } = await mobizon.getBalance();

    expect(code).toBe(8);
  });
});
