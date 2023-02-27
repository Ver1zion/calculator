"use strict";
const buttons = document.querySelector(".buttons");
const buttonsNum = document.querySelectorAll(".button-num");
const buttonsOperation = document.querySelectorAll(".button-operation");
const clearAll = document.querySelector(".clear-all");
const clearOneNum = document.querySelector(".clear");
const buttonDot = document.querySelector(".button-dot");
const equals = document.querySelector(".equals");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const actualAction = document.querySelector(".actual-action");
const decimalPlaces = (x) =>
  x.toString().includes(".") ? x.toString().split(".").pop().length : 0;

let firstNum = "0";
let secondNum;
let subtraction;
let summing;

setInterval(() => {
  if (!!actualAction.textContent) {
    // console.log(Boolean(actualAction.textContent));
    secondNum = parseFloat(actualAction.innerText);
  }
}, 0);

function updateDisplay(parent) {
  parent.addEventListener("click", (event) => {
    if (actualAction.textContent === "0") {
      actualAction.textContent = "";
      actualAction.textContent += event.target.textContent;
    } else {
      actualAction.textContent += event.target.textContent;
    }
    if (event.target.closest(".minus")) {
      firstNum = parseFloat(actualAction.innerText);
      actualAction.textContent = "";
      equals.addEventListener("click", () => {
        subtraction = firstNum - secondNum;
        actualAction.innerText = subtraction;
      });
    } else if (event.target.closest(".plus")) {
      firstNum = parseFloat(actualAction.innerText);
      actualAction.textContent = "";
      equals.addEventListener("click", () => {
        subtraction = firstNum + secondNum;
        actualAction.innerText = subtraction;
      });
    } else if (event.target.closest(".multiply")) {
      firstNum = parseFloat(actualAction.innerText);
      actualAction.textContent = "";
      equals.addEventListener("click", () => {
        subtraction = firstNum * secondNum;
        actualAction.innerText =
          decimalPlaces(subtraction) > 0 ? subtraction.toFixed(2) : subtraction;
      });
    } else if (event.target.closest(".divide")) {
      firstNum = parseFloat(actualAction.innerText);
      actualAction.textContent = "";
      equals.addEventListener("click", () => {
        subtraction = firstNum / secondNum;
        actualAction.innerText =
          decimalPlaces(subtraction) > 0 ? subtraction.toFixed(2) : subtraction;
      });
    } else if (event.target.closest(".clear-all")) {
      firstNum = "0";
      actualAction.innerText = "0";
    } else if (event.target.closest(".clear")) {
      actualAction.innerText = actualAction.innerText.slice(0, -1);
      if (actualAction.textContent.length <= "0") {
        actualAction.innerText = "0";
      }
    }
  });
}

updateDisplay(buttons);
