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

const doubled = initialArray.map(n => n * 2);
console.log(doubled);

//all elements satisfying the condition
const greaterThanTwo = initialArray.filter(n => n > 2);
console.log(greaterThanTwo);


//first match only
const found = initialArray.find(n => n > 2);
console.log(found);

const nums = [3, 10, 2];
nums.sort((a, b) => b - a);
console.log(nums);
nums.sort((a, b) => a - b);
console.log(nums);

const nums1 = [1, 2, 3, 4];

const sum = nums1.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(sum);
