import { ChangeEvent } from 'react';
import { MarvelItem } from '../../api/interfaces';

export interface MainProps {
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  handlePrev: () => void;
  handleNext: () => void;
  text: string;
  data: MarvelItem[] | [];
  isFetching: boolean;
  errorMessage: string;
}
