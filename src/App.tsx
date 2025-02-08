import { JSX, ChangeEvent, useState, useEffect, useCallback } from 'react';
import Main from './components/Main';
import ErrorBoundary from './components/ErrorBoundary';
import { getMarvelData } from './api';
import { MarvelItem } from './api/interfaces';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

const App = (): JSX.Element => {
  const [cardsData, setCardsData] = useState<MarvelItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [total, setTotal] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  const limit: number = 10;

  const [localStorageValue, setLocalStorageStateValue] = useLocalStorage('search-value', '');
  const [searchValue, setSearchValue] = useState<string>(localStorageValue);

  const fetchData = useCallback(async () => {
    try {
      await getMarvelData(limit, offset, searchValue).then((res) => {
        setCardsData(res?.data?.data?.results);
        setTotal(res?.data?.data?.total);
      });
    } catch (error) {
      console.error('Error while fetching data:', error);
      setError('The search failed. Please, try again later');
    } finally {
      setIsLoading(false);
      setError('');
    }
  }, [offset, searchValue]);

  useEffect(() => {
    setIsLoading(true);

    fetchData();
  }, [fetchData, searchValue]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    setOffset(0);
  };

  const handleClick = async () => {
    setIsLoading(true);
    setLocalStorageStateValue('search-value', searchValue);

    fetchData();
  };

  const handleNext = (): void => {
    if (total - offset < limit) {
      return;
    }
    setOffset((prevValue) => prevValue + limit);
    handleClick();
  };

  const handlePrev = (): void => {
    if (offset === 0) {
      return;
    }

    setOffset((prevValue) => prevValue - limit);
    handleClick();
  };

  return (
    <>
      <ErrorBoundary>
        <Main
          handleInputChange={handleInputChange}
          handleClick={handleClick}
          handlePrev={handlePrev}
          handleNext={handleNext}
          text={searchValue}
          data={cardsData}
          isFetching={isLoading}
          errorMessage={error}
        />
      </ErrorBoundary>
    </>
  );
};

export default App;
