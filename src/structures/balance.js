const { mobizon } = require('../services/mobizon');

module.exports = {
  get() {
    return mobizon.call(this, 'user', 'getownbalance');
  },
};
