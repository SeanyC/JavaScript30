const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

function togglePlay () {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

function updateButton () {
  const icon = this.paused ? '►' : '❚ ❚'
  toggle.textContent = icon
}

function skip () {
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate () {
  // this = the slider. the name of the slider is the same as the property being changed.
  video[this.name] = this.value
}

function handleProgress () {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

function scrub (e) {
  // (mouse position relative to bar / bar width) * duration
  const time = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = time
}

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', togglePlay)

skipButtons.forEach(btn => btn.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))

progress.addEventListener('click', scrub)
progress.addEventListener('movemove', scrub)
