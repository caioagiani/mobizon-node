import { setConfig, mobizon } from './config/setup';

describe('Mobizon sms methods', () => {
  const responseValues = [];
  const dataSms = {
    recipient: process.env.NUMBER,
    from: '',
    text: 'Sent sms.',
  };

  beforeAll(() => setConfig({}));

  it('should send a sms', async () => {
    const { data, code } = await mobizon.sendSms(dataSms);

    responseValues.push(data);

    expect(code).toBe(0);
  });

  it('should display error when send sms without parameters', async () => {
    const { code } = await mobizon.sendSms({});

    expect(code).not.toBe(0);
  });

  it('should display list the sms sent by id', async () => {
    const { code } = await mobizon.getSms({
      ids: [responseValues[0].messageId],
    });

    expect(code).toBe(0);
  });

  it('should display error when list sms by id without parameters', async () => {
    const { code } = await mobizon.getSms({});

    expect(code).not.toBe(0);
  });

  it('should display list the all sms sent', async () => {
    const { code } = await mobizon.listSms({
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
    });

    expect(code).toBe(0);
  });

  it('should send SMS scheduled', async () => {
    const deferredToTs = new Date()
      .toISOString()
      .replace('T', ' ')
      .slice(0, 19);

    const {
      code,
      data: { status },
    } = await mobizon.sendSms({
      ...dataSms,
      params: {
        name: 'Campaign scheduled.',
        deferredToTs,
      },
    });

    expect(code).toBe(0);
    expect(status).toBe(2);
  });

  it('should display an error send SMS scheduled', async () => {
    const { code, message } = await mobizon.sendSms({
      ...dataSms,
      params: {
        deferredToTs: new Date(),
      },
    });

    expect(code).toBe(1);
    expect(message).toBe(
      'Um ou mais campos contêm dados incorretos. Verifique os erros e tente novamente.'
    );
  });

  it('should display an error when creating sms with invalid key', async () => {
    setConfig({ apiKey: 'invalid_key' });

    const { code } = await mobizon.sendSms(dataSms);

    expect(code).toBe(8);
  });
});
