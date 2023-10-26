// business logic
function add(number1, number2) {
  return number1 + number2;4
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return "the multiplied sum is " + number1 * number2;
}

function divide(number1, number2) {
  return "the divided sum is " + number1 / number2;
}

function saySomething(whatToSay) {
  window.alert(whatToSay)
}


// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

saySomething(divide(number1, number2));