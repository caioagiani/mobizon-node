"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios');
var _https = require('https');
var _qs = require('qs');

var _environment = require('../environment'); var _environment2 = _interopRequireDefault(_environment);

exports. default = async (provider, method, postParams, queryParams) => {
  const { format, apiVersion, apiKey, apiServer } = _environment2.default;

  const request = _axios.create.call(void 0, {
    baseURL: `${apiServer}/service`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    httpsAgent: new (0, _https.Agent)({
      rejectUnauthorized: false,
    }),
  });

  const queryDefault = _qs.stringify.call(void 0, {
    output: format,
    api: apiVersion,
    apiKey,
  });

  if (postParams) {
    const body = _qs.stringify.call(void 0, postParams);

    const { data } = await request.post(
      `${provider}/${method}?${queryDefault}`,
      body
    );

    return data;
  }

  const query = queryParams
    ? `${_qs.stringify.call(void 0, queryParams)}&${queryDefault}`
    : queryDefault;

  const { data } = await request.get(`${provider}/${method}?${query}`);

  return data;
};
