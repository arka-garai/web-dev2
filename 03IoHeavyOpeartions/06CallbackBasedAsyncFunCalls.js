import fs from "fs";

fs.readFile("a.txt", "utf-8", (err, content) => {
  if (err) {
    console.log("error happened while reading file : ", err);
  } else {
    console.log(content);
  }
})
