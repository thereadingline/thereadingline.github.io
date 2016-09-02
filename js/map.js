$(document).ready(function () {
  $('#map').addClass('scrolloff')
  $('#overlay').on("mouseup", function () { $('#map').addClass('scrolloff') })
  $('#overlay').on("mousedown", function () { $('#map').removeClass('scrolloff') })
  $("#map").mouseleave(function () { $('#map').addClass('scrolloff') })
})
