const currentDate = new Date();

console.log(currentDate.getMonth() + 1);//months are zero indexed 
console.log(currentDate.getDate());
console.log(currentDate.getFullYear());
console.log(currentDate.getDay());//weekdays + weekend
console.log(`${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()} : ${currentDate.getMilliseconds()}`)

// epoch timestamp
console.log("Time in milliseconds since 1970: ", currentDate.getTime());

//can be used to calculate time duration for a specific task

function calculateSum() {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  return sum;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();

let sum = calculateSum();
console.log(sum);

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log("Time taken in ms : " + (afterTimeInMs - beforeTimeInMs));


//make a stop watch 
function printCurrentTime() {
  let currentDate = new Date();
  console.log(`${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()} : ${currentDate.getMilliseconds()}`)
}
setInterval(printCurrentTime, 1000)
