import { connect } from 'react-redux';
import SearchResults from './search_results';
import { withRouter } from 'react-router-dom';
import { fetchMovies } from '../../actions/movies_actions';


const mstp = (state, ownProps) => {
  // alert(ownProps.query);
  return ({
    movies: Object.values(state.entities.movies),
    query: ownProps.query
  });
};


const mdtp = (dispatch) => {
  return ({
    fetchMovies: () => dispatch(fetchMovies())
  });
};

export default withRouter(connect(mstp, mdtp)(SearchResults));