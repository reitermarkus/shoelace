/*! ga-ext.js v1.0 | git.io/AoHg4w | @reitermarkus */

var _gaq = [
      ['_setAccount','UA-XXXXXXXX-X'], // Change “UA-XXXXXXXX-X” to your Google Analytics ID.
      ['_trackPageview']
    ]

;(function(d){

  var ga = d.createElement('script')
  ga.async = true
  ga.src = 'http' + ('https:' == d.location.protocol ? 's://ssl' : '://www') + '.google-analytics.com/ga.js'

  var s = d.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(ga, s)

})(document)