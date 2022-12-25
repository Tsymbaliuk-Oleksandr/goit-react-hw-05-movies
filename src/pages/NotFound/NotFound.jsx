import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <h3>
      Oops, this page not found go to <Link to="/">Home page!</Link>
    </h3>
  );
};

export default NotFound;
