import { Component } from 'react';
import './styles.css';

interface State {
  counter: number;
}

class ErrorButton extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    if (this.state.counter === 1) {
      throw new Error('I crashed!');
    }
    return (
      <div className="button-wrapper">
        <button className="throw__error" onClick={this.handleClick}>
          Throw Error
        </button>
      </div>
    );
  }
}

export default ErrorButton;
