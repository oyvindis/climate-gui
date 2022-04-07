import axios from 'axios';
import env from '../../../env';

interface Props {
  path: string;
  method: any;
  data?: any;
  params?: URLSearchParams;
}

const { READING_BASE_URI } = env;

export const climateReading = ({ path, method, data, params }: Props) =>
  axios({
    url: `${READING_BASE_URI}${path}`,
    method,
    data,
    params
  })
    .then(response => response.data)
    .catch(() => null);

export const climateReadingPost = (path: string, body: any) =>
  climateReading({ path, method: 'POST', data: body });

export const climateReadingGet = (path: string, params?: URLSearchParams) =>
  climateReading({ path, method: 'GET', params });
