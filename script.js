
//get buttons
const shifteds = document.getElementsByClassName("shifted");
const unshifteds = document.getElementsByClassName("unshifted");

//shift function, still buggy
function shiftButtons(){
  for(var i = 0; i < shifteds.length; i++) {
    if(shifteds[i].style.display == "none"){
      shifteds[i].style.display = "block";
      unshifteds[i].style.display = "none";
    }else{
      shifteds[i].style.display = "none";
      unshifteds[i].style.display = "block";
    }
  }
}

//reference object of all buttons
const functionRefs = {};
//get all buttons
const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
  //attach event listener
  AttachEvent(button, "click", UpdateResult);
  functionRefs[button.innerHTML] = button.id;
});
console.log(functionRefs);

//attaches functions to actions
function AttachEvent(element, type, handler) {
	if (element.addEventListener) element.addEventListener(type, handler, false);
	else element.attachEvent("on"+type, handler);
}

//get results div 
const result = document.getElementById("result");
//answer, rendered on the display
var answer = "";

function UpdateResult(e) {
  result.innerHTML = HandleOperation(this);
  
  //if number, show on display
}

function HandleOperation(e){
  if(parseInt(e.innerHTML) >= 0){
    answer += e.innerHTML;
    return answer;
  } else {

    //get cilcked, append to string and send JSON request
    //https://api.mathjs.org/
    console.log(functionRefs[e.innerHTML]);
    return "nah";
  }
}

// register button clicks
//display button clicks to display
//parse numbers as ints so can do calc
// differentiate between  +-*/ when click, show on display
//when press = then update the display

// (ints, functions, and syntaxes (decimal, comma, semicolon)) *****ints more importants
//find an api which does derivat and integra, write a function for mixed fraction and sexagecimal
