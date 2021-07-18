import environment from './environment';
import { mobizonService } from './services/mobizon';

export const mobizon = {
  /**
   * This method provides a settings.
   * */
  environment,

  /**
   * This method is responsible for set the settings.
   *
   * @param {string} apiServer
   * @param {string} apiKey
   * @param {string} format
   * */
  setConfig({ apiServer, apiKey, format }) {
    environment.apiKey = apiKey;
    environment.format = format || 'json';
    environment.apiServer = apiServer;
  },

  /**
   * Getting of balance information.
   * [Method getownbalance*]{@link https://mobizon.com.br/help/api-docs/user#GetOwnBalance}
   * */
  getBalance: () => mobizonService({ module: 'user', method: 'getownbalance' }),

  /**
   * Sending of a single message.
   * [Method sendsmsmessage*]{@link https://mobizon.com.br/help/api-docs/message#SendSmsMessage}
   * */
  sendSms: (data) =>
    mobizonService({
      module: 'message',
      method: 'sendsmsmessage',
      queryParams: data,
    }),

  /**
   * Getting of SMS message delivery status report.
   * [Method getsmsstatus*]{@link https://mobizon.com.br/help/api-docs/message#GetSMSStatus}
   * */
  getSms: (data) =>
    mobizonService({
      module: 'message',
      method: 'getsmsstatus',
      postParams: data,
    }),

  /**
   * Getting of the list of SMS messages.
   * [Method list*]{@link https://mobizon.com.br/help/api-docs/message#List}
   * */
  listSms: (data) =>
    mobizonService({ module: 'message', method: 'list', postParams: data }),

  /**
   * Getting of the link.
   * [Method get*]{@link https://mobizon.com.br/help/api-docs/link#Get}
   * */
  getShort: (data) =>
    mobizonService({ module: 'link', method: 'get', postParams: data }),

  /**
   * Getting of the list of links.
   * [Method list*]{@link https://mobizon.com.br/help/api-docs/link#List}
   * */
  listShort: (data) =>
    mobizonService({ module: 'link', method: 'list', postParams: data }),

  /**
   * Creation of a new short link.
   * [Method create*]{@link https://mobizon.com.br/help/api-docs/link#Create}
   * */
  createShort: (data) =>
    mobizonService({ module: 'link', method: 'create', postParams: data }),

  /**
   * Short links deletion.
   * [Method delete*]{@link https://mobizon.com.br/help/api-docs/link#Delete}
   * */
  deleteShort: (data) =>
    mobizonService({ module: 'link', method: 'delete', postParams: data }),

  /**
   * Short link's data editing.
   * [Method update*]{@link https://mobizon.com.br/help/api-docs/link#Update}
   * */
  updateShort: (data) =>
    mobizonService({ module: 'link', method: 'update', postParams: data }),

  /**
   * Getting link's statistics.
   * [Method getstats*]{@link https://mobizon.com.br/help/api-docs/link#GetStats}
   * */
  getStatsShort: (data) =>
    mobizonService({ module: 'link', method: 'getstats', postParams: data }),
};
