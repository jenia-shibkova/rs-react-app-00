import { Component } from 'react';
import { SearchProps } from './types.ts';
import SearchIcon from '@mui/icons-material/Search';
import './styles.css';

class Search extends Component<SearchProps> {
  render() {
    return (
      <div className="search-wrapper">
        <div className="search-box">
          <div className="icon-search">
            <SearchIcon />
          </div>
          <input
            placeholder="Search hero..."
            className="input"
            value={this.props.text}
            onChange={this.props.handleInputChange}
          />
          <button
            onClick={this.props.handleClick}
            className="search-button"
            disabled={!this.props.text}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
