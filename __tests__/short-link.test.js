import { setConfig, mobizon } from './config/setup';

describe('Mobizon short-link methods', () => {
  const responseValues = [];
  const dataShort = {
    data: {
      fullLink: 'https://mobizon.com.br',
      status: 1,
      expirationDate: '',
      comment: 'Created short link.',
    },
  };

  beforeAll(() => setConfig({}));

  it('should create short link', async () => {
    const { data, code } = await mobizon.createShort(dataShort);

    responseValues.push(data);

    expect(code).toBe(0);
  });

  it('should get short link', async () => {
    const { code } = await mobizon.getShort({
      code: responseValues[0].code,
    });

    expect(code).toBe(0);
  });

  it('should display list the all short links', async () => {
    const response = await mobizon.listShort({
      criteria: {
        status: '1',
        moderatorStatus: '1',
      },
      pagination: {
        currentPage: '2',
        pageSize: '50',
      },
      sort: {
        clickCnt: 'ASC',
      },
    });

    expect(response.code).toBe(0);
  });

  it('should delete short link', async () => {
    const { code } = await mobizon.deleteShort({
      ids: [responseValues[0].id],
    });

    expect(code).toBe(0);
  });

  it('should update short link', async () => {
    const { code } = await mobizon.updateShort({
      ...dataShort,
      id: responseValues[0].id,
      data: {
        status: 0,
        expirationDate: '',
        comment: 'Updated short link.',
      },
    });

    expect(code).toBe(0);
  });

  it('should get stats short link', async () => {
    const { code } = await mobizon.getStatsShort({
      ids: [responseValues[0].id],
      type: 'monthly',
      criteria: {
        dateFrom: '2021-01-01 13:30:00',
      },
    });

    expect(code).toBe(0);
  });

  it('should display error when creating short link without parameters', async () => {
    const { code } = await mobizon.createShort({});

    expect(code).toBe(11);
  });

  it('should display error when get short link without parameters', async () => {
    const { code } = await mobizon.getShort({});

    expect(code).toBe(12);
  });

  it('should display error when update short link without parameters', async () => {
    const { code } = await mobizon.updateShort({});

    expect(code).not.toBe(12);
  });

  it('should display error when delete short link without parameters', async () => {
    const { code } = await mobizon.deleteShort();

    expect(code).toBe(11);
  });

  it('should display error when get stats short link without parameters', async () => {
    const { code } = await mobizon.getStatsShort({});

    expect(code).toBe(11);
  });

  it('should display an error when creating short link with invalid key', async () => {
    setConfig({ apiKey: 'invalid_key' });

    const { code } = await mobizon.createShort(dataShort);

    expect(code).toBe(8);
  });
});
