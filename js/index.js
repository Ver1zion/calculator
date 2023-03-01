"use strict";

class Calculator {
  constructor(previousOperandText, actualOperandText) {
    this.previousOperandText = previousOperandText;
    this.actualOperandText = actualOperandText;
    this.clear();
  }

  clear() {
    this.actualOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.actualOperand = this.actualOperand.slice(0, -1);
  }

  addNumber(number) {
    if (number === "." && this.actualOperand.includes(".")) return;
    this.actualOperand += number;
  }

  chooseOperation(operation) {
    if (this.actualOperand === "") return;
    if (this.actualOperand !== "") {
      this.calculate();
    }
    this.operation = operation;
    this.previousOperand = this.actualOperand;
    this.actualOperand = "";
  }

  decimalPlaces(calculationNumbers) {
    return calculationNumbers.toString().includes(".")
      ? calculationNumbers.toString().split(".").pop().length
      : 0;
  }

  calculate() {
    this.calculation;
    const prev = parseFloat(this.previousOperand);
    const actual = parseFloat(this.actualOperand);

    switch (this.operation) {
      case "+":
        this.calculation =
          this.decimalPlaces(prev + actual) <= 0
            ? prev + actual
            : (prev + actual).toFixed(3);
        break;
      case "-":
        this.calculation =
          this.decimalPlaces(prev - actual) <= 0
            ? prev - actual
            : (prev - actual).toFixed(3);
        break;
      case "*":
        this.calculation =
          this.decimalPlaces(prev * actual) <= 3
            ? prev * actual
            : (prev * actual).toFixed(3);
        break;
      case "/":
        this.calculation =
          this.decimalPlaces(prev / actual) <= 3
            ? prev / actual
            : (prev / actual).toFixed(3);
        break;
      case "%":
        this.calculation =
          this.decimalPlaces((prev * actual) / 100) <= 3
            ? (prev * actual) / 100
            : ((prev * actual) / 100).toFixed(3);
        break;
      default:
        return;
    }
    this.actualOperand = this.calculation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  updateDisplay() {
    this.actualOperandText.innerText = this.actualOperand;
    this.previousOperandText.innerText = this.previousOperand;
  }
}

const numberButtons = document.querySelectorAll(".button-num");
const operationButtons = document.querySelectorAll(".button-operation");
const equalsButton = document.querySelector(".equals");
const deleteButton = document.querySelector(".clear");
const clearAllButton = document.querySelector(".clear-all");
const previousOperandText = document.querySelector(".previous-action");
const actualOperandText = document.querySelector(".actual-action");

const calculator = new Calculator(previousOperandText, actualOperandText);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.addNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", () => {
  calculator.calculate();
  calculator.updateDisplay();
});

clearAllButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
