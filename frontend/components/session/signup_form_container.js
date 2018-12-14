import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, receiveErrors } from '../../actions/session_actions';
// import { selectAllErrors } from '../../reducers/selectors';
import { Link } from 'react-router-dom';
import React from 'react';

const mstp = (state, ownProps) => {
  return ({
    formType: 'Sign Up',
    errors: state.errors.session,
    navLink: <Link to="/login">Log in now</Link>
  });
};

const mdtp = (dispatch, ownProps) => {
  return ({
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  });
};

export default connect(
  mstp,
  mdtp
)(SessionForm);