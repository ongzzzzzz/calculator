$(document).ready(() => {

  //toggle shift
  $("#shift").click(() => {
    if( $(".shifted").css("display") == "none"){
      $(".unshifted").hide(); $(".shifted").show();
    } else{
      $(".unshifted").show(); $(".shifted").hide();
    }
    console.log("toggled shift");
  });

  //render display
  // $(".unshifted").click(() => {
    
  //   console.log( $(this).html() );
  // });


});

// register button clicks
//display button clicks to display
//parse numbers as ints so can do calc
// differentiate between  +-*/ when click, show on display
//when press = then update the display

// (ints, functions, and syntaxes (decimal, comma, semicolon)) *****ints more importants
//find an api which does derivat and integra, write a function for mixed fraction and sexagecimal