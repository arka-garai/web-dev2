const initialArray = [1, 2, 3];
initialArray.push(9);
console.log(initialArray);
initialArray.pop();
console.log(initialArray);
initialArray.shift();//pop from front of the array
console.log(initialArray);
initialArray.unshift(7);//put something in the front of the array
console.log(initialArray);
const secondArray = [10, 11, 2, 9];
console.log(initialArray.concat(secondArray));
console.log(initialArray.length);

//for loop 
for (let i = 0; i < initialArray.length; i++) {
  console.log(initialArray[i]);

}

//forEach loop
function logThing(num) {
  console.log(num);
}
initialArray.forEach(logThing);

//callbacks, map, filter, find, sort



