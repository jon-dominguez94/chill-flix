import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import MoviesIndexContainer from '../movies/movies_index_container';

const BrowseContainer = () => (
  <div className="browse-container">
    <div className="logged-header">
      <NavbarContainer />
    </div>
    <MoviesIndexContainer />
  </div>
);

export default BrowseContainer;