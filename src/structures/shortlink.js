import mobizon from '../services/mobizon';

export default {
  get: (body) => mobizon('link', 'get', body),
  list: (body) => mobizon('link', 'list', body),
  create: (body) => mobizon('link', 'create', body),
  delete: (body) => mobizon('link', 'delete', body),
  update: (body) => mobizon('link', 'update', body),
  getstats: (body) => mobizon('link', 'getstats', body),
};
