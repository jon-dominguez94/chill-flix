import { connect } from 'react-redux';
import CurrentMovie from './current_movie';
import { fetchMovie } from '../../actions/movies_actions';
import { withRouter } from 'react-router-dom';

const mstp = (state, ownProps) => {
  const movieId = ownProps.match.params.movieId;
  const valid = state.entities.movies.hasOwnProperty(movieId);
  return ({
    valid: valid,
    movie: state.entities.movies[movieId]
  });
};

const mdtp = dispatch => {
  return ({
    fetchMovie: id => dispatch(fetchMovie(id))
  });
};

export default withRouter(connect(mstp, mdtp)(CurrentMovie));