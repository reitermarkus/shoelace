/*! on.touchstart.js v1.0 | git.io/ontouchstart | @reitermarkus */

;(function(d) {

  window.onload = function() {   

    if('ontouchstart' in d.documentElement && d.body.getAttribute('ontouchstart') == null)
      d.body.setAttribute("ontouchstart", "")

  }

})(document)