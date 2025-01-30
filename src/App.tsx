import { Component, ChangeEvent } from 'react';
import Main from './components/Main';
import ErrorBoundary from './components/ErrorBoundary';
import { getMarvelData } from './api';
import './App.css';

interface AppState {
  typedValue: string;
  //users: UserData | null;
  data: any;//[] | null;
  limit: number;
  offset: number;
  text: string;
  amountOfPages: number;
  isFetching: boolean;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      typedValue: '',
      data: null,
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
        console.log('res...', res?.data?.data?.results)
          this.setState({ data: res?.data?.data?.results });
        });
      });
    }
  }

  // handleAgeChange = () => {
  //   // console.log('this.state.age', this.state.age)
  //   // this.setState({
  //   //   age: this.state.age + 1 
  //   // });
  // };

  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    console.log('this.state.text____', this.state.text)
    // localStorage.setItem('prompt', this.state.typedValue);
    // this.setState({ typedValue: newValue, offset: 1 });

    const newValue = event.target.value;
    // localStorage.setItem('prompt', this.state.typedValue);
    this.setState({ text: newValue, offset: 1 });
  }

  handleClick() {
    // ...
console.log('CLICK')
    this.setState({ isFetching: true });
    
    getMarvelData(this.state.limit, this.state.offset, this.state.text).then((res) => {
      localStorage.setItem('prompt', this.state.typedValue);
      this.setState({ data: res?.data?.data?.results , isFetching: false });
    });
  }

  handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('this.state.text', this.state.text)
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <ErrorBoundary>
        <Main
          handleInputChange={this.handleInputChange}
          handleClick={this.handleClick}
          text={this.state.text}
          data={this.state.data}
          isFetching={this.state.isFetching}
        />
      </ErrorBoundary>
    );
  }
}

export default App
