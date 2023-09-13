const fs = require("fs");
const path = require("path");
import { join } from "path";
const readFile = require("./readFile");

// module.exports.readDirectory = function (dirName: string) {
//   let filesArray: string[] = [];
//   fs.readdir(join(__dirname, dirName), (err: any, files: any[]) => {
//     if (err) console.log(err);
//     else {
//       console.log("\nCurrent directory filenames:");
//       files.forEach((file) => {
//         if (path.extname(file) == ".txt") {
//           console.log(file);
//           filesArray.push(file);
//         }
//       });
//     }
//     console.log(filesArray);
//   });
//   console.log(filesArray);
//   return filesArray;

// };
module.exports.readDirectory = function (dirName: string) {
  let filesArray: string[] = [];
  let filenames = fs.readdirSync(join(__dirname, dirName));
  console.log("\nCurrent directory filenames:");
  filenames.forEach((file: string) => {
    if (path.extname(file) == ".txt") {
      console.log(file);
      filesArray.push(file);
    }
  });
  console.log(filesArray);
  return filesArray;
};
