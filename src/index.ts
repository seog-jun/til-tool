import { Command } from "commander";
import myInfo from "../package.json";
import { syncReadFile } from "./utility/readFile";
import { htmlCreator } from "./utility/writeFile";
import { readDirectory } from "./utility/readDirectory";
import path from "path";
import fs from "fs";
const program = new Command();

// Command line inter face to use options
program
  .name("ts-node src/index.ts")
  .usage("-i <fileName> -o output <dirname> -s <stylesheetURL>");

program.version(
  myInfo.name + " " + myInfo.version,
  "-v, --version",
  "outputs the current version"
);
program.option("-i, --input <fileName>", "converts file to html");
program.option("-o, --output <dirName>", "creates a specified directory");
program.option("-s, --stylesheet <stylesheetURL>", "sets a stylesheet to HTML");
const options = program.opts();
program.parse(process.argv);

const inputValue = program.opts().input;
const outputValue = program.opts().output;
const styleValue = program.opts().stylesheet;

if (!inputValue) {
  console.error("Input file or directory is required.");
  process.exit(1); // Exit with an error code
}

if (!fs.existsSync(inputValue)) {
  console.error("Input file or directory does not exist.");
  process.exit(1); // Exit with an error code
}

if (options.input) {
  fs.rmSync(path.join(__dirname, `../til`), { recursive: true, force: true });
  fs.mkdirSync(path.join(__dirname, `../til`));

  // a single .txt file is used as an input
  if (inputValue.includes(".txt")) {
    const filename = path.parse(inputValue).name;

    if (options.stylesheet) {
      fs.writeFileSync(
        path.join(__dirname, `../til/${filename}.html`),
        htmlCreator(
          syncReadFile(path.join("../../", inputValue)),
          filename,
          styleValue
        )
      );
    } else {
      fs.writeFileSync(
        path.join(__dirname, `../til/${filename}.html`),
        htmlCreator(syncReadFile(path.join("../../", inputValue)), filename)
      );
    }
  }
  // a directory is used as an input
  else {
    const filesArray = readDirectory(path.join("../../", inputValue));

    if (options.stylesheet) {
      for (let i = 0; i < filesArray.length; i++) {
        const filename = path.parse(filesArray[i]).name;
        fs.writeFileSync(
          path.join(__dirname, `../til/${filename}.html`),
          htmlCreator(
            syncReadFile(path.join("../../", inputValue, filesArray[i])),
            filename,
            styleValue
          )
        );
      }
    } else {
      for (let i = 0; i < filesArray.length; i++) {
        const filename = path.parse(filesArray[i]).name;
        fs.writeFileSync(
          path.join(__dirname, `../til/${filename}.html`),
          htmlCreator(
            syncReadFile(path.join("../../", inputValue, filesArray[i])),
            filename
          )
        );
      }
    }
  }
}
if (options.output) {
  // remove the existing dir and til directory
  fs.rmSync(path.join(__dirname, `../til`), { recursive: true, force: true });
  fs.rmSync(path.join(__dirname, `../${outputValue}`), {
    recursive: true,
    force: true,
  });
  fs.mkdirSync(path.join(__dirname, `../${outputValue}`));

  // a single .txt file is used as an input
  if (inputValue.includes(".txt")) {
    const filename = path.parse(inputValue).name;
    fs.writeFileSync(
      path.join(__dirname, `../${outputValue}/${filename}.html`),
      htmlCreator(syncReadFile(path.join("../../", inputValue)), filename)
    );
  }
  // a directory is used as an input
  else {
    const filesArray = readDirectory(path.join("../../", inputValue));
    for (let i = 0; i < filesArray.length; i++) {
      const filename = path.parse(filesArray[i]).name;
      fs.writeFileSync(
        path.join(__dirname, `../${outputValue}/${filename}.html`),
        htmlCreator(
          syncReadFile(path.join("../../", inputValue, filesArray[i])),
          filename
        )
      );
    }
  }
}
