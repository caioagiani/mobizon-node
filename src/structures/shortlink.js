const { mobizon } = require('../services/mobizon');

module.exports = {
  create({ fullLink, expirationDate, comment }) {
    const body = {
      data: {
        fullLink,
        status: 1,
        expirationDate,
        comment,
      },
    };

    return mobizon.call(this, 'link', 'create', body);
  },
  delete(ids) {
    const body = { ids };

    return mobizon.call(this, 'link', 'delete', body);
  },
  get(id) {
    const body = { code: id };

    return mobizon.call(this, 'link', 'get', body);
  },
  update(body) {
    return mobizon.call(this, 'link', 'update', body);
  },
};
