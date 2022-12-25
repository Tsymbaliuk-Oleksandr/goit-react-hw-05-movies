import { Routes, Route } from 'react-router-dom';
// import Layout from './Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import MovieCast from 'components/MovieCast';
import MovieReviews from 'components/MovieReviews';
import NotFound from 'pages/NotFound';

export const App = () => {
  return (
    /* <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
        <StyledLink to="/moviesDetails">MovieDetails</StyledLink>
      </nav> */

    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:movieId" element={<MovieDetails />}>
        <Route path="movieCast" element={<MovieCast />} />
        <Route path="movieReviews" element={<MovieReviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      {/* </Route> */}
    </Routes>
  );
};
