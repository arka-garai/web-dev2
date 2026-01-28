function sum(num1, num2, fnToCall) {
  let result = num1 + num2;
  fnToCall(result);
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

sum(5, 4, displayResult);

function greet() {
  console.log("hello world");
}
setTimeout(greet, 1000);

setInterval(greet, 4 * 1000);
