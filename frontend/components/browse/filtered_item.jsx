import React from 'react';
import { Link } from 'react-router-dom';

const FilteredItem = (props) => {
  return(
    // <div>
    //   {props.movie.title}
    // </div>
    <div className="filtered-item">
      {/* <img className="movie-tn" src={props.movie.thumbnail} /> */}
      <img className="movie-tn" src={window.oldtn} />


      <div className="search-overlay">

        <div className="search-play">
          <Link to={`/watch/${props.movie.id}`}>
            <i className="fa fa-play-circle-o"></i>
          </Link>
        </div>

      </div>

      <p className="filter-title">{props.movie.title}</p>
      {/* <div className="tn-info">
        <a href="#" className="round-button">
          <i className="fa fa-play fa-2x"></i>
        </a>
        <p className="tn-title">{props.movie.title}</p>
      </div>

      <Link to={`/watch/${props.movie.id}`}>
        <div className="play-area"></div>
      </Link> */}

    </div>
  );
};

export default FilteredItem;