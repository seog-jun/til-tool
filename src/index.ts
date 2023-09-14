import { writeFileSync } from "fs";
import { join } from "path";

const { Command } = require("commander");
const program = new Command();
const myInfo = require("../package.json");
const readFile = require("./utility/readFile");
const writeFile = require("./utility/writeFile");
const readDir = require("./utility/readDirectory");
const path = require("path");
const fs = require("fs");

// Command line inter face to use options
program.name("ts-node src/index.ts").usage("-i <fileName> / <dirName>");

program.version(
  myInfo.name + " " + myInfo.version,
  "-v, --version",
  "output the current version"
);
program.option("-i, --input <filename>", "converts file to html");
program.option("-o, --output <filename>", "creates a specified directory");
const options = program.opts();
program.parse(process.argv);

const inputValue = program.opts().input;
const outputValue = program.opts().output;

if (options.input) {
  fs.rmSync(join(__dirname, `../til`), { recursive: true, force: true });
  fs.mkdirSync(join(__dirname, `../til`));

  // a single .txt file is used as an input
  if (inputValue.includes(".txt")) {
    const filename = path.parse(inputValue).name;
    writeFileSync(
      join(__dirname, `../til/${filename}.html`),
      writeFile.htmlCreator(
        readFile.syncReadFile(join("../../", inputValue)),
        filename
      )
    );
  }
  // a directory is used as an input
  else {
    const filesArray = readDir.readDirectory(join("../../", inputValue));
    for (let i = 0; i < filesArray.length; i++) {
      const filename = path.parse(filesArray[i]).name;
      writeFileSync(
        join(__dirname, `../til/${filename}.html`),
        writeFile.htmlCreator(
          readFile.syncReadFile(join("../../", inputValue, filesArray[i])),
          filename
        )
      );
    }
  }
}
if (options.output) {
  // remove the existing dir and til directory
  fs.rmSync(join(__dirname, `../til`), { recursive: true, force: true });
  fs.rmSync(join(__dirname, `../${outputValue}`), {
    recursive: true,
    force: true,
  });
  fs.mkdirSync(join(__dirname, `../${outputValue}`));

  // a single .txt file is used as an input
  if (inputValue.includes(".txt")) {
    const filename = path.parse(inputValue).name;
    writeFileSync(
      join(__dirname, `../${outputValue}/${filename}.html`),
      writeFile.htmlCreator(
        readFile.syncReadFile(join("../../", inputValue)),
        filename
      )
    );
  }
  // a directory is used as an input
  else {
    const filesArray = readDir.readDirectory(join("../../", inputValue));
    for (let i = 0; i < filesArray.length; i++) {
      const filename = path.parse(filesArray[i]).name;
      writeFileSync(
        join(__dirname, `../${outputValue}/${filename}.html`),
        writeFile.htmlCreator(
          readFile.syncReadFile(join("../../", inputValue, filesArray[i])),
          filename
        )
      );
    }
  }
}
