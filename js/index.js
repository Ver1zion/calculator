"use strict";

const buttonsNum = document.querySelectorAll(".button-num");
const buttonsOperation = document.querySelectorAll(".button-operation");
const clearAll = document.querySelector(".clear-all");
const clearOneNum = document.querySelector(".clear");
const buttonDot = document.querySelector(".button-dot");
const equals = document.querySelector(".equals");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const actualAction = document.querySelector(".actual-action");
let firstNum;
let secondNum;
let subtraction;
let summing;

setInterval(() => {
  if (!!actualAction.textContent) {
    console.log(Boolean(actualAction.textContent));
    secondNum = parseInt(actualAction.innerText);
  }
}, 0);
function updateDisplay(button) {
  button.forEach((buttn) => {
    buttn.addEventListener("click", (targ) => {
      if (actualAction.textContent === "0") {
        actualAction.textContent = "";
        actualAction.textContent += buttn.textContent;
      } else {
        actualAction.textContent += buttn.textContent;
      }
      if (targ.currentTarget.textContent.includes("-")) {
        firstNum = parseInt(actualAction.innerText);
        actualAction.textContent = "";
      }
      if (targ.target.textContent.includes("+")) {
        firstNum = parseInt(actualAction.innerText);
        actualAction.textContent = "";
      }
    });
  });
}

function getTotalValue() {
  if (!!equals) {
    equals.addEventListener("click", () => {
      subtraction = firstNum - secondNum;
      actualAction.innerText = subtraction;
      console.log((subtraction = firstNum - secondNum));
    });
  }
}

updateDisplay(buttonsNum);
updateDisplay(buttonsOperation);
getTotalValue(equals);

// var display = document.getElementById("display");
// var values = display.innerText.split(" "); // split by space
// var num1 = parseFloat(values[0]); // convert first value to number
// var num2 = parseFloat(values[1]); // convert second value to number
// var sum = num1 + num2; // add two numbers
// console.log(sum); // display the sum

// else if (actualAction.textContent === "-") {
//   actualAction.textContent = "";
// }
// прошлое:
// function updateDisplay(button) {
//   button.forEach((buttn) => {
//     buttn.addEventListener("click", (targ) => {
//       if (actualAction.textContent === "0") {
//         actualAction.textContent = "";
//         actualAction.textContent += buttn.textContent;
//       } else {
//         actualAction.textContent += buttn.textContent;
//       }

//       if (targ.target.textContent.includes("-")) {
//         firstNum = parseInt(actualAction.innerText);
//         actualAction.textContent = "";
//         if (targ.target.closest(".equals")) {
//           summingNums = firstNum - summingNums;
//         }
//       }
//     });
//   });
// }

// function displayToArray(display) {
//   display.textContent.split();
// }

// updateDisplay(buttonsNum);
// updateDisplay(buttonsOperation)
