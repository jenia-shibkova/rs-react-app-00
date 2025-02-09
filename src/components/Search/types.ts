import { ChangeEvent } from 'react';

export interface SearchProps {
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  text: string;
}
