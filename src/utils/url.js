module.exports = {
  urlEncode(query) {
    const queryEncode = Object.keys(query)
      .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(query[k])}`)
      .join('&');

    return queryEncode;
  },
};
