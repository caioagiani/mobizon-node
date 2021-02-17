module.exports = {
  urlEncode(query) {
    return Object.keys(query)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
      )
      .join('&');
  },
};
