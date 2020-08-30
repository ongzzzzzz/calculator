// $(document).ready(() => {
//   //toggle shift
//   $("#shift").click(() => {
//     if( $(".shifted").css("display") == "none"){
//       $(".unshifted").hide(); $(".shifted").show();
//     } else{
//       $(".unshifted").show(); $(".shifted").hide();
//     }
//     console.log("toggled shift");
//   });
//   //render display
//   $(".button").click(() => {
//     var self = $(this);
//     console.log( self.html() );
//   });
// });

function shiftButtons(){
  var shifteds = document.getElementsByClassName("shifted");
  var unshifteds = document.getElementsByClassName("unshifted");
  for(var i = 0; i < shifteds.length; i++) {
    if(shifteds[i].style.display == "none"){
      shifteds[i].setAttribute("style", "display: inline");
      unshifteds[i].setAttribute("style", "display: none");
    }else{
      shifteds[i].setAttribute("style", "display: none");
      unshifteds[i].setAttribute("style", "display: inline");
    }
    console.log("woohoo");
  }
}

function updateResult(element){
  console.log(element.id);
}

var buttons = document.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons.item(i).addEventListener("click", () => {
    updateResult(this).bind(this);
  });
}
//this place cacat
//maybe make a function called update result, then bind it to all of the buttons

//have a variable called result
//defaults to 0
//when 



// register button clicks
//display button clicks to display
//parse numbers as ints so can do calc
// differentiate between  +-*/ when click, show on display
//when press = then update the display

// (ints, functions, and syntaxes (decimal, comma, semicolon)) *****ints more importants
//find an api which does derivat and integra, write a function for mixed fraction and sexagecimal