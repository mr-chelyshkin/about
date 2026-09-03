const fontLink = document.getElementById('font-preload');
if (fontLink) {
  fontLink.onload = function() {
    this.onload = null;
    this.rel = 'stylesheet';
  };
}