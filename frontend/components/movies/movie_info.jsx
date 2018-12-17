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
        <Redirect to="/browse" />
      );
    }


    return(
      <div className="attached-info">
        <div className="popup-controls">

        </div>
        <img src={window.oldtn}/>
      </div>
    );
  }
}

export default MovieInfo;