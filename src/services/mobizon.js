import { create } from 'axios';
import { Agent } from 'https';
import { stringify } from 'qs';

import environment from '../environment';

/**
 * This method is responsible for providing the mobizonService methods.
 *
 * @param {string} module
 * @param {string} method
 * @param {string} postParams
 * @param {string} queryParams
 *
 * @example mobizonService({ module: 'user', method: 'getownbalance' });
 *
 * @returns responseApi
 * */
export const mobizonService = async ({
  module,
  method,
  postParams,
  queryParams,
}) => {
  const request = create({
    baseURL: `${environment.apiServer}/service`,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    httpsAgent: new Agent({ rejectUnauthorized: false }),
  });

  const queryDefault = stringify({
    output: environment.format,
    api: environment.apiVersion,
    apiKey: environment.apiKey,
  });

  if (postParams) {
    const responsePost = await request.post(
      `${module}/${method}?${queryDefault}`,
      stringify(postParams)
    );

    return responsePost.data;
  }

  const query = queryParams
    ? `${stringify(queryParams)}&${queryDefault}`
    : queryDefault;

  const { data } = await request.get(`${module}/${method}?${query}`);

  return data;
};
