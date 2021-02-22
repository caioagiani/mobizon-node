"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _environment = require('./environment'); var _environment2 = _interopRequireDefault(_environment);
var _balance = require('./structures/balance'); var _balance2 = _interopRequireDefault(_balance);
var _shortlink = require('./structures/shortlink'); var _shortlink2 = _interopRequireDefault(_shortlink);
var _sms = require('./structures/sms'); var _sms2 = _interopRequireDefault(_sms);

 const mobizon = {
  environment: _environment2.default,
  setConfig({ apiServer, apiKey, format }) {
    _environment2.default.apiKey = apiKey;
    _environment2.default.format = format || 'json';
    _environment2.default.apiServer = apiServer;
  },
  getBalance: () => _balance2.default.get(),
  getSms: (data) => _sms2.default.get(data),
  sendSms: (data) => _sms2.default.send(data),
  listSms: (data) => _sms2.default.list(data),
  getShort: (data) => _shortlink2.default.get(data),
  listShort: (data) => _shortlink2.default.list(data),
  createShort: (data) => _shortlink2.default.create(data),
  deleteShort: (data) => _shortlink2.default.delete(data),
  updateShort: (data) => _shortlink2.default.update(data),
  getStatsShort: (data) => _shortlink2.default.getstats(data),
}; exports.mobizon = mobizon;
