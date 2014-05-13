# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


$(window).on "load", ->
  run = () ->
    $('.loader div').css({'margin-top': 0, 'opacity': 0})
    $('.loader').delay(500).fadeOut(250)

  setTimeout(run, 150)
