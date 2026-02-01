
const fs = require("fs");
//here we are calling  a asynchronous task synchronously/
const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);
