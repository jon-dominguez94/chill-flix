import React from 'react';
import MainVideo from './main_video.jsx';
import AllMovies from './all_movies';

class MoviesIndex extends React.Component {
  constructor(props){
    super(props);
    // debugger
  }
  
  componentWillMount() {
    // debugger
    if(this.props.movies.length === 0){
      this.props.fetchMovies();
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

    this.removeAllStylings();

    if(this.props.movies.length === 0){
      return (<div></div>);
    }
    const mainMovie = this.props.selectMovie(this.props.movies, "The Comeback");
    // debugger
    return (
      <div>
        <div className="movies-index">
          <MainVideo video={mainMovie} />
          <AllMovies movies={this.props.movies} />
        </div>
      </div>
    );
  }
}

export default MoviesIndex;