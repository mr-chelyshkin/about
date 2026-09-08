declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

window.dataLayer ||= []
window.gtag = function (..._args: unknown[]): void {
  window.dataLayer.push(arguments)
}

window.gtag('js', new Date())
window.gtag('config', 'G-CHBYPRFB38')
