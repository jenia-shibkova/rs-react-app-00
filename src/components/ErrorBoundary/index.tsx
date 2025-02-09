import { Component, ErrorInfo } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types.ts';
import './styles.css';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log('Error caught by ErrorBoundary:', error);
    console.error('Error info:', info);
  }

  handleClose = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="error">
            <div className="error-overlay" onClick={this.handleClose}></div>
            <div className="error-inner">
              <p className="error-title">Something went wrong</p>
              <button className="error-btn" onClick={this.handleClose}>
                Close
              </button>
            </div>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
