import React from 'react';
import { Link } from 'react-router-dom';


const MainVideo = (props) => {

 return (
   <div className="main-thumb">

     {/* <img src={props.video.thumbnail} /> */}
     {/* <img src={image_url('/assets/old.png')} alt=""/> */}
     <div className="main-gif"></div>
     {/* <img src={window.oldtn}/> */}
    

    <div className="main-video-info">

      <h1 className="main-video-title">{props.video.title}</h1>
      <div className="main-video-links">
        <Link to={`/watch/${props.video.id}`}>
          <div className="play-btn">
            <div className="main-video-link">
              <button className='button play'></button>
              <span>Play</span>
            </div>
          </div>
        </Link>

        <Link to={"/list"}>
          <div className="list-btn">
            <div className="main-video-link">
              <div className="plus-wrapper">
                <i className="fa fa-plus"></i>
               </div>
              <span>My List</span>
            </div>  
          </div>
        </Link>
      </div>
       <h2 className="main-video-description">{props.video.description}</h2>
     </div>
   </div>
 )
};

export default MainVideo;