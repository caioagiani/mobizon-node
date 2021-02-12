const { post } = require('../utils/request');

module.exports = {
  async create({ fullLink, expirationDate, comment }) {
    const body = {
      data: {
        fullLink,
        status: 1,
        expirationDate,
        comment,
      },
    };

    const { data } = await post.call(
      this,
      this.environment.pathShortLink,
      body
    );

    return data;
  },
  async delete(ids) {
    const { data } = await post.call(
      this,
      this.environment.pathShortLinkDelete,
      { ids }
    );

    return data;
  },
};
