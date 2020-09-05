
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
}

function HandleOperation(e){
  if(!isNaN(e.innerHTML) || e.innerHTML == "."){
    //if number, show on display
    answer += e.innerHTML; //string concatenation
    return answer;
  } else {
    //not a number, log its name
    var clickedFunction = e.id;
    return (math[clickedFunction](result.innerHTML));
  }
}

//parse the expressions, eg 2*pi int
//change all elements id so it follows https://api.mathjs.org

// register button clicks
//display button clicks to display
//parse numbers as ints so can do calc
// differentiate between  +-*/ when click, show on display
//when press = then update the display

// (ints, functions, and syntaxes (decimal, comma, semicolon)) *****ints more importants
//find an api which does derivat and integra, write a function for mixed fraction and sexagecimal