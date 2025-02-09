import { ChangeEvent } from 'react';

export interface HeaderProps {
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  handleNext: (page: number) => void;
  text: string;
  total: number;
  offset: number;
}
