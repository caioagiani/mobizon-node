"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _environment = require('./environment'); var _environment2 = _interopRequireDefault(_environment);
var _mobizon = require('./services/mobizon');

 const mobizon = {
  /**
   * This method provides a settings.
   * */
  environment: _environment2.default,

  /**
   * This method is responsible for set the settings.
   *
   * @param {string} apiServer
   * @param {string} apiKey
   * @param {string} format
   * */
  setConfig({ apiServer, apiKey, format }) {
    _environment2.default.apiKey = apiKey;
    _environment2.default.format = format || 'json';
    _environment2.default.apiServer = apiServer;
  },

  /**
   * Getting of balance information.
   * [Method user#getownbalance*]{@link https://mobizon.com.br/help/api-docs/user#GetOwnBalance}
   * */
  getBalance: () => _mobizon.mobizonService.call(void 0, { module: 'user', method: 'getownbalance' }),

  /**
   * Sending of a single message.
   * [Method message#sendsmsmessage*]{@link https://mobizon.com.br/help/api-docs/message#SendSmsMessage}
   * */
  sendSms: (data) =>
    _mobizon.mobizonService.call(void 0, {
      module: 'message',
      method: 'sendsmsmessage',
      queryParams: data,
    }),

  /**
   * Getting of SMS message delivery status report.
   * [Method message#getsmsstatus*]{@link https://mobizon.com.br/help/api-docs/message#GetSMSStatus}
   * */
  getSms: (data) =>
    _mobizon.mobizonService.call(void 0, {
      module: 'message',
      method: 'getsmsstatus',
      postParams: data,
    }),

  /**
   * Getting of the list of SMS messages.
   * [Method message#list*]{@link https://mobizon.com.br/help/api-docs/message#List}
   * */
  listSms: (data) =>
    _mobizon.mobizonService.call(void 0, { module: 'message', method: 'list', postParams: data }),

  /**
   * Getting of the link.
   * [Method link#get*]{@link https://mobizon.com.br/help/api-docs/link#Get}
   * */
  getShort: (data) =>
    _mobizon.mobizonService.call(void 0, { module: 'link', method: 'get', postParams: data }),

  /**
   * Getting of the list of links.
   * [Method link#list*]{@link https://mobizon.com.br/help/api-docs/link#List}
   * */
  listShort: (data) =>
    _mobizon.mobizonService.call(void 0, { module: 'link', method: 'list', postParams: data }),

  /**
   * Creation of a new short link.
   * [Method link#create*]{@link https://mobizon.com.br/help/api-docs/link#Create}
   * */
  createShort: (data) =>
    _mobizon.mobizonService.call(void 0, { module: 'link', method: 'create', postParams: data }),

  /**
   * Short links deletion.
   * [Method link#delete*]{@link https://mobizon.com.br/help/api-docs/link#Delete}
   * */
  deleteShort: (data) =>
    _mobizon.mobizonService.call(void 0, { module: 'link', method: 'delete', postParams: data }),

  /**
   * Short link's data editing.
   * [Method link#update*]{@link https://mobizon.com.br/help/api-docs/link#Update}
   * */
  updateShort: (data) =>
    _mobizon.mobizonService.call(void 0, { module: 'link', method: 'update', postParams: data }),

  /**
   * Getting link's statistics.
   * [Method getstats*]{@link https://mobizon.com.br/help/api-docs/link#GetStats}
   * */
  getStatsShort: (data) =>
    _mobizon.mobizonService.call(void 0, { module: 'link', method: 'getstats', postParams: data }),

  /**
   * Create contact group.
   * [Method contactgroup#create*]{@link https://mobizon.com.br/panel#contacts}
   * */
  createContactGroup: (data) =>
    _mobizon.mobizonService.call(void 0, {
      module: 'contactgroup',
      method: 'create',
      postParams: data,
    }),

  /**
   * Delete contact group.
   * [Method contactgroup#delete*]{@link https://mobizon.com.br/panel#contacts}
   * */
  deleteContactGroup: (data) =>
    _mobizon.mobizonService.call(void 0, {
      module: 'contactgroup',
      method: 'delete',
      postParams: data,
    }),

  /**
   * List contact group.
   * [Method contactgroup#list*]{@link https://mobizon.com.br/panel#contacts}
   * */
  listContactGroup: (data) =>
    _mobizon.mobizonService.call(void 0, {
      module: 'contactgroup',
      method: 'list',
      postParams: data,
    }),

  /**
   *
   * List public price.
   * [Method listpublicprice#list*]{@link https://mobizon.com.br/prices}
   * */
  listPublicPrice: (data) =>
    _mobizon.mobizonService.call(void 0, {
      module: 'price',
      method: 'listpublic',
      postParams: data,
    }),
}; exports.mobizon = mobizon;
