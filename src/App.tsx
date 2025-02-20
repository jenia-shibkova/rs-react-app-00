import { JSX, ChangeEvent, useState, useEffect, useCallback, useRef } from 'react';
import { Outlet, useNavigate } from 'react-router';
import classNames from 'classnames';
import { getMarvelData } from './api';
import { MarvelItem } from './api/interfaces';
import useLocalStorage from './hooks/useLocalStorage.ts';
import useSearchParams from './hooks/useSearchParams';
import useTheme from './hooks/useTheme';
import { Header, List, ErrorBoundary, ErrorButton } from './components';
import styles from './App.module.css';

const App = (): JSX.Element => {
  const [cardsData, setCardsData] = useState<MarvelItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [total, setTotal] = useState<number>(10);

  const { theme, toggleTheme } = useTheme();

  const limit: number = 10;

  const navigate = useRef(useNavigate());

  const [search, page] = useSearchParams();
  const [offset, setOffset] = useState<number>(Number(page) - 1);
  const [localStorageValue = '', setLocalStorageStateValue] = useLocalStorage('search-value', '');
  const [searchLSQuery, setSearchLSQueryValue] = useLocalStorage('search-query', '');
  const [searchValue, setSearchValue] = useState<string>(String(search) || localStorageValue);

  const fetchData = useCallback(async () => {
    const currentSearchValue = searchValue ? searchValue : localStorageValue;
    try {
      await getMarvelData(limit, offset, currentSearchValue).then((res) => {
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
  }, [offset, searchValue, localStorageValue]);

  useEffect(() => {
    navigate.current(searchLSQuery);
  }, [searchLSQuery]);

  useEffect(() => {
    setIsLoading(true);

    fetchData();
  }, [searchLSQuery, fetchData]);

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

  const handleNext = (page: number): void => {
    const newQuery = `/?search=${search}&page=${page}`;
    setOffset(page * 10 - 10);
    setSearchLSQueryValue('search-query', newQuery);
  };

  return (
    <div className={classNames(styles.mainWrapper, styles[theme])}>
      <button className={styles.themeBtn} onClick={toggleTheme}>
        {theme}
      </button>
      <div className={styles.mainContent}>
        <Header
          handleInputChange={handleInputChange}
          handleClick={handleClick}
          handleNext={handleNext}
          text={searchValue}
          total={total}
          offset={offset}
        />

        <List errorMessage={error} items={cardsData} isFetching={isLoading} />
      </div>

      <ErrorBoundary>
        <ErrorButton />
      </ErrorBoundary>

      <Outlet />
    </div>
  );
};

export default App;
