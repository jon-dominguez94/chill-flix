window.onload = function () {

// document.addEventListener("DOMContentLoaded", () => {
  // Video
  var oevideo = document.getElementsByClassName("current-video")[0];
  // disabling the default controls
  oevideo.controls = false;

  //setting default video source to low and initialize player 
  var defaultVideoSouce = document.getElementById("low").getAttribute('src');

  function initializePlayer() {
    oevideo.setAttribute('src', defaultVideoSouce);
  }
  initializePlayer();


  var oeplayPauseBtn = document.getElementById("play/pause");


  var oereplay = document.getElementById("replay");


  var muteBtn = document.getElementById("mute/unmute");


  var fullScreenBtn = document.getElementById("full-screen");





  //current time holder
  var currentTimeView = document.getElementById("current-time");



  // time Slider
  var oeseekBar = document.getElementById("time-seek");


  // volume Slider
  var volumeBar = document.getElementById("volume-bar");



  // current volume
  var currentVolume = volumeBar.value;

  // video wrapper
  var videoWrapper = document.getElementById("video-wrapper");
  //controls
  var controls = document.getElementById("controls");



  //functionality
  // hover effect on video to bring up the controls
  videoWrapper.addEventListener('mouseover', function () {
    controls.style.display = 'block';
  });

  videoWrapper.addEventListener('mouseout', function () {
    controls.style.display = 'none';
  });

  //play-pause 
  function playPause() {
    if (oevideo.paused == true) {
      oevideo.play();
      oeplayPauseBtn.innerHTML = '<i class="material-icons vid-icon">pause</i>';
    } else {
      oevideo.pause();
      oeplayPauseBtn.innerHTML = ' <i class="material-icons vid-icon">play_circle_outline</i>';
    }
  }

  function spaceKeyFunction(e) {
    if (e.keyCode == "32") {
      playPause();
    }
  }

  oeplayPauseBtn.addEventListener('click', playPause);
  document.addEventListener('keydown', spaceKeyFunction, false);
  oevideo.addEventListener('click', playPause);


  //replay
  oereplay.addEventListener('click', function () {
    oevideo.currentTime = 0;
    oevideo.play();
  });


  //current time
  oevideo.addEventListener('timeupdate', function () {
    var curMins = Math.floor(oevideo.currentTime / 60);
    var curSecs = Math.floor(oevideo.currentTime - curMins * 60);
    if (curSecs < 10) {
      curSecs = "0" + curSecs;
    }
    if (curMins < 10) {
      curMins = "0" + curMins;
    }
    currentTimeView.innerHTML = curMins + ":" + curSecs;
  });



  // update seek bar for time as time updates  
  oevideo.addEventListener('timeupdate', function () {
    var newTime = oevideo.currentTime * (100 / oevideo.duration);
    oeseekBar.value = newTime;
  });
  // update current time if seek bar for time changes
  oeseekBar.addEventListener('change', function () {
    var seekTo = oevideo.duration * (oeseekBar.value / 100);
    oevideo.currentTime = seekTo;
  });


  // mute-unmute
  muteBtn.addEventListener('click', function () {
    if (oevideo.muted) {
      oevideo.muted = false;
      muteBtn.innerHTML = '<i class="material-icons vid-icon">volume_up</i>';
      volumeBar.value = currentVolume;
    } else {
      oevideo.muted = true;
      muteBtn.innerHTML = '<i class="material-icons vid-icon">volume_mute</i>';
      volumeBar.value = 0;
    }
  });
  // change volume
  volumeBar.addEventListener('change', function () {
    oevideo.volume = volumeBar.value;
  });


  // full screen
  function toggleFullScreen() {
    //if document is not in full screen
    if (!document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement && !document.msFullscreenElement) { // current working methods
      if (videoWrapper.requestFullscreen) {
        videoWrapper.requestFullscreen();
        fullScreenBtn.innerHTML = '<i class="material-icons vid-icon">fullscreen_exit</i>';
      } else if (videoWrapper.msRequestFullscreen) {
        videoWrapper.msRequestFullscreen();
        fullScreenBtn.innerHTML = '<i class="material-icons vid-icon">fullscreen_exit</i>';
      } else if (videoWrapper.mozRequestFullScreen) {
        videoWrapper.mozRequestFullScreen();
        fullScreenBtn.innerHTML = '<i class="material-icons vid-icon">fullscreen_exit</i>';
      } else if (videoWrapper.webkitRequestFullscreen) {
        videoWrapper.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        fullScreenBtn.innerHTML = '<i class="material-icons vid-icon">fullscreen_exit</i>';
      }
    } else {
      //if document is in full screen
      if (document.exitFullscreen) {
        document.exitFullscreen();
        fullScreenBtn.innerHTML = '<i class="material-icons vid-icon">fullscreen</i>';
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
        fullScreenBtn.innerHTML = '<i class="material-icons vid-icon">fullscreen</i>';
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
        fullScreenBtn.innerHTML = '<i class="material-icons vid-icon">fullscreen</i>';
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
        fullScreenBtn.innerHTML = '<i class="material-icons vid-icon">fullscreen</i>';
      }
    }
  }
  //event handler for enter or return key 
  function enterKeyFunction(e) {
    if (e.keyCode == "13") {
      toggleFullScreen();
    }
  }

  fullScreenBtn.addEventListener('click', toggleFullScreen);
  // toggle full screen when enter or return key is pressed 
  document.addEventListener('keydown', enterKeyFunction, false);







  //hide controls after 3 seconds if mouse is not moving
  function inactivity() {
    setTimeout(function () {
      controls.style.visibility = 'hidden';
    }, 3000);
  }
  inactivity();
  videoWrapper.addEventListener('mousemove', function () {
    controls.style.visibility = 'visible';
    inactivity();
  });


};




// // custom video controls
// document.addEventListener("DOMContentLoaded", () => {
//   let play_btn = document.getElementById("full-screen");
  
//   (play_btn === undefined || play_btn === null) ? alert("no") : alert("yes");


// });