import React from 'react';
import SpinnerItem from './spinneritem';

const Spinner = (props) => {


  const movies = props.movies.map(movie => {
    return (
      <div className="tn-scale">
        <SpinnerItem key={movie.id} movie={movie} />
      </div>
    );
  });

  return (
    <div className="spinner">
      {movies}
    </div>
  )
};

export default Spinner;