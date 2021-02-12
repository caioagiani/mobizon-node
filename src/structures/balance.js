const { get } = require('../utils/request');

module.exports = {
  async get() {
    const { data } = await get.call(
      this,
      `${this.environment.pathBalance}?apiKey=${this.environment.apiKey}`
    );

    return data;
  },
};
