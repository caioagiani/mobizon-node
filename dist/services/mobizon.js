"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios');
var _https = require('https');
var _qs = require('qs');

var _environment = require('../environment'); var _environment2 = _interopRequireDefault(_environment);

/**
 * This method is responsible for providing the mobizonService methods.
 *
 * @param {string} module
 * @param {string} method
 * @param {string} postParams
 * @param {string} queryParams
 *
 * @example mobizonService({ module: 'user', method: 'getownbalance' });
 *
 * @returns responseApi
 * */
 const mobizonService = async ({
  module,
  method,
  postParams,
  queryParams,
}) => {
  const request = _axios.create.call(void 0, {
    baseURL: `${_environment2.default.apiServer}/service`,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    httpsAgent: new (0, _https.Agent)({ rejectUnauthorized: false }),
  });

  const queryDefault = _qs.stringify.call(void 0, {
    output: _environment2.default.format,
    api: _environment2.default.apiVersion,
    apiKey: _environment2.default.apiKey,
  });

  if (postParams) {
    const responsePost = await request.post(
      `${module}/${method}?${queryDefault}`,
      _qs.stringify.call(void 0, postParams)
    );

    return responsePost.data;
  }

  const query = queryParams
    ? `${_qs.stringify.call(void 0, queryParams)}&${queryDefault}`
    : queryDefault;

  const { data } = await request.get(`${module}/${method}?${query}`);

  return data;
}; exports.mobizonService = mobizonService;
