// console.log("start")
// setTimeout(() => {
//   console.log("yoo i am calledback");
// }, 0);
//
// let startDate = new Date().getTime();
// let endDate = startDate;
// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }
// console.log("end");


//higher order function
const radii = [2, 6, 4, 8, 9];

const area = r => Math.PI * Math.pow(r, 2);
const circumference = r => 2 * Math.PI * r;
const diameter = r => 2 * r;

Array.prototype.calculateWhatever = function(logic) {
  let output = [];

  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }

  return output;
};

console.log(radii.calculateWhatever(area));
console.log(radii.calculateWhatever(circumference));
console.log(radii.calculateWhatever(diameter));



//Prototype and Prototypal Inheritance in Javascript
let obj1 = {
  name: "Arka Garai",
  city: "Bankura",
  getIntro: function() {
    console.log(`name : ${this.name}, city: ${this.city}`);
  }
}
let obj2 = {
  name: "Rahul Bajpai",
}

//obj2 inherits props and methods from obj1
//obj2 inherits from __proto__ and __proto__ points to obj1
obj2.__proto__ = obj1;
console.log(obj2.name);
obj2.getIntro();

//map (used for transformation)
let num = [1, 4, 2, 6, 8];

//double
function double(x) {
  return 2 * x;
}
let out1 = num.map(double);
console.log(out1);

//triple
console.log(num.map((x) => x * 3));
//toBinary
console.log(num.map((x) => x.toString(2)));

//filter
//filter out greaterThan4 elements
function greaterThan4(x) {
  return x > 4;
}

console.log(num.filter(greaterThan4));
//filter out odd
console.log(num.filter((x) => x % 2));
//filter out even
console.log(num.filter((x) => x % 2 === 0));

//reduce

//findSum
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(findSum(num));
//findSum using reduce
console.log(num.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0));

//findMax
function findMax(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(num));
//findMax using reduce
console.log(num.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
  }
  return max;
}, -Infinity));

//real life exmaple
const users = [
  { firstName: "naruto", lastName: "uzumaki", age: 17 },
  { firstName: "sasuke", lastName: "uchiha", age: 17 },
  { firstName: "luffy", lastName: "monkey", age: 19 },
  { firstName: "eren", lastName: "yeager", age: 19 },
];

// Question:
// Create a list of full names
// Output → ["naruto uzumaki", "sasuke uchiha", ...]

const names = users.map(
  (user) => `${user.firstName} ${user.lastName}`
);

console.log(names);
//Whenever we have an array and we want to iterate over it to produce one final value, reduce() is the right tool.
// we need this {17:2, 19:2}
console.log(users.reduce((acc, curr) => {
  acc[curr.age] = (acc[curr.age] || 0) + 1;
  return acc;
}, {}));

// Find the list of first names of people who are below 19.
console.log(
  users.filter((user) => user.age < 19)
    .map((user) => user.firstName)
);

//do using reduce no function chaining
console.log(
  users.reduce(
    (acc, curr) => {
      if (curr.age < 19) {
        acc.push(curr.firstName);
      }
      return acc;
    }, []
  )
);

//promises
const GITHUB_API = "https://api.github.com/users/arka-garai";

fetch(GITHUB_API)
  .then((response) => response.json()) // convert to JSON
  .then((user) => {
    const details = {
      username: user.login,
      about: user.bio,
      followers: user.followers,
      following: user.following,
    };

    return details;
  })
  .then((details) => console.log(details))
  .catch((error) => console.error(error));

// //promise chaining
// const cart = ["shoes", "laptop", "comb"];
//
// function validateCart(cart) {
//   return true;
// }
// function proceedToPayment(orderId) {
//   return new Promise((resolve, reject) => {
//     resolve("Payment Successful");
//   })
// }
// function createOrder(cart) {
//   const promise = new Promise((resolve, reject) => {
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     }
//     const orderId = "1234";
//     if (orderId) {
//       //simulate a delay
//       setTimeout(() => {
//         resolve(orderId);
//       }, 5000)
//     }
//   })
//   return promise;
// }
//
// const promise = createOrder(cart);
// //we attach a callback function to a promise object
// promise
//   .then((orderId) => {
//     return orderId;
//   })
//   .then((orderId) => {
//     return proceedToPayment(orderId);
//   })
//   .then((paymentDetails) => {
//     console.log(paymentDetails);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   })


//what is async?

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Value!!");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Value!!");
  }, 20000);
});

async function handlePromise() {
  console.log("Hello World!!");

  const val = await p1;
  console.log("Namaste JavaScript");
  console.log(val);

  const val2 = await p2;
  console.log("Namaste JavaScript 2");
  console.log(val2);
}

handlePromise();

//async and await are used to handle promises
//await can only be used inside async function

const API_URL = "https://api.github.com/users/arka-garai";

async function handlePromise2() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

handlePromise2();
