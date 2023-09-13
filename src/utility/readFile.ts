import { readFileSync } from "fs";
import { join } from "path";

module.exports.syncReadFile = function (filename: string) {
  const contents = readFileSync(join(__dirname, filename), "utf-8");
  const arr = contents.split(/\r?\n/);
  return arr;
};

// const lineArr = syncReadFile("../../examples/example1.txt");

// writeFileSync("example1.html", htmlCreator(lineArr));
