import path from "path";
import fs from "fs";

export function readDirectory(dirName: string) {
  let filesArray: string[] = [];
  fs.readdirSync(path.join(__dirname, dirName)).forEach((file: string) => {
    if (path.extname(file) == ".txt") {
      filesArray.push(file);
    }
  });
  return filesArray;
  // let filenames = fs.readdirSync(fs.join(__dirname, dirName)
  // );
  // filenames.forEach((file: string) => {
  //   if (path.extname(file) == ".txt") {
  //     filesArray.push(file);
  //   }
  // });
  // return filesArray;
}
