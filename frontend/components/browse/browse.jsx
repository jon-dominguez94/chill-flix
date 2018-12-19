import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import MoviesIndexContainer from '../movies/movies_index_container';
import {Route, Switch, Redirect } from 'react-router-dom';
import SearchResultsContainer from './search_results_container';

const BrowseContainer = () => {

  let pathname = window.location.href;
  // alert(window.location.href);
  let query = [pathname.split('=')[1]];
  let otherProps = {
    query: query
  };
  alert(query);
  // this.forceUpdate();
  return (
    <div className="browse-container">
      <div className="logged-header">
        <NavbarContainer />
      </div>

      <Switch>
        <Route
          path="/browse/search" 
          render={(routeProps) => (
            <SearchResultsContainer {...routeProps} {...otherProps} />
        )} />
        <Route path="/browse" component={MoviesIndexContainer} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default BrowseContainer;