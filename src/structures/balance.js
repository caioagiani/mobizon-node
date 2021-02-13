const { mobizonUrl } = require('../services/mobizon');

module.exports = {
  get() {
    const getBalance = mobizonUrl.call(this, 'user', 'getownbalance');

    return getBalance;
  },
};
