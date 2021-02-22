import environment from './environment';
import balance from './structures/balance';
import short from './structures/shortlink';
import sms from './structures/sms';

export const mobizon = {
  environment,
  setConfig({ apiServer, apiKey, format }) {
    environment.apiKey = apiKey;
    environment.format = format || 'json';
    environment.apiServer = apiServer;
  },
  getBalance: () => balance.get(),
  getSms: (data) => sms.get(data),
  sendSms: (data) => sms.send(data),
  listSms: (data) => sms.list(data),
  getShort: (data) => short.get(data),
  listShort: (data) => short.list(data),
  createShort: (data) => short.create(data),
  deleteShort: (data) => short.delete(data),
  updateShort: (data) => short.update(data),
  getStatsShort: (data) => short.getstats(data),
};
