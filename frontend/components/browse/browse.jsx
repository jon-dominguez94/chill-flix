import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import MoviesIndexContainer from '../movies/movies_index_container';
import {Route, Switch, Redirect } from 'react-router-dom';
import SearchResultsContainer from './search_results_container';

class Browse extends React.Component{

  constructor(props){
    super(props);


  }

  render(){

    if(this.props.query === ""){
      return (
        <div className="browse-container">
          <div className="logged-header">
            <NavbarContainer />
          </div>
            <MoviesIndexContainer />
        </div>
      );
    } else {
      return (
        <div className="browse-container">
          <div className="logged-header">
            <NavbarContainer />
          </div>
          <SearchResultsContainer movies={this.props.movies} query={this.props.query}/>
        </div>
      );
    }
  }
};

export default Browse;