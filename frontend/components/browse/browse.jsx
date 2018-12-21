import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import MoviesIndexContainer from '../movies/movies_index_container';
import {Route, Switch, Redirect } from 'react-router-dom';
import SearchResultsContainer from './search_results_container';

class Browse extends React.Component{

  constructor(props){
    super(props);

      this.state = {
        query: this.props.query
      };

  }

  componentDidMount(){
    this.props.fetchMovies();
  }

  componentDidUpdate(prevProps) {
    // debugger;

    if(this.props.location.search !== prevProps.location.search){
      let pathname = window.location.href;
      // debugger
      if (pathname.includes('search?=')) {
        this.setState({query: pathname.split('=')[1]});
      } else {
        this.setState({ query: "" });
      }
    }
  }

  removeAllStylings() {
    const allSpinners = document.getElementsByClassName("spinner");
    const allCarets = document.getElementsByClassName("expand-down");
    for (let i = 0; i < allSpinners.length; i++) {
      allSpinners[i].style.border = "0";
      allSpinners[i].classList.remove("buffed");
      allCarets[i].style.display = "none";
    }
  }


  render(){
    // if(this.props.movies.length < 10){
    //   this.props.fetchMovies();
    // }
    // this.removeAllStylings();

    
    if(this.state.query === ""){
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
          <SearchResultsContainer movies={this.props.movies} query={this.state.query}/>
        </div>
      );
    }
  }
};

export default Browse;