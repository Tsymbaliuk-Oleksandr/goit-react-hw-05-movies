import { fetchMovie, API_IMG_URL } from 'themoviedbOrgAPI/themoviedbOrgAPI';
import { useEffect, useState, Suspense } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import Box from 'components/Box';
import { Poster, BackButton, ButtonText, Icon } from './MovieDetails.styled.js';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState();
  const { movieId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovie(movieId).then(setMovieData);
  }, [movieId]);

  if (movieData === undefined) {
    return;
  }
  if (movieData === null) {
    return <Navigate to="/not-found" replace={true} />;
  }

  const { title, poster_path, genres, vote_average, overview } = movieData;

  return (
    <Box as="section">
      {movieData && (
        <Box>
          <BackButton
            type="button"
            onClick={() => navigate(location?.state?.from ?? '/')}
          >
            <ButtonText>Go back</ButtonText>
            <Icon />
          </BackButton>
          <Box
            display="flex"
            height="450px"
            pb="10px"
            boxShadow="0px 3px 1px 1px rgba(100, 100, 150, 0.15)"
          >
            <Poster src={`${API_IMG_URL}${poster_path}`} alt="movie poster" />
            <Box ml="20px">
              <h2>{title}</h2>
              <p>
                User score: <b>{vote_average}</b>
              </p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>
                {genres.map(({ id, name }) => (
                  <span key={id}>{name}</span>
                ))}
              </p>
            </Box>
          </Box>
          <Box
            pb="10px"
            pl="30px"
            boxShadow="0px 3px 1px 1px rgba(100, 100, 150, 0.15)"
          >
            <h3>Additional information</h3>
            <p>
              <Link to="cast" state={{ from: location.state?.from }}>
                Cast
              </Link>
            </p>
            <p>
              <Link to="reviews" state={{ from: location.state?.from }}>
                Reviews
              </Link>
            </p>
          </Box>
          <Suspense fallback={<section>Loading...</section>}>
            <Outlet />
          </Suspense>
        </Box>
      )}
    </Box>
  );
};

export default MovieDetails;
