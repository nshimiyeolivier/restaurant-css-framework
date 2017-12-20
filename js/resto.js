$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('#bg-colornav').css({"position": "fixed !important", "top": "0", "margin-top": "0"});
  }
});
