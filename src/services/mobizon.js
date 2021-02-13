const axios = require('axios');
const https = require('https');

const { urlEncode } = require('../utils/url');

module.exports = {
  async mobizonUrl(provider, method, postParams, queryParams) {
    const mobizonUrl = axios.create({
      baseURL: this.environment.apiServer,
      headers: { 'Content-Type': 'application/json' },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });

    const loadQuery = this.environment.defaultQuery();
    const queryDefault = urlEncode(loadQuery);

    if (postParams) {
      const { data } = await mobizonUrl.post(
        `/service/${provider}/${method}?${queryDefault}`,
        postParams
      );

      return data;
    }

    const query = queryParams ? `${queryParams}&${queryDefault}` : queryDefault;

    const { data } = await mobizonUrl.get(
      `/service/${provider}/${method}?${query}`
    );

    return data;
  },
};
