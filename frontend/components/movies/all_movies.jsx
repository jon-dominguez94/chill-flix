import React from 'react';
import { Link } from 'react-router-dom';

const AllVideos = (props) => {

  const thumbnails = props.movies.map(movie => {
    return (
      // <img src={movie.thumbnail}/>
      <img src={window.oldtn}/>
    );
  });

  return (
    <div>
      {thumbnails}
    </div>
  );
};

export default AllVideos;