$( "#go" ).click(function() {
  $( ".block:first" ).animate({
    left: 1000
  }, {
    duration: 1000,
    step: function( now, fx ){
      $( ".block:gt(0)" ).css( "left", now );
    }
  });
});
$( "#go" ).click(function() {
  $( "#blocky" ).animate({
    opacity: 0.4,
    marginLeft: "1in",
  }, 1500 );
});
$("#go").click(function () {
   
  $("#book").hide(2000);
   
});
$( "#reset" ).click(function() {
  $( ".block:first" ).animate({
    left: 100
  }, {
    duration: 1000,
    step: function( now, fx ){
      $( ".block:gt(0)" ).css( "left", now );
    }
  });
});
$( "#reset" ).click(function() {
  $( "#blocky" ).animate({
    opacity: 1,
    marginLeft: "1in",
  }, 1500 );
});
