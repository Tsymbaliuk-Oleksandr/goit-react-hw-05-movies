import axios from 'axios';

const API_KEY = '413db9532d5787ee509e5f4a56809ea0';
const API_BASE_URL = 'https://api.themoviedb.org/3';
export const API_IMG_URL = 'https://image.tmdb.org/t/p/w500';

axios.defaults.baseURL = API_BASE_URL;

const params = {
  params: { api_key: API_KEY },
};

export const fetchTrending = async () => {
  try {
    const response = await axios
      .get(`/trending/movie/day`, params)
      .then(response => response.data.results);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovie = async id => {
  try {
    const response = await axios
      .get(`/movie/${id}`, params)
      .then(response => response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieCast = async id => {
  try {
    const response = await axios
      .get(`/movie/${id}/credits`, params)
      .then(response => response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieReview = async id => {
  try {
    const response = await axios
      .get(`/movie/${id}/reviews`, params)
      .then(response => response.data.results);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const searchMovies = async query => {
  const params = { params: { api_key: API_KEY, query } };
  try {
    const response = await axios
      .get(`/search/movie`, params)
      .then(response => response.data.results);
    return response;
  } catch (error) {
    console.error(error);
  }
};
