import React from 'react';
import Spinner from './spinner';

const AllVideos = (props) => {

  // function shuffle(a) {
  //   for (let i = a.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [a[i], a[j]] = [a[j], a[i]];
  //   }
  //   return a;
  // }

  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
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

  let movies1 = Array.from(props.movies);
  let movies2 = Array.from(props.movies);
  shuffle(movies1);
  shuffle(movies2);

  return (
    <div className="spinner-container">
      <Spinner category="Recently Added" movies={movies1} order="1"/>
      <Spinner category="Popular on Chillflix" movies={movies2} order="2"/>
    </div>
  );
};

export default AllVideos;