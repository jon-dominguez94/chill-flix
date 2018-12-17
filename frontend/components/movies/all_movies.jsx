import React from 'react';
import Spinner from './spinner';

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
      // <img src={window.oldtn}/>
      <p>{movie.title}</p>
    );
  });

  const movies1 = shuffle(props.movies);
  const movies2 = shuffle(movies1);

  return (
    <div className="spinner-container">
      <Spinner category="Recently Added" movies={movies1} />
      <Spinner category="Popular on Chillflix" movies={movies2} />
    </div>
  );
};

export default AllVideos;