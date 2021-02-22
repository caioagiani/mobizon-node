import mobizon from './config';

describe('Mobizon sms methods', () => {
  const recipient = process.env.NUMBER;
  const responseValues = [];

  it('should send a sms', async () => {
    const response = await mobizon.sendSms({
      recipient,
      from: '',
      text: 'Sent sms.',
    });

    responseValues.push(response.data);

    expect(response.code).toBe(0);
  });

  it('should throw error when sending sms', async () => {
    const response = await mobizon.sendSms({});

    expect(response.code).not.toBe(0);
  });

  it('should list the sms sent by id', async () => {
    const response = await mobizon.getSms({
      ids: [responseValues[0].messageId],
    });

    expect(response.code).toBe(0);
  });

  it('should throw error when listing sms by id', async () => {
    const response = await mobizon.getSms({});

    expect(response.code).not.toBe(0);
  });

  it('should list the all sms sent', async () => {
    const response = await mobizon.listSms({
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

    expect(response.code).toBe(0);
  });
});
