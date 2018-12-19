import React from 'react';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: props.movies
    };
  }

  componentDidMount(){
    this.props.fetchMovies();
  }

  render() {
    // if(this.state.movies === undefined){
    //   return (
    //     <div>
    //       fucked up
    //     </div>
    //   );
    // }
    return (
      <div>
        <p>why isnt this working</p>
      </div>
    );
  }
}

export default SearchResults;