import axios from 'axios';
import { getSession } from 'next-auth/react';

import env from '../../../env';

interface Props {
  path: string;
  method: any;
  data?: any;
  params?: URLSearchParams;
}

const { READING_BASE_URI } = env;

export const climateReading = async ({ path, method, data, params }: Props) => {
  const session: any = await getSession();
  return (
    axios({
      url: `${READING_BASE_URI}${path}`,
      method,
      data,
      params,
      headers: {
        Authorization: `Bearer ${session?.accessToken}`
      }
    })
      .then(response => response.data)
      .catch(() => null)
  );
}

export const climateReadingPost = (path: string, body: any) =>
  climateReading({ path, method: 'POST', data: body });

export const climateReadingGet = (path: string, params?: URLSearchParams) =>
  climateReading({ path, method: 'GET', params });
