import { setConfig, mobizon } from './config';

const sut = (conf) => setConfig(conf);

describe('Mobizon balance', () => {
  sut({});

  it('should display the account balance', async () => {
    const { code } = await mobizon.getBalance();

    expect(code).toBe(0);
  });

  it('should display an error when querying the balance with invalid key', async () => {
    sut({ apiKey: 'invalid_key' });

    const { code } = await mobizon.getBalance();

    expect(code).toBe(8);
  });
});
