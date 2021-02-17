const mobizon = require('./config');

describe('Mobizon short methods', () => {
  const responseValues = [];

  it('should create short link', async () => {
    const response = await mobizon.shortCreate({
      fullLink: 'https://mobizon.com.br',
      status: 1,
      expirationDate: '',
      comment: 'Created short link.',
    });

    responseValues.push(response.data);

    expect(response.code).toBe(0);
  });

  it('should throw error when creating short link', async () => {
    const response = await mobizon.shortCreate({});

    expect(response.code).not.toBe(0);
  });

  it('should get short link', async () => {
    const response = await mobizon.shortGet([responseValues[0].code]);

    expect(response.code).toBe(0);
  });

  it('should throw error when getting short link', async () => {
    const response = await mobizon.shortGet([]);

    expect(response.code).not.toBe(0);
  });

  it('should update short link', async () => {
    const response = await mobizon.shortUpdate({
      id: responseValues[0].id,
      data: {
        status: 0,
        expirationDate: '',
        comment: 'Updated short link.',
      },
    });

    expect(response.code).toBe(0);
  });

  it('should throw an error when updating a short link', async () => {
    const response = await mobizon.shortUpdate({});

    expect(response.code).not.toBe(0);
  });

  it('should delete short link', async () => {
    const response = await mobizon.shortDelete([responseValues[0].id]);

    expect(response.code).toBe(0);
  });

  it('should throw an error when deleting a short link', async () => {
    const response = await mobizon.shortDelete();

    expect(response.code).not.toBe(0);
  });
});
