$(document).ready(function() {

  $(".new-tweet form textarea").on("keyup", function(event) {
    let number = $(this).val().length;
    let counterLocation = $ (this).parent().find(".counter");
    let charaCounter = counterLocation.text(140 - number);
    if (number >  140) {
      charaCounter.addClass('error');
    } else {
      charaCounter.removeClass('error');
    }

  });

});