import React from 'react';
import { Link } from 'react-router-dom';

const FilteredItem = (props) => {
  return(

    <div className="filtered-item">
      <img className="movie-tn" src={props.movie.thumbnail} />
      {/* <img className="movie-tn" src={window.oldtn} /> */}


      <div className="search-overlay">

        <div className="search-play">
          <Link to={`/watch/${props.movie.id}`}>
            <i className="fa fa-play-circle-o"></i>
          </Link>
        </div>

      </div>

      <p className="filter-title">{props.movie.title}</p>
    </div>
  );
};

export default FilteredItem;