const mobizon = require('../src/index');

mobizon.setKey(process.env.API_KEY);

const recipient = process.env.NUMBER;
const responseValues = { id_short: [], id_sms: [] };

describe('Mobizon feature tests', () => {
  it('should receive the account balance', async () => {
    const response = await mobizon.getBalance();

    expect(response.data.currency).toBe('BRL');
    expect(response.data.balance).toEqual(expect.any(String));
    expect(response).toEqual({
      code: expect.any(Number),
      data: expect.any(Object),
      message: expect.any(String),
    });
  });

  it('should create short link', async () => {
    const options = {
      fullLink: 'https://mobizon.com.br',
      status: 1,
      expirationDate: '',
      comment: 'test --jest',
    };

    const response = await mobizon.short(options);

    responseValues.id_short.push(response.data.id);

    expect(response.data.shortLink).toEqual(expect.any(String));
    expect(response).toEqual({
      code: expect.any(Number),
      data: expect.any(Object),
      message: expect.any(String),
    });
  });

  it('should delete short link', async () => {
    const response = await mobizon.shortDelete(responseValues.id_short);

    expect(response.data.processed).toEqual(expect.any(Array));
    expect(response).toEqual({
      code: expect.any(Number),
      data: expect.any(Object),
      message: expect.any(String),
    });
  });

  it('should send a test sms', async () => {
    const options = {
      recipient,
      from: '',
      text: 'Mobizon BR test --jest',
    };

    const response = await mobizon.sendSms(options);

    responseValues.id_sms.push(response.data.messageId);

    expect(response).toEqual({
      code: expect.any(Number),
      data: expect.any(Object),
      message: expect.any(String),
    });
  });

  it('should list the sms sent by id', async () => {
    const response = await mobizon.getSms(responseValues.id_sms);

    expect(response.data).toEqual(expect.any(Array));
    expect(response).toEqual({
      code: expect.any(Number),
      data: expect.any(Object),
      message: expect.any(String),
    });
  });

  it('should list the all sms sent', async () => {
    const options = {
      criteria: {
        from: '',
      },
      pagination: {
        currentPage: '2',
        pageSize: '50',
      },
      sort: {
        campaignId: 'ASC',
      },
    };

    const response = await mobizon.listSms(options);

    expect(response.data.totalItemCount).toEqual(expect.any(String));
    expect(response).toEqual({
      code: expect.any(Number),
      data: expect.any(Object),
      message: expect.any(String),
    });
  });
});
