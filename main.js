const song = document.getElementById("song");
const progress = document.getElementById("progress");
const playPausekey = document.getElementById("playPauseKey");
const maxSongDuration = document.getElementById("maxSongDuration");

function handleMetaData() {
  progress.max = song.duration;
  progress.value = song.currentTime;
  let totalTime = song.duration;
  let minutes = Math.floor(totalTime / 60);
  let seconds = Math.floor(totalTime % 60);
  maxSongDuration.innerHTML = `${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

song.addEventListener("loadedmetadata", handleMetaData);

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

song.addEventListener('timeupdate', ()=>{
  progress.value = song.currentTime;
})

updateSlider = function () {
  song.currentTime = progress.value;
  playPausekey.classList.remove("fa-play");
  playPausekey.classList.add("fa-pause");
  song.play();
};

progress.addEventListener('input', updateSlider);