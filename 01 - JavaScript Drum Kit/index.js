window.addEventListener('keydown', playSound)

function playSound (e1) {
  var key = e1.key
  var keyDiv = document.querySelector(`.key[data-key=${key}]`)
  var sound = document.querySelector(`audio[data-key=${key}]`)

  sound.currentTime = 0;
  sound.play()

  keyDiv.classList.add('playing')

  addEventListener('keyup', function (e2) {
    if (e2.key === key) {
      keyDiv.classList.remove('playing')
    }
  })
}
