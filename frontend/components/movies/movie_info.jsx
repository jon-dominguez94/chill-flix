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
      <div></div>
    );
  }
}

export default MovieInfo;