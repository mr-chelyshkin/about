const fontLink = document.getElementById('font-preload')

if (fontLink instanceof HTMLLinkElement) {
  fontLink.addEventListener(
    'load',
    () => {
      fontLink.rel = 'stylesheet'
    },
    { once: true },
  )
}
