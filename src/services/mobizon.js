import { create } from 'axios';
import { Agent } from 'https';
import { stringify } from 'qs';

import environment from '../environment';

export default async (provider, method, postParams, queryParams) => {
  const { format, apiVersion, apiKey, apiServer } = environment;

  const request = create({
    baseURL: `${apiServer}/service`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    httpsAgent: new Agent({
      rejectUnauthorized: false,
    }),
  });

  const queryDefault = stringify({
    output: format,
    api: apiVersion,
    apiKey,
  });

  if (postParams) {
    const body = stringify(postParams);

    const { data } = await request.post(
      `${provider}/${method}?${queryDefault}`,
      body
    );

    return data;
  }

  const query = queryParams
    ? `${stringify(queryParams)}&${queryDefault}`
    : queryDefault;

  const { data } = await request.get(`${provider}/${method}?${query}`);

  return data;
};
