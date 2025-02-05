import { Component } from 'react';
import './styles.css';

interface State {
  hasError: boolean;
}

class ErrorButton extends Component<object, State> {
  state: State = {
    hasError: false,
  };

  handleClick = (): void => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
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
