import React from 'react';
import Carousel from './carousel';

const AllVideos = (props) => {

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const thumbnails = props.movies.map(movie => {
    return (
      // <img src={movie.thumbnail}/>
      <img src={window.oldtn}/>
    );
  });

  return (
    <div className="carousels-container">
      <Carousel movies={shuffle(thumbnails)} />
    </div>
  );
};

export default AllVideos;