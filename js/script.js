$(document).ready(function() {


var reviews = $('div[id^="review-"]').hide(),
    i = 0;

(function cycle() {

    reviews.eq(i).fadeIn(400)
              .delay(4000)
              .fadeOut(400, cycle);

    i = ++i % reviews.length;

})();


$("#logo").mouseover(function() {

$( "#logo" ).removeClass( "flipInX" );
  $( "#logo" ).addClass( "pulse" );



$( "#logo" ).mouseleave(function() {
  $( "#logo" ).removeClass( "pulse" );
});


})


});