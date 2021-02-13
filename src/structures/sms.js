const { mobizonUrl } = require('../services/mobizon');
const { urlEncode } = require('../utils/url');

module.exports = {
  send({ recipient, from, text }) {
    const query = {
      recipient,
      from,
      text,
    };

    const queryParams = urlEncode(query);

    const smsSend = mobizonUrl.call(
      this,
      'message',
      'sendsmsmessage',
      null,
      queryParams
    );

    return smsSend;
  },
  list(body) {
    const smsList = mobizonUrl.call(this, 'message', 'list', body);

    return smsList;
  },
  get(ids) {
    const body = { ids };

    const smsGet = mobizonUrl.call(this, 'message', 'getsmsstatus', body);

    return smsGet;
  },
};
