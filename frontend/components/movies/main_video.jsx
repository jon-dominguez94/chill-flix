import React from 'react';
import { Link } from 'react-router-dom';
const MainVideo = (props) => {

 return (
   <div className="main-thumb">

     <img src={props.video.thumbnail} />

     <div className="main-video-info">

      <h1 className="main-video-title">{props.video.title}</h1>
      <div className="main-video-links">
        <Link to={`/videos/${props.video.id}`}>
          <div className="main-video-link">Play</div>
        </Link>
         <div className="main-video-link">My List</div>
     </div>
       <h2 className="main-video-description">{props.video.description}</h2>

     </div>
   </div>
 )
};

export default MainVideo;