import React from 'react';
import { Link } from 'react-router-dom';

const SpinnerItem = (props) => {
  return (
    <div className="spinner-item">
      <img className="movie-tn" src={window.oldtn} />
    </div>
  )
};

export default SpinnerItem;