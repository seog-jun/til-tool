import path from "path";
import fs from "fs";

export function syncReadFile(filename: string) {
  try {
    const contents = fs.readFileSync(path.join(__dirname, filename), "utf-8");
    const arr = contents.split(/\r?\n/);
    return arr;
  } catch (err) {
    console.log(err);
    process.exit(-1);
  }
}
