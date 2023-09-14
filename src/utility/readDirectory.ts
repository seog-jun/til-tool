const fs = require("fs");
const path = require("path");
import { join } from "path";
const readFile = require("./readFile");

module.exports.readDirectory = function (dirName: string) {
  let filesArray: string[] = [];
  let filenames = fs.readdirSync(join(__dirname, dirName));
  filenames.forEach((file: string) => {
    if (path.extname(file) == ".txt") {
      filesArray.push(file);
    }
  });
  return filesArray;
};
