import { setConfig, mobizon } from './config';

describe('Mobizon contact-group methods', () => {
  const responseValues = [];
  const payloadContactGroup = {
    data: {
      name: 'any_group',
    },
  };

  beforeAll(() => setConfig({}));

  it('should be create an group contact', async () => {
    const { data, code } = await mobizon.createContactGroup(
      payloadContactGroup
    );

    responseValues.push(data);

    expect(code).toBe(0);
  });

  it('should be list an groups by name', async () => {
    const {
      data: { items },
      code,
    } = await mobizon.listContactGroup({
      pagination: {
        currentPage: 0,
        pageSize: 25,
      },
      criteria: {
        name: 'any_group',
      },
      sort: {
        name: 'ASC',
      },
    });

    expect(items).toHaveLength(1);
    expect(code).toBe(0);
  });

  it('should display an error when creating group with name already exists', async () => {
    const {
      data: { name },
      code,
    } = await mobizon.createContactGroup({
      data: {
        name: 'any_group',
      },
    });

    expect(code).toBe(1);
    expect(name[0]).toBe(
      'Grupo com nome idêntico já existe. Por favor, escolha um nome único.'
    );
  });

  it('should be delete an group', async () => {
    const { code } = await mobizon.deleteContactGroup({
      id: responseValues[0],
    });

    expect(code).toBe(0);
  });

  it('should display an error when creating group with invalid key', async () => {
    setConfig({ apiKey: 'invalid_key' });

    const { code } = await mobizon.createContactGroup(payloadContactGroup);

    expect(code).toBe(8);
  });
});
