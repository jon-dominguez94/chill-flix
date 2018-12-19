import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import MoviesIndexContainer from '../movies/movies_index_container';
import {Route, Switch, Redirect } from 'react-router-dom';
import SearchResultsContainer from './search_results_container';

class Browse extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      queryString: ""
    };
    // let otherProps = {
    //   query: query
    // };
    // if(query !== undefined){
    //   // alert(query);
    // }

  }

  componentDidMount() {
    // let pathname = window.location.href;
    // let query = "";
    // if (pathname.includes('search?=')) {
    //   query = [pathname.split('=')[1]];
    // }
    // this.setState({
    //   queryString: query
    // });
    // if(this.props.query !== ""){
    //   // this.setState({query: this.props.query})
    //   alert("none");
    // } else {
    //   alert(this.props.query);
    // }
  }

  componentDidUpdate(prevProps){
    // if(this.props.query !== prevProps.query){
    //   alert(this.props.query);
    // }
    // let pathname = window.location.href;
    // let query = "";
    // if (pathname.includes('search?=')) {
    //   query = [pathname.split('=')[1]];
    // }
    // this.setState({query: query});
    // alert(this.state.queryString);
  }

  render(){

    if(this.props.query === ""){
      return (
        <div className="browse-container">
          <div className="logged-header">
            <NavbarContainer />
          </div>

          {/* <Switch> */}
            {/* <Route
              path="/browse/search" 
              render={(routeProps) => (
                <SearchResultsContainer {...routeProps} {...otherProps} />
            )} /> */}
            <Route path="/browse" component={MoviesIndexContainer} />
            {/* <Redirect to="/" /> */}
          {/* </Switch> */}
        </div>
      );
    } else {
      return (
        <div className="browse-container">
          <div className="logged-header">
            <NavbarContainer />
          </div>

          {/* <Switch> */}
            {/* <Route
              path="/browse/search" 
              render={(routeProps) => (
                <SearchResultsContainer {...routeProps} {...otherProps} />
            )} /> */}
            {/* <Route path="/browse" component={MoviesIndexContainer} /> */}
            {/* <Redirect to="/" /> */}
          {/* </Switch> */}
          <SearchResultsContainer movies={this.props.movies} query={this.props.query}/>

        </div>
      );
    }
  }
};

export default Browse;