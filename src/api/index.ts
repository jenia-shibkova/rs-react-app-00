import axios from 'axios';
import md5 from 'md5';
import { API_URL, PUBLIC_KEY, PRIVATE_KEY } from './constants';
import { MarvelDataResponse } from './interfaces';

export async function getMarvelData(
  limit: number,
  offset: number,
  text?: string,
): Promise<MarvelDataResponse> {
  const searchValue = text ? `/characters?nameStartsWith=${text}` : '/characters';

  const timestamp = Date.now();

  return axios.get(`${API_URL}${searchValue}`, {
    params: {
      ...{
        offset: offset,
        limit: limit,
      },
      ts: timestamp,
      apikey: PUBLIC_KEY,
      hash: md5(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`),
    },
    data: undefined,
  });
}
