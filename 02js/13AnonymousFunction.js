
function sumOfSomething(a, b, callbackFunc) {
  console.log(callbackFunc);
  return callbackFunc(a) + callbackFunc(b);
}
console.log(sumOfSomething(2, 5, function cube(n) {
  return Math.pow(n, 3);
}));

//Anonymous Functions : functions with no name to it
console.log(sumOfSomething(2, 5, function (n) {
  return Math.pow(n, 2);
}));

//Anonymous Arrow function
console.log(sumOfSomething(2, 5, (n) => {
  return Math.pow(n, 4);
}));
