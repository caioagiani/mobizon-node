const environment = require('./environment');
const balance = require('./structures/balance');
const short = require('./structures/shortlink');
const sms = require('./structures/sms');

module.exports = {
  environment,
  setKey(key) {
    this.environment.apiKey = key;
  },
  async getBalance() {
    return balance.get.call(this);
  },
  async short(data) {
    return short.create.call(this, data);
  },
  async shortDelete(data) {
    return short.delete.call(this, data);
  },
  async sendSms(data) {
    return sms.send.call(this, data);
  },
  async listSms(data) {
    return sms.list.call(this, data);
  },
  async getSms(data) {
    return sms.get.call(this, data);
  },
};
