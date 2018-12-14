import React from 'react';

class MoviesIndex extends React.Component {
  constructor(props){
    super(props);
    // debugger
  }
  
  componentWillMount() {
    // debugger
    this.props.fetchMovies();
  }

  render(){
    // debugger
    const mainMovie = this.props.selectMovie(this.props.movies, "Old people");
    return(
      <div>
        {/* <video src={mainMovie.url} /> */}
        Main Movie
      </div> 
    )
  }
}

export default MoviesIndex;