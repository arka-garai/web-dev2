//This is not callback

function square(n) {
  return n * n
}

function cube(n) {
  return n * n * n
}

function sumOfSquares(a, b) {
  const val1 = square(a);
  const val2 = square(b);

  return val1 + val2;
}

function sumOfCubes(a, b) {
  const val1 = cube(a);
  const val2 = cube(b);

  return val1 + val2;
}

console.log(sumOfCubes(1, 2));
console.log(sumOfSquares(1, 2));

//In the above code we are repeating ourselves
//callback function: A function that is passed as an argument to another function and called inside it.

function sumOfSomething(a, b, callbackFunc) {
  return callbackFunc(a) + callbackFunc(b);
}
console.log(sumOfSomething(2, 5, square));
console.log(sumOfSomething(2, 5, cube));
