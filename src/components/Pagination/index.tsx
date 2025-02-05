import { Component } from 'react';
import { PaginationProps } from './types.ts';
import './styles.css';

class Pagination extends Component<PaginationProps> {
  render() {
    const { handleNext, handlePrev } = this.props;

    return (
      <div className="pagination">
        <button onClick={handlePrev}>&larr;</button>
        <button onClick={handleNext}>&rarr;</button>
      </div>
    );
  }
}

export default Pagination;
