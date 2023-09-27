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
  .usage("<fileName/dirName> -o output <dirname> -s <stylesheetURL>");

program.version(
  myInfo.name + " " + myInfo.version,
  "-v, --version",
  "outputs the current version"
);
program.argument("<fileName/dirName>", "converts file to html");
// program.option("-i, --input <fileName>", "converts file to html");
program.option("-o, --output <dirName>", "creates a specified directory");
program.option("-s, --stylesheet <stylesheetURL>", "sets a stylesheet to HTML");
const options = program.opts();
program.parse(process.argv);
const arg = program.args[0];
// const inputValue = program.opts().input;
const outputValue = program.opts().output;
const styleValue = program.opts().stylesheet;

const fileExt = arg.substring(arg.lastIndexOf("."));
if (arg) {
  fs.rmSync(path.join(__dirname, `../til`), { recursive: true, force: true });
  fs.mkdirSync(path.join(__dirname, `../til`));

  // a single .txt file is used as an input
  if (fileExt === ".txt") {
    const filename = path.parse(arg).name;

    if (options.stylesheet) {
      fs.writeFileSync(
        path.join(__dirname, `../til/${filename}.html`),
        htmlCreator(
          syncReadFile(path.join("../../", arg)),
          filename,
          styleValue
        )
      );
    } else {
      fs.writeFileSync(
        path.join(__dirname, `../til/${filename}.html`),
        htmlCreator(syncReadFile(path.join("../../", arg)), filename)
      );
    }
  }
  // a directory is used as an input
  else {
    const filesArray = readDirectory(path.join("../../", arg));

    if (options.stylesheet) {
      for (let i = 0; i < filesArray.length; i++) {
        const filename = path.parse(filesArray[i]).name;
        fs.writeFileSync(
          path.join(__dirname, `../til/${filename}.html`),
          htmlCreator(
            syncReadFile(path.join("../../", arg, filesArray[i])),
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
            syncReadFile(path.join("../../", arg, filesArray[i])),
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
  if (fileExt === ".txt") {
    const filename = path.parse(arg).name;
    fs.writeFileSync(
      path.join(__dirname, `../${outputValue}/${filename}.html`),
      htmlCreator(syncReadFile(path.join("../../", arg)), filename)
    );
  }
  // a directory is used as an input
  else {
    const filesArray = readDirectory(path.join("../../", arg));
    for (let i = 0; i < filesArray.length; i++) {
      const filename = path.parse(filesArray[i]).name;
      fs.writeFileSync(
        path.join(__dirname, `../${outputValue}/${filename}.html`),
        htmlCreator(
          syncReadFile(path.join("../../", arg, filesArray[i])),
          filename
        )
      );
    }
  }
}
