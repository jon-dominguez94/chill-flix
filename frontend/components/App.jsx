import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BrowseContainer from './browse/browse_container';
// import SearchContainer from './browse/search_results_container';
import CurrentMovieContainer from './movies/current_movie_container';
// import SearchPage from './browse/search_page.jsx';

const App = () => (
  <div className="overall">
    <header>
      {/* <h1>ChillFlix</h1> */}
    </header>
    <Switch>
      {/* <Route path="/" component = {NavbarContainer} /> */}
      <AuthRoute exact path="/" component={NavbarContainer} />
      <ProtectedRoute path="/browse" component={BrowseContainer} />
      {/* <ProtectedRoute path="/search" component={SearchPage} /> */}
      <ProtectedRoute path="/list" component={NavbarContainer} />
      <ProtectedRoute path="/watch/:movieId" component={CurrentMovieContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Redirect to="/"/>
    </Switch>
  </div>
);

export default App;