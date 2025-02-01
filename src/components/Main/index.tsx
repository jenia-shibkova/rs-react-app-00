import { Component } from 'react';
import Header from '../Header';
import List from '../List';
import { MainProps } from './types.ts';
import ErrorBoundary from '../ErrorBoundary';
import ErrorButton from '../ErrorButton';
import Pagination from '../Pagination';
import './styles.css';

class Main extends Component<MainProps> {
  render() {
    return (
      <div className="main-wrapper">
        <div className="main-content">
          <Header
            handleInputChange={this.props.handleInputChange}
            handleClick={this.props.handleClick}
            text={this.props.text}
          />
          <List items={this.props.data} isFetching={this.props.isFetching} />
        </div>

        {this.props.data && this.props.data.length > 0 && (
          <div className="pagination-wrapper">
            <Pagination
              handlePrev={this.props.handlePrev}
              handleNext={this.props.handleNext}
            />
          </div>
        )}

        <ErrorBoundary>
          <ErrorButton />
        </ErrorBoundary>
      </div>
    );
  }
}

export default Main;
