"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mobizon = require('../services/mobizon'); var _mobizon2 = _interopRequireDefault(_mobizon);

exports. default = {
  get: (body) => _mobizon2.default.call(void 0, 'link', 'get', body),
  list: (body) => _mobizon2.default.call(void 0, 'link', 'list', body),
  create: (body) => _mobizon2.default.call(void 0, 'link', 'create', body),
  delete: (body) => _mobizon2.default.call(void 0, 'link', 'delete', body),
  update: (body) => _mobizon2.default.call(void 0, 'link', 'update', body),
  getstats: (body) => _mobizon2.default.call(void 0, 'link', 'getstats', body),
};
