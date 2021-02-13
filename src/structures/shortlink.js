const { mobizonUrl } = require('../services/mobizon');

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

    const shortCreate = mobizonUrl.call(this, 'link', 'create', body);

    return shortCreate;
  },
  delete(ids) {
    const body = { ids };

    const shortDelete = mobizonUrl.call(this, 'link', 'delete', body);

    return shortDelete;
  },
  get(id) {
    const body = { code: id };

    const shortGet = mobizonUrl.call(this, 'link', 'get', body);

    return shortGet;
  },
  update(body) {
    const shortGet = mobizonUrl.call(this, 'link', 'update', body);

    return shortGet;
  },
};
