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

      <video className="current-video" width="100vw" height="auto" controls>
        <source src="/assets/com.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    )
  }
};

export default CurrentMovie;