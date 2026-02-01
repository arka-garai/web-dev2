let ctr = 0;

function callBack() {
  console.log(ctr)
  ctr++;

}

setInterval(callBack, 1000);

let x = 0;
for (let i = 0; i < 4000000; i++) {
  x += i;
}
console.log(x);
