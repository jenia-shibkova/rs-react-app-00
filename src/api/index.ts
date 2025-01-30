import axios, { AxiosError, AxiosResponse } from 'axios';
import md5 from 'md5';

interface MarvelDataResponse {
  "data": {
    "code": number;
    "status": string;
    "copyright": string;
    "attributionText": string;
    "attributionHTML": string;
    "data": {
      "offset": number;
      "limit": number;
      "total": number;
      "count": number;
      "results": Array<{
        "id": number;
        "name": string;
        "description": string;
        "modified": string;
        "thumbnail": {
          "path": string;
          "extension": string;
        },
        "resourceURI": string;
        "comics": {
          "available": number;
          "collectionURI": string;
          "items": Array<{
            "resourceURI": string,
            "name": string
          }>;
          "returned": number;
        },
        "series": {
          "available": number;
          "collectionURI": string;
          "items": Array<{
            "resourceURI": string;
            "name": string;
          }>;
          "returned": number;
        },
        "stories": {
          "available": number;
          "collectionURI": string;
          "items": Array<{
            "resourceURI": string;
            "name": string;
            "type": string;
          }>;
          "returned": number;
        },
        "events": {
          "available": number;
          "collectionURI": string;
          "items": Array<{
            "resourceURI": string;
            "name": string;
          }>,
          "returned": number;
        },
        "urls": Array<{
          "type": string;
          "url": string;
        }>;
      }>;
      }
    },
    "status": number;
    "statusText": string;
    "headers": {
        "content-type": string;
        "date": string;
    },
    "config": {
        "transitional": {
        "silentJSONParsing": boolean;
            "forcedJSONParsing": boolean;
            "clarifyTimeoutError": boolean;
        },
      "adapter": string[];
      "transformRequest": [];
      "transformResponse": [];
      "timeout": number;
      "xsrfCookieName": string;
      "xsrfHeaderName": string;
        "maxContentLength": number;
        "maxBodyLength": number;
        "env": {},
        "headers": {
            "Accept": string;
        },
        "params": {
            "offset": number;
            "limit": number;
            "ts": number;
            "apikey": string;
            "hash": string;
        },
      "method": string;
        "url": string;
    },
    "request": {}
}

async function fetchMarvelData(url: string): Promise<MarvelDataResponse> {
	try {
		const response: AxiosResponse<MarvelDataResponse> = await axios.get(url);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const axiosError = error as AxiosError;
			console.error('Ошибка при получении данных:', axiosError.message);
		} else {
			console.error('Неизвестная ошибка:', error);
		}
		throw new Error('Ошибка при получении данных');
	}
}

export async function getMarvelData(limit: number, offset: number, text: string): Promise<MarvelDataResponse> {
  const apiUrl = 'http://gateway.marvel.com/v1/public';

  const publicKey = '662b7ca00a14f38dd88cbfc39cb21471';
  const privateKey = '87e58ea306349a79a418647d54b54294cfbb3a38';
//work `${apiUrl}${'/characters?nameStartsWith=A'
  // const urrl = '/characters?ts={{ts}}&hash={{hash}}&nameStartsWith=A&orderBy=modified&limit=1'
  const searchValue = text ? `/characters?nameStartsWith=${text}` : '/characters';

  try {
    const timestamp = Date.now();
		// const data = await fetchUserData(url);
		// console.log('Данные:', data);
    // return data;
    return axios.get(`${apiUrl}${searchValue}`, {
      params: {
        ...{
          offset:	offset,
          limit: limit,
        },
        ts: timestamp,
        apikey: publicKey,
        hash: md5(`${timestamp}${privateKey}${publicKey}`),
      },
      data: undefined,
    });
	} catch (error) {
		console.error('error..', error);
		throw error;
	}
}