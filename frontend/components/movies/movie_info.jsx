import React from 'react';
import { Redirect } from 'react-router-dom';

class MovieInfo extends React.Component {
  constructor(props){
    super(props);

    this.close = this.close.bind(this);
  }

  componentDidMount() {
    if(!this.props.valid){
      
    }
    this.addEffects();
  }

  addEffects() {
    // alert("hit");
    let spinnerId = this.props.match.params.spinnerId;
    let movieId = this.props.match.params.movieId;
    
    const current = document.getElementById(`spinner-${spinnerId}-${movieId}`);
    if(current !== null) {
      current.style.border = "4px solid white";
      current.classList.remove('enlarge');
      document.getElementById(`spinner-${spinnerId}`).classList.add('buffed');
    }
    const caret = document.getElementById(`expand-${spinnerId}-${movieId}`);
    if(caret !== null){
      caret.style.display = "block";
    }
  }

  removeEffects() {
    const allSpinners = document.getElementsByClassName("spinner-item");
    const allCarets = document.getElementsByClassName("expand-down");
    for (let i = 0; i < allSpinners.length; i++) {
      allSpinners[i].style.border = "0";
      allSpinners[i].classList.add('enlarge');
      allCarets[i].style.display = "none";
    }
  }

  close() {
    // alert('close clicked');
    this.removeEffects();
    this.props.history.push('/browse');
  }

  render() {

    this.addEffects();

    if (!this.props.valid) {
      return(
        <div></div>
        // <Redirect to="/browse" />
      );
    } else if (!this.props.valid_movie){
      return (
        // <div></div>
        <Redirect to="/browse" />
      );
    }


    return(
      <div className="movie-info-container">
        <div className="attached-info">
          <div className="popup-controls">

          </div>
          <img src={window.oldtn}/>
            {/* <div className="info-gradient"></div> */}
          {/* </img> */}
        </div>
        <div className="info-close" onClick={this.close}>
          <i className="fa fa-close"></i>
        </div>
      </div>
    );
  }
}

export default MovieInfo;