
let buttons = document.querySelectorAll(".button")
document.getElementById("clear").addEventListener("click", clearScreen);
document.getElementById("equals").addEventListener("click", runMath);
let result = document.getElementById("display")

for (let button of buttons) {
    button.addEventListener("click", addToDisplay)
}

function addToDisplay(event) {
    let textOnButtonClicked = event.target.innerText
    // let result = document.getElementById("display")
    // console.log(event)
    result.value = result.value + textOnButtonClicked;
}
function clearScreen() {
    // let result = document.getElementById("display")
    result.value = "";
}

 function runMath() {
    // let result = document.getElementById("display")
     result.value = eval(result.value);
 }

 let input = document.querySelector("input")
 input.addEventListener("input", badInput)

 function badInput() {
     if (result.value === NaN) {
        eval(result.value) === "Err"
     }
 }
 
//  function catchErrors() {
//      result.value = "";
//      let x = result.value;
//      try {
//          if(isNaN(x))
//      }
//      catch(err) {
//          result.value === "Err";
//      }
//  }


