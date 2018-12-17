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
    const allCarets = document.getElementsByClassName("expand-down");
    for(let i = 0; i < allSpinners.length; i++){
      allSpinners[i].style.border = "0";
      allCarets[i].style.display = "none";
    }
    const current = document.getElementById(`spinner-${this.props.order}-${this.props.movie.id}`);
    current.style.border = "4px solid white";
    current.classList.remove('enlarge');
    const caret = document.getElementById(`expand-${this.props.order}-${this.props.movie.id}`);
    caret.style.display = "block";
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

        <div id={`expand-${this.props.order}-${this.props.movie.id}`} className="expand-down">
          <div className="expand-arrow-container">
            <i className="fa fa-caret-down info"></i>
          </div>
        </div>
      </div>
    )
  }
};

export default SpinnerItem;