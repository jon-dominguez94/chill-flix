import React from 'react';
import FilteredItem from './filtered_item';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    // let {pathname} = this.props.location;
    // let query = pathname.split('=')[1];
    // alert(props.query);

    this.state = {
      // queryString: props.query,
      // movies: props.movies,
      filtered: props.movies
    };
  }

  componentDidMount(){
    this.props.fetchMovies();
  }

  componentDidUpdate(prevProps){
    if(this.props.query !== prevProps.query){
      const filteredMovies = this.props.movies.filter(movie => movie.title.toLowerCase().includes(this.props.query));
      // alert(filteredMovies);
      this.setState({filtered: filteredMovies});
    }
  }

  render() {
    if(this.props.movies === undefined){
      return (
        <div>
          rerender
        </div>
      );
    }

    const filtered = this.state.filtered.map(movie => 
      (
        <div className="filtered-movie-container">
          <FilteredItem movie={movie} />
        </div>
      )
    );
    return (
      <div class="search-results-container">
        {filtered}
      </div>
    );
  }
}

export default SearchResults;