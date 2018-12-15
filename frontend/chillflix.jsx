import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


import * as movieUtil from './actions/movies_actions';

window.fetchMovies = movieUtil.fetchMovies;
window.fetchMovie = movieUtil.fetchMovie;


document.addEventListener("DOMContentLoaded", () => {


  window.onclick = function (event) {
    if (!event.target.matches('.profile-logo') && !event.target.matches(".fa-caret-down")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
  let store;
  if(window.currentUser){
    const preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: {id: window.currentUser.id}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});