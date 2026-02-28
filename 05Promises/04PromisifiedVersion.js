//promisified version of fs.readFile
import fs from "fs";

function fsReadFilePromise(fileName, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, encoding, (err, content) => {
      if (err) {
        reject("Error while reading file");
      } else {
        resolve(content);
      }
    })
  })
}


fsReadFilePromise("a.txt", "utf-8")
  .then((content) => {
    console.log(content);
  })
  .catch((err) => {
    console.log(err);
  })


//promisified version of setTimeout

function setTimeoutPromisified(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve("yoooo i am logged alteast " + delay + " milliseconds later");
    }, delay);
  });
}

setTimeoutPromisified(1000)
  .then((str) => {
    console.log(str);
    return setTimeoutPromisified(2000);
  })
  .then((str) => {
    console.log(str);
  })
