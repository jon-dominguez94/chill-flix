import { connect } from 'react-redux';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { login, receiveErrors } from '../../actions/session_actions';
// import { selectAllErrors } from '../../reducers/selectors';
import React from 'react';
import { withRouter } from 'react-router-dom';

const mstp = (state, ownProps) => {
  return ({
    formType: 'Sign In',
    errors: state.errors.session,
    navLink: <Link to="/signup">Sign up now</Link>
  });
};

const mdtp = (dispatch, ownProps) => {
  return ({
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  });
};

export default withRouter(connect(
  mstp,
  mdtp
)(SessionForm));