import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { ListEl, Navlink } from './MovieList.styled';
import Box from 'components/Box';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <Box as="ul" pl="20px">
      {movies.length > 0 &&
        movies.map(({ id, title }) => {
          return (
            <ListEl key={id}>
              <Navlink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Navlink>
            </ListEl>
          );
        })}
    </Box>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MovieList;
