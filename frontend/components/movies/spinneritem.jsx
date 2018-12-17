import React from 'react';
import { Link } from 'react-router-dom';

class SpinnerItem extends React.Component {
  
  constructor(props){
    super(props);
  }

  expand(e){
    alert("item clicked");
  }

  render() {
    return (
      <div>
      <div className="spinner-item" onClick={this.expand}>
        {/* <img className="movie-tn" src={this.props.movie.thumbnail} /> */}
        {/* <p>{this.props.movie.title}</p> */}
        <img className="movie-tn" src={window.oldtn} />
      </div>
      </div>
    )
  }
};

export default SpinnerItem;