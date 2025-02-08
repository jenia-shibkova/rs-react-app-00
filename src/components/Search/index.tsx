import { JSX } from 'react';
import { SearchProps } from './types.ts';
import SearchIcon from '@mui/icons-material/Search';
import './styles.css';

const Search = (props: SearchProps): JSX.Element => {
  const { text, handleInputChange, handleClick } = props;
  return (
    <div className="search-wrapper">
      <div className="search-box">
        <div className="icon-search">
          <SearchIcon />
        </div>
        <input
          placeholder="Search hero..."
          className="input"
          value={text}
          onChange={handleInputChange}
        />
        <button onClick={handleClick} className="search-button" disabled={!text}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
