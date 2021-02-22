import mobizon from '../services/mobizon';

export default {
  get: () => mobizon('user', 'getownbalance'),
};
