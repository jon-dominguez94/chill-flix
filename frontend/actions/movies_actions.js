import * as APIUtils from '../util/movie_api_util';

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";

export const fetchMovies = () => dispatch => {
  return APIUtils.fetchMovies()
    .then(
      movies => dispatch(receiveMovies(movies))
    );
};

const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies
});


export const fetchMovie = (id) => dispatch => {
  return APIUtils.fetchMovie(id)
    .then(
      movie => dispatch(receiveMovie(movie))
    );
};

const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie
});


