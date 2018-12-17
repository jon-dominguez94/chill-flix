import { connect } from 'react-redux';
import MovieInfo from './movie_info';
import { withRouter } from 'react-router-dom';

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

export default withRouter(connect(mstp, mdtp)(MovieInfo));