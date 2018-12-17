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
      // <div>
      // <Link to={`/watch/${this.props.movie.id}`}>
        <div className="spinner-item">
          {/* <img className="movie-tn" src={this.props.movie.thumbnail} /> */}
          {/* <p>{this.props.movie.title}</p> */}
          <img className="movie-tn" src={window.oldtn} />

          <div className="play-area">
            {/* <i className="fa fa-play-circle"></i> */}
          <a href={`/watch/${this.props.movie.id}`} class="round-button">
              <i class="fa fa-play fa-2x"></i>
            </a>
          </div>

          <div className="info-down">
            <i className="fa fa-angle-down" onClick={this.expand}></i>
          </div>
        </div>
    
      // </Link>
    )
  }
};

export default SpinnerItem;