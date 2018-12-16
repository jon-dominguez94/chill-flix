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
    if(this.props.movies.length === 0){
      return (<div></div>);
    }
    const mainMovie = this.props.selectMovie(this.props.movies, "The Comeback");
    // debugger
    return (
      <div>
        <div className="movies-index">
          <MainVideo video={mainMovie} /> 
        </div>
      </div >
    );
  }
}

export default MoviesIndex;