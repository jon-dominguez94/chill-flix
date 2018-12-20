import { connect } from 'react-redux';
import Browse from './browse';
import { withRouter } from 'react-router-dom';
import { fetchMovies } from '../../actions/movies_actions';

const mstp = (state, ownProps) => {
  // alert(ownProps.query);
  let pathname = window.location.href;
  let query = "";
  // debugger
  if (pathname.includes('search?=')) {
    query = pathname.split('=')[1];
  }
  return ({
    movies: Object.values(state.entities.movies),
    query: query
  });
};

const mdtp = (dispatch) => {
  return ({
    fetchMovies: () => dispatch(fetchMovies())
  });
};

export default withRouter(connect(mstp, mdtp)(Browse));