import React from 'react';
import { Redirect } from 'react-router-dom';

class MovieInfo extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    if(!this.props.valid){
      
    }
  }

  render() {
    if (!this.props.valid) {
      return(
        <div></div>
        // <Redirect to="/browse" />
      );
    }


    return(
      <div>
        <div className="attached-info">
          <div className="popup-controls">

          </div>
          <img src={window.oldtn}/>
        </div>
        <div className="info-close">
          <i className="fa fa-close"></i>
        </div>
      </div>
    );
  }
}

export default MovieInfo;