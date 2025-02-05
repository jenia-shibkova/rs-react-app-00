import { ChangeEvent } from 'react';

export interface HeaderProps {
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  text: string;
}
