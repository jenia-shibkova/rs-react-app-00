import { FormEvent, JSX, useRef } from 'react';
import { SearchProps } from './types.ts';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router';
import useLocalStorage from '../../hooks/useLocalStorage';
import './styles.css';

const Search = (props: SearchProps): JSX.Element => {
  const { text, handleInputChange, handleClick } = props;
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [_, setLocalStorageStateValue] = useLocalStorage('search-query', '');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const inputValue = inputRef.current?.value || '';
    setLocalStorageStateValue('search-query', `?search=${inputValue}`);
    navigate(`?search=${inputValue}`);
    console.log('search-query', _);
  };

  return (
    <div className="search-wrapper" data-testid="search">
      <form className="search-box" onSubmit={handleSubmit}>
        <div className="icon-search">
          <SearchIcon />
        </div>
        <input
          ref={inputRef}
          placeholder="Search hero..."
          className="input"
          value={text}
          onChange={handleInputChange}
        />
        <button onClick={handleClick} className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
