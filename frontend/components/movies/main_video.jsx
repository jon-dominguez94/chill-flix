import React from 'react';

const MainVideo = (props) => {

 return (
   <div className="main-thumb">
     <img src={props.video.thumbnail} />
   </div>
 )
};

export default MainVideo;