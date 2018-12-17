import { connect } from 'react-redux';
import MovieInfo from './movie_info';

const mstp = (state, ownProps) => {
  const movieId = ownProps.match.params.movieId;
  const valid = state.entities.movies.hasOwnProperty(movieId);
  return ({
    valid,
    movie: state.entities.movies[movieId]
  });
};

const mdtp = dispatch => {
  return ({

  });
};

export default connect(mstp, mdtp)(MovieInfo);