const environment = require('./environment');
const balance = require('./structures/balance');
const short = require('./structures/shortlink');
const sms = require('./structures/sms');

module.exports = {
  environment,
  setConfig({ apiServer, apiKey, format }) {
    this.environment.apiKey = apiKey;
    this.environment.format = format || 'json';
    this.environment.apiServer = apiServer;
  },
  getBalance() {
    return balance.get.call(this);
  },
  shortCreate(data) {
    return short.create.call(this, data);
  },
  shortDelete(data) {
    return short.delete.call(this, data);
  },
  shortGet(data) {
    return short.get.call(this, data);
  },
  shortUpdate(data) {
    return short.update.call(this, data);
  },
  sendSms(data) {
    return sms.send.call(this, data);
  },
  listSms(data) {
    return sms.list.call(this, data);
  },
  getSms(data) {
    return sms.get.call(this, data);
  },
};
