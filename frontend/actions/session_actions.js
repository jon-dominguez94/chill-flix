import * as APIUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const login = user => dispatch => {
  return APIUtils.login(user)
    .then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    );
};

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logout = () => dispatch => {
  return APIUtils.logout()
    .then(
      () => dispatch(logoutCurrentUser())
    );
};

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
  data: {}
});

export const signup = user => dispatch => {
  return APIUtils.signup(user)
    .then(
      newUser => dispatch(receiveCurrentUser(newUser)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    );
};


export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});