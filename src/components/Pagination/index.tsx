import { JSX } from 'react';
import { PaginationProps } from './types.ts';
import './styles.css';

const Pagination = (props: PaginationProps): JSX.Element => {
  const { handleNext, handlePrev } = props;

  return (
    <div className="pagination">
      <button onClick={handlePrev}>&larr;</button>
      <button onClick={handleNext}>&rarr;</button>
    </div>
  );
};

export default Pagination;
