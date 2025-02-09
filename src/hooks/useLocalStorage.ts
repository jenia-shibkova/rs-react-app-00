import { useState } from 'react';

const useLocalStorage = (key = 'search-value', defaultValue = '') => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (error) {
      console.log('LocalStorage error:', error);
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  });

  const setLocalStorageStateValue = (key: 'string', value: 'string') => {
    localStorage.setItem(key, JSON.stringify(value));
    setLocalStorageValue(value);
  };
  return [localStorageValue, setLocalStorageStateValue];
};

export default useLocalStorage;
