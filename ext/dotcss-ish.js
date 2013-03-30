(function(win) {
  var host = win.location.hostname.replace(/\./g,'-'),
      de = document.documentElement;

  // Now lets just add our class.
  de.classList.add(host);
})(window);
