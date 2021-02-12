const { get, post } = require('../utils/request');
const { urlEncode } = require('../utils/url');

module.exports = {
  async send({ recipient, from, text }) {
    const query = {
      recipient,
      from,
      text,
      apiKey: this.environment.apiKey,
    };

    const queryParams = urlEncode(query);

    const { data } = await get.call(
      this,
      `${this.environment.pathSmsSend}?${queryParams}`
    );

    return data;
  },
  async list(body) {
    const { data } = await post.call(this, this.environment.pathSmsList, body);

    return data;
  },
  async get(ids) {
    const { data } = await post.call(this, this.environment.pathSmsGet, {
      ids,
    });

    return data;
  },
};
