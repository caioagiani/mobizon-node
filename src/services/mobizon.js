const axios = require('axios');
const https = require('https');

const { urlEncode } = require('../utils/url');

module.exports = {
  async mobizon(provider, method, postParams, queryParams) {
    const request = axios.create({
      baseURL: this.environment.apiServer,
      headers: { 'Content-Type': 'application/json' },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });

    const loadQuery = this.environment.defaultQuery();
    const queryDefault = urlEncode(loadQuery);

    if (postParams) {
      const { data } = await request.post(
        `/service/${provider}/${method}?${queryDefault}`,
        postParams
      );

      return data;
    }

    const query = queryParams ? `${queryParams}&${queryDefault}` : queryDefault;

    const { data } = await request.get(
      `/service/${provider}/${method}?${query}`
    );

    return data;
  },
};
