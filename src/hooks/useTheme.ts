import { useContext } from 'react';
import { ThemeContext } from '../resources/Themes/ThemeContext';

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeContext');
  }
  return context;
};

export default useTheme;
