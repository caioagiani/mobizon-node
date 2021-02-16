module.exports = {
  urlEncode(query) {
    const queryEncode = Object.keys(query)
      .map((key) => `${key}=${query[key]}`)
      .join('&');

    return queryEncode;
  },
};
