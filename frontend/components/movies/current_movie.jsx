import React from 'react';

class CurrentMovie extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    if(this.props.movie === undefined){
      const movieId = this.props.match.params.movieId;
      this.props.fetchMovie(movieId);
    }
  }

  render(){
    if(this.props.movie === undefined) {
      return (<div></div>);
    }
    return(
      <div id="video-container">
        <video className="current-video" width="100vw" height="auto" controls>
          {/* <source src="/assets/com.mp4" type="video/mp4" /> */}
          <source src={window.oldvid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div id="video-controls">
          <button type="button" id="play-pause" value="0">Play</button>
          <input type="range" id="seek-bar" defaultValue="0"/>
          <button type="button" id="mute">Mute</button>
          <input type="range" id="volume-bar" min="0" max="1" step="0.1" defaultValue="1" />
          <button type="button" id="full-screen">Full-Screen</button>
        </div>
      </div>

    )

    // return (
    //   <div id="video-container" width="100vw" height="auto" controls>
    //     {/* <!-- Video --> */}
    //     <video id="video" width="100vw" height="auto">
    //       <source src={window.oldvid} type="video/mp4" />
    //       <p>Your browser doesn't support HTML5 video.</p>
    //     </video>
    //     {/* <!-- Video Controls --> */}
    //     {/* <div id="video-controls">
    //       <button type="button" id="play-pause">Play</button>
    //       <input type="range" id="seek-bar" value="0"/>
    //       <button type="button" id="mute">Mute</button>
    //       <input type="range" id="volume-bar" min="0" max="1" step="0.1" value="1"/>
    //       <button type="button" id="full-screen">Full-Screen</button>
    //     </div> */}
    //   </div>
    // );
  }
};

export default CurrentMovie;