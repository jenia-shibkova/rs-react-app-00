import { Link } from 'react-router';
import './styles.css';

const NotFound = (): JSX.Element => {
  return (
    <div className="wrapper">
      <p>Sorry, the page is Not Found</p>
      <Link to="/" className="button">
        HOME
      </Link>
    </div>
  );
};

export default NotFound;
