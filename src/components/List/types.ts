import { MarvelItem } from '../../api/interfaces';

export interface ListProps {
  items: MarvelItem[] | [];
  isFetching: boolean;
  errorMessage: string;
}
