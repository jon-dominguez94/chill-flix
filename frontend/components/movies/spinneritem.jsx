import React from 'react';
import { Link } from 'react-router-dom';

class SpinnerItem extends React.Component {
  
  constructor(props){
    super(props);

    // this.playMovie = this.playMovie.bind(this);
    this.expand = this.expand.bind(this);
  }

  expand(e){
    // e.stopPropagation();
    const allSpinners = document.getElementsByClassName("spinner-item");
    for(let i = 0; i < allSpinners.length; i++){
      allSpinners[i].style.borderColor = "transparent";
    }
    const current = document.getElementById(`spinner-${this.props.order}-${this.props.movie.id}`)
    current.style.borderColor = "white";
    current.classList.remove('enlarge');
  }

  render() {
    return (
      <div id={`spinner-${this.props.order}-${this.props.movie.id}`} className="spinner-item enlarge">
        {/* <img className="movie-tn" src={this.props.movie.thumbnail} /> */}
        <img className="movie-tn" src={window.oldtn} />

        <div className="tn-info">
          <a href="#" className="round-button">
            <i className="fa fa-play fa-2x"></i>
          </a>
          <p className="tn-title">{this.props.movie.title}</p>
        </div>

        <Link to={`/watch/${this.props.movie.id}`}>
          <div className="play-area"></div>
        </Link>

        <div className="list-adder">
          {/* <i className="fa fa-plus-circle fa-2x fa_custom"></i> */}
          <div className="tn-plus-wrapper">
            <span>+</span>
          </div>
        </div>
        
        <div className="info-down">
          <i className="fa fa-angle-down" onClick={this.expand}></i>
        </div>
      </div>
    )
  }
};

export default SpinnerItem;