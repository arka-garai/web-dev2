//JSON => javascript object notation


const userString = '{"fullName": "Arka Garai", "age": 24, "gender": "male"}';

console.log(userString["0"]);//prints 0th index character

const user = JSON.parse(userString);
console.log(user);


const user2 = {
  fullName: "Arka Garai",
  age: 24,
  gender: "male",
}

const finalString = JSON.stringify(user2);
console.log(finalString);
