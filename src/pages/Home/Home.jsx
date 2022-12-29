import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api.js';
import MovieList from 'components/MovieList';
import Box from 'components/Box';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(setTrendingMovies);
  }, []);

  return (
    <Box as="section" ml="30px">
      <h1>Trending today</h1>
      <MovieList movies={trendingMovies} />
    </Box>
  );
};

export default Home;
