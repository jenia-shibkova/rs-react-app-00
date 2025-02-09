import axios from 'axios';
import md5 from 'md5';
import {
  API_URL,
  API_URL_CHARACTERS,
  PUBLIC_KEY,
  PUBLIC_KEY_CHARACTERS,
  PRIVATE_KEY,
} from './constants';
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

export async function getDetails(id: string) {
  const hash = 'd516513ba95b9407c7aca0f73b241f8a';

  return axios.get(
    `${API_URL_CHARACTERS}/characters/${id}?ts=1&apikey=${PUBLIC_KEY_CHARACTERS}&hash=${hash}`,
  );
}
