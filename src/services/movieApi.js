const URL = 'https://api.themoviedb.org/3';
const KEY = '?api_key=9f42b502c91ae17e633123157d323362';
const fetchTrendingMovies = () => {
  return fetch(`${URL}/trending/movie/day${KEY}`).then(r => r.json());
};
const fetchMovieDetails = movieId => {
  return fetch(`${URL}/movie/${movieId}${KEY}`).then(r => r.json());
};
const fetchCast = movieId => {
  return fetch(`${URL}/movie/${movieId}/credits${KEY}`).then(r => r.json());
};
const fetchReviews = movieId => {
  return fetch(`${URL}/movie/${movieId}/reviews${KEY}`).then(r => r.json());
};
const fetchMovie = query => {
  return fetch(`${URL}/search/movie${KEY}&query=${query}`).then(r => r.json());
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchCast,
  fetchReviews,
  fetchMovie,
};
