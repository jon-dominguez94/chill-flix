import React from 'react';
import SpinnerItem from './spinneritem';

class Spinner extends React.Component {

  constructor(props) {
    super(props);

    this.movies = props.movies.map(movie => {
      return (
        <div className="tn-scale">
          <SpinnerItem key={movie.id} movie={movie} />
        </div>
      );
    });

  }

  render() {
    return (
      <div className="spinner">
        <h1>{this.props.category}</h1>
        {this.movies}
      </div>
    );
  }
};

export default Spinner;