import { ReactNode } from 'react';

export type Theme = 'light' | 'dark';

export type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
} | null;

export type Props = {
  children: ReactNode;
};
