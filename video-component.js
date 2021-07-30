const yogaVideo = document.getElementById("yogaVideo");
const playButton = document.getElementById("video-play");
const pauseButton = document.getElementById("video-pause");
const muteButton = document.getElementById("video-mute");
const unmuteButton = document.getElementById("video-unmute");
const controls = document.getElementById("video-controls");
var timeout;
// functions
const displayControls = () => {
  controls.classList.add("controls-visible");
  controls.classList.remove("controls-invisible");
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    if (!yogaVideo.paused) {
      controls.classList.add("controls-invisible");
      controls.classList.remove("controls-visible");
    }
  }, 800);
};

const setDefaultControls = () => {
  if(yogaVideo.paused)
  controls.classList.add("controls-visible");
};
const playPause = () => {
  if (yogaVideo.paused) {
    playButton.classList.toggle("video-display");
    pauseButton.classList.toggle("video-display");
    yogaVideo.play();
  } else {
    playButton.classList.toggle("video-display");
    pauseButton.classList.toggle("video-display");
    yogaVideo.pause();
  }
};

const muteUnmute = () => {
  if (yogaVideo.muted) {
    muteButton.classList.toggle("video-display");
    unmuteButton.classList.toggle("video-display");
    yogaVideo.muted = false;
  } else {
    muteButton.classList.toggle("video-display");
    unmuteButton.classList.toggle("video-display");
    yogaVideo.muted = true;
  }
};

// events
controls.addEventListener("mousemove", displayControls);
controls.addEventListener("mouseout", setDefaultControls);
muteButton.addEventListener("click", muteUnmute);
unmuteButton.addEventListener("click", muteUnmute);
playButton.addEventListener("click", playPause);
pauseButton.addEventListener("click", playPause);
