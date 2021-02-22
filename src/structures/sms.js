import mobizon from '../services/mobizon';

export default {
  get: (body) => mobizon('message', 'getsmsstatus', body),
  list: (body) => mobizon('message', 'list', body),
  send: (query) => mobizon('message', 'sendsmsmessage', null, query),
};
