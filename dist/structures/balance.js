"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mobizon = require('../services/mobizon'); var _mobizon2 = _interopRequireDefault(_mobizon);

exports. default = {
  get: () => _mobizon2.default.call(void 0, 'user', 'getownbalance'),
};
