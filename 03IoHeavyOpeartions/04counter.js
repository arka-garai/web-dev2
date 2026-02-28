let ctr = 0;

function callBack() {
  console.log(ctr)
  ctr++;

}

setInterval(callBack, 1000);

let sum = 0;
for (let i = 0; i < 400000000; i++) {
  sum += i;
}
console.log(sum);
