module.exports = {
  /**
   * User API key.
   * Each user has their key, it represents their access and allows access to API routes.
   */
  apiKey: '',
  /**
   * User API server depends on user initial registration site.
   * Correct API domain could be found in API quick start guide here: https://help.mobizon.com/help/api-docs/sms-api
   */
  apiServer: '',
  /**
   * API response format - possible formats see in allowedFormats
   */
  format: '',
  /**
   * API version.
   * Default: v1.
   */
  apiVersion: 'v1',
  /**
   * Function to set up a default query for requests.
   */
  defaultQuery() {
    return {
      output: this.format,
      api: this.apiVersion,
      apiKey: this.apiKey,
    };
  },
};
