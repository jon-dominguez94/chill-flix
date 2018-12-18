import { connect } from 'react-redux';
import MovieInfo from './movie_info';
import { withRouter } from 'react-router-dom';

const mstp = (state, ownProps) => {
  // debugger
  const movieId = ownProps.match.params.movieId;
  const spinnerId = ownProps.match.params.spinnerId;
  const valid_movie = state.entities.movies.hasOwnProperty(movieId);
  const same_spinner = (ownProps.order === spinnerId);
  const valid = valid_movie && same_spinner;
  // debugger
  return ({
    valid,
    valid_movie,
    movie: state.entities.movies[movieId]
  });
};

const mdtp = dispatch => {
  return ({
    fetchMovie: id => dispatch(fetchMovie(id))
  });
};

export default withRouter(connect(mstp, mdtp)(MovieInfo));