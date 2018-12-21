import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class CurrentMovie extends React.Component {

  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
  }

  componentDidMount(){
    if (this.props.movies.length < 5) {
      this.props.fetchMovies();
    }
    if(this.props.movie === undefined){
      const movieId = this.props.match.params.movieId;
      this.props.fetchMovie(movieId);
    }
  }

  componentDidUpdate(){
    if (!this.props.movie === undefined) {
      this.props.history.push("/");
    }
  }

  goBack() {
    this.props.history.push("/browse");
  }

  render(){
    if(this.props.movie === undefined) {
      return (
        <div className="not-found">
          <p>Sorry, nothing to see here</p>
          <Link className="nav-link-item" to="/">
            <div className="back-btn-container">
              <button className="back-btn" >
                <i className="fa fa-arrow-left"></i>
                <span className="back-text">Back to Browse</span>
              </button>
            </div>
          </Link>
        </div>);
    }
    if (!this.props.valid) {
      return (
        <Redirect to="/" />
      );
    }
    return(
      
      <div id="video-container">
        <video 
          className="current-video" 
          width="100vw" 
          height="auto" 
          src={this.props.movie.url}
          controls 
          autoPlay
          // ng-src={this.props.movie.url}
        >
          {/* <source src={this.props.movie.url} type="video/mp4" /> */}
          {/* <source src="/assets/com.mp4" type="video/mp4" /> */}
          {/* <source src={window.oldvid} type="video/mp4" /> */}
          Your browser does not support the video tag.
        </video>
        {/* <div id="video-controls"> */}
          {/* <button type="button" id="play-pause" value="0">Play</button> */}
          {/* <button className='button play current'></button>
          <input type="range" id="seek-bar" defaultValue="0"/>
          <button type="button" id="mute">Mute</button>
          <input type="range" id="volume-bar" min="0" max="1" step="0.1" defaultValue="1" />
          <button type="button" id="full-screen">Full-Screen</button>
        </div> */}
        <Link className="nav-link-item" to="/">
        <div className="back-btn-container">
          <button className="back-btn" >
            <i className="fa fa-arrow-left"></i>
            <span className="back-text">Back to Browse</span>
          </button>
        </div>
        </Link>
        
      </div>

    );

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



    // return(
      
    //   <div id="video-container">
    //     <video id="avideo" className="current-video" width="100vw" height="auto" controls>
    //       {/* <source src="/assets/com.mp4" type="video/mp4" /> */}
    //       <source id="low" src={window.oldvid} type="video/mp4" />
    //       Your browser does not support the video tag.
    //     </video>

    //     <div className="preview-controls" id="controls">
    //       {/* <!-- Seek Video Time Control  --> */}
    //       <div className="time-bar">
    //         <input id="time-seek" className="time-meter" type="range" min="0" max="100" defaultValue="0"/>
    //       </div>
      
    //       <div className="control-bar">
    //         {/* <!-- play / pause button --> */}
    //         <div id="play/pause" className="preview-controls-main control">
    //           <i className="material-icons vid-icon">play_circle_outline</i>
    //         </div>
    //         {/* <!-- repeat button --> */}
    //         <div id="replay" className="preview-controls-main control">
    //           <i className="material-icons vid-icon">replay</i>
    //         </div>
    //         {/* <!-- Current Time Display  --> */}
    //         <div id="current-time" className="preview-controls-main time">
    //           0:00
    //         </div>

    //         <div className="right-side-controls">
    //           {/* <!-- mute-unmute Control --> */}
    //           <div className="volume-btn preview-controls-main control" id="mute/unmute">
    //             <i className="material-icons vid-icon">volume_up</i>
    //           </div>
    //           {/* <!--change volume--> */}
    //           <div id="volume-bar-holder" className="control">
    //             <input id="volume-bar" type="range" defaultValue="0.5" min="0" max="1" step="0.1"/>
    //           </div>
    //           {/* <!-- Full Screen Control --> */}
    //           <div id="full-screen" className="preview-controls-main control">
    //             <i className="material-icons vid-icon">fullscreen</i>
    //           </div>
    //         </div>
    //         {/* <!--end of right side controls div--> */}
    //       </div>
    //       {/* <!--end of control bar div--> */}
    //     </div>
    //     {/* <!--end of preview controls div--> */}
        
    //   </div>
    // );

  }
};

export default CurrentMovie;