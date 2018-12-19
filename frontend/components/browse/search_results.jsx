import React from 'react';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    // let {pathname} = this.props.location;
    // let query = pathname.split('=')[1];
    // alert(props.query);

    this.state = {
      queryString: props.query,
      movies: props.movies,
      filtered: props.movies
    };
  }

  componentDidMount(){
    this.props.fetchMovies();
  }

  render() {
    if(this.state.movies === undefined){
      return (
        <div>
          fucked up
        </div>
      );
    }
    return (
      <div>
        <p>why isnt this working</p>
      </div>
    );
  }
}

export default SearchResults;