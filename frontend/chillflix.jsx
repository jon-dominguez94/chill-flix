import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


import * as movieUtil from './actions/movies_actions';

window.fetchMovies = movieUtil.fetchMovies;
window.fetchMovie = movieUtil.fetchMovie;


document.addEventListener("DOMContentLoaded", () => {


  // window.onclick = function (event) {
  //   if (!event.target.matches('.spinner-item')) {
  //     var dropdowns = document.getElementsByClassName("spinner-item");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       // var openDropdown = dropdowns[i];
  //       // if (openDropdown.classList.contains('show')) {
  //       //   openDropdown.classList.remove('show');
  //       // }
  //       dropdowns[i].style.border = "4px solid transparent";
  //     }
  //   }
  // };

  window.addEventListener("scroll", (e) => {
    const header = document.getElementsByClassName("logged-header");
    if(header.length > 0){
      if(window.scrollY !== 0){
        header[0].classList.add('black-bg');
      } else {
        header[0].classList.remove('black-bg');
      }
    } 
  });

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