import { connect } from 'react-redux';
import MovieInfo from './movie_info';
import { withRouter } from 'react-router-dom';

const mstp = (state, ownProps) => {
  const movieId = ownProps.match.params.movieId;
  const spinnerId = ownProps.match.params.spinnerId;
  debugger
  const valid_movie = state.entities.movies.hasOwnProperty(movieId)
  // const same_spinner = order === spinnerId;
  return ({
    valid: valid_movie,
    movie: state.entities.movies[movieId]
  });
};

const mdtp = dispatch => {
  return ({

  });
};

export default withRouter(connect(mstp, mdtp)(MovieInfo));