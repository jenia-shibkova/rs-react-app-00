import axios, { AxiosError } from 'axios';
import md5 from 'md5';

export interface MarvelItem {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
    items: Array<{
      resourceURI: string;
      name: string;
    }>;
    returned: number;
  };
  series: {
    available: number;
    collectionURI: string;
    items: Array<{
      resourceURI: string;
      name: string;
    }>;
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: Array<{
      resourceURI: string;
      name: string;
      type: string;
    }>;
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: Array<{
      resourceURI: string;
      name: string;
    }>;
    returned: number;
  };
  urls: Array<{
    type: string;
    url: string;
  }>;
}

export interface MarvelDataResponse {
  data: {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: {
      offset: number;
      limit: number;
      total: number;
      count: number;
      results: MarvelItem[];
    };
  };
  status: number;
  statusText: string;
  headers: {
    'content-type': string;
    date: string;
  };
  config: {
    transitional: {
      silentJSONParsing: boolean;
      forcedJSONParsing: boolean;
      clarifyTimeoutError: boolean;
    };
    adapter: string[];
    transformRequest: [];
    transformResponse: [];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: object;
    headers: {
      Accept: string;
    };
    params: {
      offset: number;
      limit: number;
      ts: number;
      apikey: string;
      hash: string;
    };
    method: string;
    url: string;
  };
  request: object;
}

export async function getMarvelData(
  limit: number,
  offset: number,
  text: string
): Promise<MarvelDataResponse> {
  const apiUrl = 'http://gateway.marvel.com/v1/public';

  const publicKey = '662b7ca00a14f38dd88cbfc39cb21471';
  const privateKey = '87e58ea306349a79a418647d54b54294cfbb3a38';

  const searchValue = text
    ? `/characters?nameStartsWith=${text}`
    : '/characters';

  try {
    const timestamp = Date.now();

    return axios.get(`${apiUrl}${searchValue}`, {
      params: {
        ...{
          offset: offset,
          limit: limit,
        },
        ts: timestamp,
        apikey: publicKey,
        hash: md5(`${timestamp}${privateKey}${publicKey}`),
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
