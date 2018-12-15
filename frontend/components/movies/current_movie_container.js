import { connect } from 'react-redux';
import CurrentMovie from './current_movie';

const mstp = (state, ownProps) => {
  const movieId = ownProps.match.params.movieId;
  return ({
    movie: state.entities.movies[movieId]
  });
};

export default connect(mstp)(CurrentMovie);