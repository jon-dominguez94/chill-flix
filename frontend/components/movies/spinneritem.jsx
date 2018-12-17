import React from 'react';
import { Link } from 'react-router-dom';

class SpinnerItem extends React.Component {
  
  constructor(props){
    super(props);

    // this.playMovie = this.playMovie.bind(this);
  }

  expand(e){
    e.stopPropagation();
  }

  render() {
    return (
      <div className="spinner-item">
        {/* <img className="movie-tn" src={this.props.movie.thumbnail} /> */}
        <img className="movie-tn" src={window.oldtn} />

        <div className="tn-info">
          <a href="#" class="round-button">
            <i class="fa fa-play fa-2x"></i>
          </a>
          <p className="tn-title">{this.props.movie.title}</p>
        </div>

        <Link to={`/watch/${this.props.movie.id}`}>
          <div className="play-area">
            
          </div>
        </Link>
        <div className="info-down">
          <i className="fa fa-angle-down" onClick={this.expand}></i>
        </div>
      </div>
    )
  }
};

export default SpinnerItem;