import { JSX } from 'react';
import Header from '../Header';
import List from '../List';
import { MainProps } from './types.ts';
import ErrorBoundary from '../ErrorBoundary';
import ErrorButton from '../ErrorButton';
import Pagination from '../Pagination';
import './styles.css';
const Main = (props: MainProps): JSX.Element => {
  const {
    handleInputChange,
    handleClick,
    handlePrev,
    handleNext,
    text,
    errorMessage,
    data,
    isFetching,
  } = props;

  return (
    <div className="main-wrapper">
      <div className="main-content">
        <Header handleInputChange={handleInputChange} handleClick={handleClick} text={text} />

        <List errorMessage={errorMessage} items={data} isFetching={isFetching} />
      </div>

      {data && data.length > 0 && (
        <div className="pagination-wrapper">
          <Pagination handlePrev={handlePrev} handleNext={handleNext} />
        </div>
      )}

      <ErrorBoundary>
        <ErrorButton />
      </ErrorBoundary>
    </div>
  );
};

export default Main;
