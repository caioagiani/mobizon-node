module.exports = {
  apiKey: '',
  apiVersion: 'v1',
  pathBalance: '/service/user/getownbalance',
  pathShortLink: '/service/link/create',
  pathShortLinkDelete: '/service/link/delete',
  pathSmsSend: '/service/message/sendsmsmessage',
  pathSmsList: '/service/message/list',
  pathSmsGet: 'service/message/getsmsstatus',
  defaultQuery() {
    return {
      output: 'json',
      api: this.apiVersion,
      apiKey: this.apiKey,
    };
  },
};
