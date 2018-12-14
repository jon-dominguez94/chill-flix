import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';

const mstp = (state) => {
  return ({
    currentUser: state.entities.users[state.session.id]
  });
};

const mdtp = dispatch => {
  return ({
    logout: () => dispatch(logout())
  });
};

export default connect(
  mstp,
  mdtp
)(Navbar);
