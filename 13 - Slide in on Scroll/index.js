window.onload = () => {
  const sliderImages = document.querySelectorAll('.slide-in')

  function debounce (fn, ms) {
    let handle
    return () => {
      if (handle) {
        clearTimeout(handle)
      }
      handle = setTimeout(() => {
        fn()
        handle = null
      }, ms)
    }
  }

  function checkSlide (e) {
    sliderImages.forEach(sliderImage => {
      // half way down the image
      const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height / 2)
      // bottom of the image
      const slideOutAt = sliderImage.offsetTop + sliderImage.height

      const isHalfShown = slideInAt > sliderImage.offsetTop
      const isNotScrolledPast = window.scrollY < slideOutAt

      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active')
      } else {
        sliderImage.classList.remove('active')
      }

    })
  }

  window.addEventListener('scroll', debounce(checkSlide, 100))
}
