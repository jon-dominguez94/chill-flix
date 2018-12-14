import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BrowseContainer from './browse/browse';

const App = () => (
  <div className="overall">
    <header>
      {/* <h1>ChillFlix</h1> */}
    </header>
    <Switch>
      <AuthRoute exact path="/" component={NavbarContainer} />
      <ProtectedRoute exact path="/browse" component={BrowseContainer} />
      <ProtectedRoute path="/list" component={NavbarContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Redirect to="/"/>
    </Switch>
  </div>
);

export default App;