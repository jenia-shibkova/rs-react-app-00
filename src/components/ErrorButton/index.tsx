import { type JSX, useEffect, useState } from 'react';
import './styles.css';

const ErrorButton = (): JSX.Element => {
  const [hasError, setHasError] = useState<boolean>(false);

  const handleClick = (): void => {
    setHasError(true);
  };

  useEffect(() => {
    if (hasError) {
      throw new Error('I crashed!');
    }
  }, [hasError]);

  return (
    <div className="button-wrapper">
      <button className="throw__error" onClick={handleClick}>
        Throw Error
      </button>
    </div>
  );
};

export default ErrorButton;
