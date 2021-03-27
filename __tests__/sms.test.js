import { setConfig, mobizon } from './config';

const sut = (conf) => setConfig(conf);

describe('Mobizon sms methods', () => {
  sut({});

  const recipient = process.env.NUMBER;
  const responseValues = [];
  const dataSms = {
    recipient,
    from: '',
    text: 'Sent sms.',
  };

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

  it('should display an error when creating sms with invalid key', async () => {
    sut({ apiKey: 'invalid_key' });

    const { code } = await mobizon.sendSms(dataSms);

    expect(code).toBe(8);
  });
});
