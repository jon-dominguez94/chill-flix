import React from 'react';
import SpinnerItem from './spinneritem';

class Spinner extends React.Component {

  constructor(props) {
    super(props);

    const movies = props.movies.map(movie => {
      return (
        <div className="tn-scale">
          {/* <p>{movie.title}</p> */}
          <SpinnerItem key={movie.id} movie={movie} />
        </div>
      );
    });

    this.state = {
      movies: movies
    };

  }

  render() {
    return (
      <div className="spinner">
        <h1 className="category-header">{this.props.category}</h1>
        {this.state.movies}
        <div className="right-scroll">
          <i class="fa fa-angle-right"></i>
        </div>
      </div>
    );
  }
};

export default Spinner;