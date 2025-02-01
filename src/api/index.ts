import axios, { AxiosError } from 'axios';
import md5 from 'md5';
import { API_URL, PUBLIC_KEY, PRIVATE_KEY } from './constants';
import { MarvelDataResponse } from './interfaces';

export async function getMarvelData(
  limit: number,
  offset: number,
  text?: string,
): Promise<MarvelDataResponse> {
  const searchValue = text ? `/characters?nameStartsWith=${text}` : '/characters';

  try {
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
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error('Error message:', axiosError.message);
    } else {
      console.error('Unknown error:', error);
    }
    throw new Error('Error');
  }
}
