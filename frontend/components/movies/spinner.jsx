import React from 'react';
import SpinnerItem from './spinneritem';
import { Route } from 'react-router-dom';
import MovieInfoContainer from './movie_info_container';

class Spinner extends React.Component {

  constructor(props) {
    super(props);

    const movies = props.movies.map(movie => {
      return (
        // <div className="tn-scale">
        <SpinnerItem key={movie.id} movie={movie} order={props.order}/>
        // </div>
      );
    });

    this.state = {
      movies: movies
    };

  }

  scroll(e) {
    alert("scroll clicked");
  }

  render() {
    return (
      <div className="spinner">
        <h1 className="category-header">{this.props.category}</h1>
        <div className="tn-scale">
          {this.state.movies}
        </div>
        <div className="right scroll"  onClick={this.scroll}>
          <i className="fa fa-angle-right scroll-btn"></i>
        </div>
        <div className="left scroll" onClick={this.scroll}>
          <i className="fa fa-angle-left scroll-btn"></i>
        </div>
        <Route path="/browse/:movieId" component={MovieInfoContainer}/>
      </div>
    );
  }
};

export default Spinner;