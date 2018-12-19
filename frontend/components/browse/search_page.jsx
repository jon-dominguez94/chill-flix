import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import SearchResultsContainer from './search_results_container';

const SearchPage = () => (
  <div className="browse-container">
    <div className="logged-header search">
      <NavbarContainer />
    </div>
    <SearchResultsContainer />
    wtf
  </div>
);

export default SearchPage;