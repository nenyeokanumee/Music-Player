const song = document.getElementById("song");
const progress = document.getElementById("progress");
const playPausekey = document.getElementById("playPauseKey");
const maxSongDuration = document.getElementById("maxSongDuration");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
  let totalTime = song.duration;
  let minutes = Math.floor(totalTime / 60);
  let seconds = Math.floor(totalTime % 60);
  maxSongDuration.innerHTML = `${minutes}:${seconds}`;
};


function playPause() {
  if (playPausekey.classList.contains("fa-play")) {
    playPausekey.classList.remove("fa-play");
    playPausekey.classList.add("fa-pause");
    song.play();
  } else {
    playPausekey.classList.remove("fa-pause");
    playPausekey.classList.add("fa-play");
    song.pause();
  }
}

if (song.play) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 100);
}

progress.onchange = function () {
  song.currentTime = progress.value;
  playPausekey.classList.remove("fa-play");
  playPausekey.classList.add("fa-pause");
  song.play();
};