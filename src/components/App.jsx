import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from 'path/to/pages/Home';
import Movies from 'path/to/pages/Movies';
import MovieDetails from 'path/to/pages/MovieDetails';
import MovieCast from 'path/to/components/MovieCast';
import MovieReviews from 'path/to/components/MovieReviews';
import NotFound from 'path/to/pages/NotFound';

export const App = () => {
  return {
    /* <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
        <StyledLink to="/moviesDetails">MovieDetails</StyledLink>
      </nav> */
  };
  <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
  </Routes>
  
  // <Routes >
  //   <Route path="/" element={<Layout />}>
  //     <Route index element={<Home />} />
  //     <Route path="/movies" element={<Movies />} />
  //     <Route path="/movies/:movieId" element={<MovieDetails />}>
  //       <Route path="movieCast" element={<MovieCast />} />
  //       <Route path="movieReviews" element={<MovieReviews />} />
  //     </Route>
  //     <Route path="*" element={<NotFound />} />
  // </Routes>
};
