const { mobizon } = require('../services/mobizon');
const { urlEncode } = require('../utils/url');

module.exports = {
  send({ recipient, from, text }) {
    const query = {
      recipient,
      from,
      text,
    };

    const queryParams = urlEncode(query);

    return mobizon.call(this, 'message', 'sendsmsmessage', null, queryParams);
  },
  list(body) {
    return mobizon.call(this, 'message', 'list', body);
  },
  get(ids) {
    const body = { ids };

    return mobizon.call(this, 'message', 'getsmsstatus', body);
  },
};
