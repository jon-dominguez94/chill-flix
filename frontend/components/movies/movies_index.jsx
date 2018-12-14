import React from 'react';
import MainVideo from './main_video.jsx';

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
    return (
      <div className="movies-index">
        <MainVideo video={mainMovie} /> 
      </div>
    );
  }
}

export default MoviesIndex;