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

//sort
const nums = [3, 10, 2];
nums.sort((a, b) => b - a);
console.log(nums);
nums.sort((a, b) => a - b);
console.log(nums);

//reduce
//sum of all elements
const nums1 = [1, 2, 3, 4];

const sum = nums1.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(sum);
//Product of all elements
const numbers = [1, 2, 3, 4];

const product = numbers.reduce((acc, curr) => {
  return acc * curr;
}, 1);   // initial value = 1

console.log(product);
// 24

//Create an object (frequency count)
const fruits = ["apple", "banana", "apple"];

const frequency = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});   // initial value = empty object
console.log(frequency);
// { apple: 2, banana: 1 }

//Convert array to object (key-value mapping)
const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

const userMap = users.reduce((acc, curr) => {
  acc[curr.id] = curr.name;
  return acc;
}, {});

console.log(userMap);
// { '1': 'A', '2': 'B' }
//Find maximum value
const numbers1 = [10, 5, 30, 20];

const max = numbers1.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
});

console.log(max);
// 30
//No initial value → first element becomes acc.

//Flatten a nested array
const nested = [[1, 2], [3, 4], [5]];

const flat = nested.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);

console.log(flat);
// [1, 2, 3, 4, 5]
//Group objects by property (advanced)


//Array Destructuring
const colors = ["red", "green", "blue"];

const [first, second] = colors;

console.log(first);  // red
console.log(second); // green

//object Destructuring
const user = { name: "Arka", age: 20 };

const { name, age } = user;

console.log(name); // Arka
console.log(age);  // 20

//Array Spread
const arr1 = [1, 2];
const arr2 = [3, 4];

const merged = [...arr1, ...arr2];

console.log(merged);
// [1, 2, 3, 4]


//Object Spread

const ourUser = { name: "Arka", age: 20 };

const updatedUser = { ...ourUser, city: "Kolkata" };

console.log(updatedUser);
// { name: 'Arka', age: 20, city: 'Kolkata' }




