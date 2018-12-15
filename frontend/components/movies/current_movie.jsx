import React from 'react';

class CurrentMovie = (props) => {
  if(props.movie === undefined) {
    return (<div></div>);
  }
  return(

    <video className="current-video" width="100vw" height="auto" controls>
      <source src={props.movie.url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

  )
};

export default CurrentMovie;