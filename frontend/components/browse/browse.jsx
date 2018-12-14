import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import MainVideoContainer from '../video/main_video_container';
import MoviesIndexContainer from '../movies/movies_index_container';

const BrowseContainer = () => (
  <div>
    <NavbarContainer />
    <MainVideoContainer />
    <MoviesIndexContainer />
  </div>
);

export default BrowseContainer;