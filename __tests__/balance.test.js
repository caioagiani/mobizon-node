import mobizon from './config';

describe('Mobizon balance', () => {
  it('should receive the account balance', async () => {
    const response = await mobizon.getBalance();

    expect(response.code).toBe(0);
  });
});
