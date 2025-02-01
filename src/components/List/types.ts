import { MarvelDataResponse } from '../../api';

export interface ListProps {
  items: MarvelDataResponse['data']['data']['results'];
  isFetching: boolean;
}
