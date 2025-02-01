import { Component, ChangeEvent } from 'react';
import Main from './components/Main';
import ErrorBoundary from './components/ErrorBoundary';
import { getMarvelData, MarvelItem } from './api';
import './App.css';

interface AppState {
  typedValue: string;
  data: MarvelItem[] | [];
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
      limit: 10,
      offset: 1,
      text: '',
      amountOfPages: 0,
      isFetching: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const storedPrompt = localStorage.getItem('prompt');
    if (storedPrompt) {
      this.setState({ typedValue: storedPrompt }, () => {
        // getUserData(this.state.limit, this.state.offset, storedPrompt).then((res) => {
        //   this.setState({ data: res });
        // });
      });
    } else {
      this.setState({ typedValue: '' }, () => {
        getMarvelData(this.state.limit, this.state.offset, '').then((res) => {
          console.log('res...', res?.data?.data?.results);
          this.setState({ data: res?.data?.data?.results });
        });
      });
    }
  }

  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    console.log('this.state.text____', this.state.text);
    // localStorage.setItem('prompt', this.state.typedValue);
    // this.setState({ typedValue: newValue, offset: 1 });

    const newValue = event.target.value;
    // localStorage.setItem('prompt', this.state.typedValue);
    this.setState({ text: newValue, offset: 1 });
  }

  handleClick() {
    // ...
    console.log('CLICK');
    this.setState({ isFetching: true });

    getMarvelData(this.state.limit, this.state.offset, this.state.text).then(
      (res) => {
        localStorage.setItem('prompt', this.state.typedValue);
        this.setState({ data: res?.data?.data?.results, isFetching: false });
      }
    );
  }

  handleNext = () => {
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
    if (this.state.offset === 1) {
      return;
    }
    console.log('this.state.offset', this.state.offset);
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
