import { Component, ChangeEvent } from 'react';
import Main from './components/Main';
import ErrorBoundary from './components/ErrorBoundary';
import { getMarvelData } from './api';
import { MarvelItem } from './api/interfaces';
import './App.css';

interface AppState {
  typedValue: string;
  data: MarvelItem[] | [];
  total: number;
  limit: number;
  offset: number;
  text: string;
  amountOfPages: number;
  isFetching: boolean;
}

class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      typedValue: '',
      data: [],
      total: 10,
      limit: 10,
      offset: 0,
      text: '',
      amountOfPages: 0,
      isFetching: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    try {
      this.setState({ isFetching: true });
      const searchValue: string = localStorage.getItem('search-value') || '';

      this.setState({ text: searchValue, typedValue: searchValue }, () => {
        getMarvelData(this.state.limit, this.state.offset, searchValue).then((res) => {
          this.setState({
            data: res?.data?.data?.results,
            total: res?.data?.data?.total,
            isFetching: false
          });
        });
      });
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  }

  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    this.setState({ text: newValue, offset: 0 });
  }

  handleClick() {
    this.setState({ isFetching: true });
    localStorage.setItem('search-value', this.state.text); 

    getMarvelData(this.state.limit, this.state.offset, this.state.text).then(
      (res) => {
        this.setState({
          data: res?.data?.data?.results,
          total: res?.data?.data?.total,
          isFetching: false,
        });
      }
    );
  }

  handleNext = () => {
    if ((this.state.total - this.state.offset) < this.state.limit) {
      return;
    }
    this.setState(
      (prevState) => ({
        offset: prevState.offset + this.state.limit,
      }),
      () => {
        this.handleClick();
      }
    );
  };

  handlePrev = () => {
    if (this.state.offset === 0) {
      return;
    }
    this.setState(
      (prevState) => {
        return {
          offset: prevState.offset - this.state.limit,
        };
      },
      () => {
        this.handleClick();
      }
    );
  };

  render() {
    return (
      <>
        <ErrorBoundary>
          <Main
            handleInputChange={this.handleInputChange}
            handleClick={this.handleClick}
            handlePrev={this.handlePrev}
            handleNext={this.handleNext}
            text={this.state.text}
            data={this.state.data}
            isFetching={this.state.isFetching}
          />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
