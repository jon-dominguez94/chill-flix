import React from 'react';
import SpinnerItem from './spinneritem';
import { Route } from 'react-router-dom';
import MovieInfoContainer from './movie_info_container';

class Spinner extends React.Component {

  constructor(props) {
    super(props);

    const movies = props.movies.map(movie => {
      return (
  
        <SpinnerItem key={movie.id} movie={movie} order={props.order}/>
    
      );
    });

    this.state = {
      movies: movies
    };

  }

  scroll(e) {
    alert("scroll clicked");
  }

  renderInfo(){
    
  }

  render() {
    return (
      <div id={`spinner-${this.props.order}`} className="spinner">
        <h1 className="category-header">{this.props.category}</h1>
        
        <div className="tn-scale">
          {/* <div className="test"> */}
            <div className="tn-wrapper">
              {this.state.movies}
            </div>
          {/* </div> */}
          {/* <MovieInfoContainer /> */}
        </div>
        
        {/* <Route path="/browse/:spinnerId/:movieId" component={MovieInfoContainer} /> */}

        <Route 
          path="/browse/:spinnerId/:movieId"
          render={(routeProps) => (
            <MovieInfoContainer {...routeProps} {...this.props} />
        )} />
       
        
        
        
        
        <div className={`right scroll scroll-${this.props.order}`}  onClick={this.scroll}>
          <i className="fa fa-angle-right scroll-btn"></i>
        </div>
        <div className={`left scroll scroll-${this.props.order}`} onClick={this.scroll}>
          <i className="fa fa-angle-left scroll-btn"></i>
        </div>
        {/* <MovieInfoContainer */}
      </div>
    );
  }
};

export default Spinner;