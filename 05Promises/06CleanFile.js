//synchronous function call

import { rejects } from "assert";
import { resolve } from "dns";
import fs from "fs";

function cleanFileSync(fileName) {
  const content = fs.readFileSync(fileName, "utf-8");
  const trimmedContent = content.trim();
  fs.writeFileSync(fileName, trimmedContent);
  console.log("file cleaned successfully")
}

cleanFileSync("a.txt");

//callback based async function call

// function cleanFile(fileName, cb) {
//   fs.readFile(fileName, "utf-8", (err, content) => {
//     if (err) {
//       console.log("error while reading file");
//     } else {
//       const trimmedContent = content.trim();
//       fs.writeFile(fileName, trimmedContent, (err) => {
//         if (err) {
//           console.log("error while writing file");
//         } else {
//           cb();
//         }
//       })
//     }
//   })
// }
//
// cleanFile("b.txt", () => {
//   console.log("file cleaned successfully")
// });

//promise based async function call  (.then | .catch)

//callback based async function call
function cleanFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, content) => {
      if (err) {
        reject();
      } else {
        const trimmedContent = content.trim();
        fs.writeFile(fileName, trimmedContent, (err) => {
          if (err) {
            reject();
          } else {
            resolve();
          }
        })
      }
    })

  })
}
cleanFile("b.txt")
  .then(() => {
    console.log("file cleaned successfully");
  })
  .catch(() => {
    console.log("error while cleaning file");
  })


//promise based ,async await

async function main() {
  try {
    await cleanFile("c.txt");
    console.log("file cleaned successfully");
  } catch (e) {
    console.log("error while cleaning file");
  }

}
main();

// write a promisified function that takes a file prefix as an input (a)
// and cleans ({prefix}1.txt), {prefix}2.txt, {prefix}3.txt
//
async function cleanAllFiles(prefix) {
  await cleanFile(prefix + "1.txt")
  await cleanFile(prefix + "2.txt")
  await cleanFile(prefix + "3.txt")
}
cleanAllFiles("a")
  .then(() => {
    console.log("file cleaned successfully");
  })
  .catch(() => {
    console.log("error while cleaning file ewfwef wefwef");
  })


