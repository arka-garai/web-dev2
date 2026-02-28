import fs from "fs";

function fileReadCallback(err, content) {
  if (err) {
    console.log(err);
  } else {
    console.log(content);
  }
}

fs.readFile("a.txt", "utf-8", fileReadCallback);

let sum = 0;
for (let i = 0; i < 10000000; i++) {
  sum += i;
}
console.log(sum);
