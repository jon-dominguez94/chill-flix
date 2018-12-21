import React from 'react';
import SpinnerItem from './spinneritem';
import { Route } from 'react-router-dom';
import MovieInfoContainer from './movie_info_container';

class Spinner extends React.Component {

  constructor(props) {
    super(props);

    const movies = props.movies.map(movie => {
      return (
  
        <SpinnerItem key={movie.id} movie={movie} order={props.order}/>
    
      );
    });

    this.state = {
      movies: movies
    };

    this.movies = movies;

    this.scroll = this.scroll.bind(this);

  }

  componentDidUpdate(){
    // document.getElementById(`scaler-${this.props.order}`).classList.remove("shifted-left");
  }

  scroll(direction) {
    // alert(`scroll ${direction}`);
    // alert(this.props.order);
    // const currSpinner = document.getElementById(`scaler-${this.props.order}`);
    // currSpinner.classList.add("shifted-left");
    // alert(currSpinner.style.width);
    let newMovies = Array.from(this.state.movies);
    if(direction === "left"){
      newMovies.push(newMovies.shift());
      newMovies.push(newMovies.shift());
      // newMovies.push(newMovies.shift());
    } else {
      newMovies.unshift(newMovies.pop());
      newMovies.unshift(newMovies.pop());
      // newMovies.unshift(newMovies.pop());
    }
    this.setState({ movies: newMovies });
    // setTimeout(() => {
    //   currSpinner.classList.remove("shifted-left");
    // }, 2000);
    // this.setState({movies: newMovies});
  }

  renderInfo(){
    
  }

  render() {
    return (
      <div id={`spinner-${this.props.order}`} className="spinner">
        <h1 className="category-header">{this.props.category}</h1>
        
        <div id={`scaler-${this.props.order}`} className="tn-scale">
          {/* <div className="test"> */}
            <div className="tn-wrapper">
              {this.state.movies}
            </div>
          {/* </div> */}
          {/* <MovieInfoContainer /> */}
        </div>
        
        {/* <Route path="/browse/:spinnerId/:movieId" component={MovieInfoContainer} /> */}

        {/* <div id={`info-drop-container-${this.order}`} className={`info-drop-container`}> */}
          <Route 
            path="/browse/:spinnerId/:movieId"
            render={(routeProps) => (
              <MovieInfoContainer {...routeProps} {...this.props} />
          )} />
        {/* </div> */}
        
        
        
        
        <div className={`right scroll scroll-${this.props.order}`}  onClick={() => this.scroll('left')}>
          <i className="fa fa-angle-right scroll-btn"></i>
        </div>
        <div className={`left scroll scroll-${this.props.order}`} onClick={() => this.scroll('right')}>
          <i className="fa fa-angle-left scroll-btn"></i>
        </div>
        {/* <MovieInfoContainer */}
      </div>
    );
  }
};

export default Spinner;