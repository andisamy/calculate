
var outputDisplay = document.querySelector(".display");  // Select the display element
function display(num){
   
   outputDisplay.value += num;  // Append num to the current value in the display
}
function compute(){
   var outputDisplay = document.querySelector(".display");
   outputDisplay.value=eval(outputDisplay.value);
}
function allClear(){
   var outputDisplay = document.querySelector(".display");
   outputDisplay.value=" ";
}
function Deletelastvalue(){
   outputDisplay.value=outputDisplay.value.slice(0,-1);
}