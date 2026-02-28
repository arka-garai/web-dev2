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


async function main() {
  let file1Content = await fsReadFilePromise("a.txt", "utf-8");
  let file2Content = await fsReadFilePromise("b.txt", "utf-8");
  let file3Content = await fsReadFilePromise("c.txt", "utf-8");

  console.log(file1Content);
  console.log(file2Content);
  console.log(file3Content);
}
main();
console.log("heloo adfWADASD");
console.log("heloo adfWADASD");
console.log("heloo adfWADASD");
