const { mobizonUrl } = require('../services/mobizon');
const { urlEncode } = require('./url');

module.exports = {
  async get(url, params) {
    const getRequest = await mobizonUrl.get(url, params);

    return getRequest;
  },
  async post(url, params) {
    const defaultQuery = this.environment.defaultQuery();
    const queryParams = urlEncode(defaultQuery);

    const postRequest = await mobizonUrl.post(`${url}?${queryParams}`, params);

    return postRequest;
  },
};
