import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  if (props.currentUser === undefined) {
    return (
      <div className="splash-container">

        <div className="main-header">
          <Link to="/">
            <img className="main-logo" src="https://fontmeme.com/permalink/181212/c5c4b3134061f86d06de9895b1ea5522.png" border="0" />
          </Link>
          <div className="session-btn signin" >
            <Link className="session-btn signin" to='/login'>Sign In</Link>
          </div>
        </div>

        <div className="signup-container">
          <div className="signup-msg">
            No pesky contracts
          </div>
          <div className="signup-sub-msg">
            Join today, cancel anytime.
          </div>
          <div className="session-btn signup" >
            <Link className="session-btn signup" to='/signup'>S I G N U P</Link>
          </div>
        </div>


      </div>
    );
  } else {
    return (
      <div>
        <div className="main-header">
          <div>
            <Link to="/">
              <img className="main-logo" src="https://fontmeme.com/permalink/181212/c5c4b3134061f86d06de9895b1ea5522.png" border="0" />
            </Link>
          </div>
          <div className="nav-items">
            <div className="nav-links">
              <Link className="nav-link-item" to="/browse">Home</Link>
              <Link className="nav-link-item" to="/list">My List</Link>
              {/* <h1 className="nav-link-item">Welcome, {props.currentUser.email}!</h1> */}
            </div>
            <div className="nav-controls" 
            >
                <div>
                  <div className="profile-dropdown" >
                  {/* <div className="profile-dropdown"> */}
                    <img className="profile-logo" src="https://assets.nflxext.com/ffe/profiles/avatars_v2/32x32/PICON_025.png" alt=""/>
                    <i className="fa fa-caret-down"></i>
                  </div>
                <div id="my-dropdown" className="dropdown-content" onMouseOver={() => {
                  const openDropdown = document.getElementById("my-dropdown");
                  if (!openDropdown.classList.contains('show')) {
                    openDropdown.classList.add('show');
                  }
                }} onMouseOut={() => {
                  const openDropdown = document.getElementById("my-dropdown");
                  if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                  }
                }}>
                    <section className="drop-item manage-link" >Manage Profiles</section>
                    <section className="drop-item" onClick={() => props.logout()}>Logout of Chillflix</section>
                  </div>
                </div>
              <div className="nav-control-wrapper" onMouseOver={() => {
                const openDropdown = document.getElementById("my-dropdown");
                if (!openDropdown.classList.contains('show')) {
                  openDropdown.classList.add('show');
                }
              }} onMouseOut={() => {
                const openDropdown = document.getElementById("my-dropdown");
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }}></div>
              </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Navbar;


// onMouseOver = {() => {document.getElementById("my-dropdown").classList.toggle("show");}}
// onMouseOut = {() => {document.getElementById("my-dropdown").classList.toggle("show");}}

{/* <img className="main-logo" src="https://fontmeme.com/permalink/181212/eb3f91eeccd1b9d3c12a3147927c4919.png" border="0" /> */}
{/* <img className="main-logo" src="https://fontmeme.com/permalink/181212/84c0fa303aadaf833e45f930674c2005.png" border="0" /> */}