window.onload = () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  let lastChecked;

  checkboxes.forEach((checkbox) => {
    function handleCheck (e) {
      let between = false
      if (this.checked) {
        if (e.shiftKey) {
          checkboxes.forEach((checkbox) => {
            if (checkbox === this || checkbox === lastChecked) {
              between = !between
            }

            if (between) {
              checkbox.checked = true
            }
          })
        }
        lastChecked = this
      }
    }

    checkbox.addEventListener('click', handleCheck)
  })
}
