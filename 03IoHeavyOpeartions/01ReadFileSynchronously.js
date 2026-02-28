//const fs = require("fs"); //CommonJs
import fs from "fs"; //Modern ES Module style
//here we are calling  a asynchronous task synchronously
const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);
console.log("random")
console.log("random")
console.log("random")
console.log("random")
console.log("random")
console.log("random")
