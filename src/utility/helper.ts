import path from "path";
import fs from "fs";
import { readFile } from "../utility/readFile";
import { htmlCreator } from "./htmlCreator";
export function fileExt(ext: string) {
  if (ext) {
    return ext.substring(ext.lastIndexOf("."));
  } else {
    return process.exit(-1);
  }
}

export function removeDir(outputValue: string = "") {
  if (outputValue) {
    // remove the existing dir and til directory
    fs.rmSync(path.join(__dirname, `../../til`), {
      recursive: true,
      force: true,
    });
    fs.rmSync(path.join(__dirname, `../../${outputValue}`), {
      recursive: true,
      force: true,
    });
    fs.mkdirSync(path.join(__dirname, `../../${outputValue}`));
  } else {
    fs.rmSync(path.join(__dirname, `../../til`), {
      recursive: true,
      force: true,
    });
    fs.mkdirSync(path.join(__dirname, `../../til`));
  }
}

export function writeFile(
  filename: string,
  arg: string,
  styleValue: string = "",
  langValue: string = "",
  outputValue: string = ""
) {
  if (outputValue) {
    fs.writeFileSync(
      path.join(__dirname, `../../${outputValue}/${filename}.html`),
      htmlCreator(readFile(path.join("../../", arg)), filename)
    );
  } else {
    fs.writeFileSync(
      path.join(__dirname, `../../til/${filename}.html`),
      htmlCreator(
        readFile(path.join("../../", arg)),
        filename,
        styleValue,
        langValue
      )
    );
  }
}

export function writeMultipleFiles(
  filesArray: string[],
  arg: string,
  styleValue: string = "",
  langValue: string = "",
  outputValue: string = ""
) {
  if (outputValue) {
    for (let i = 0; i < filesArray.length; i++) {
      const filename = path.parse(filesArray[i]).name;
      fs.writeFileSync(
        path.join(__dirname, `../../${outputValue}/${filename}.html`),
        htmlCreator(readFile(path.join("../../", arg, filesArray[i])), filename)
      );
    }
  } else {
    for (let i = 0; i < filesArray.length; i++) {
      const filename = path.parse(filesArray[i]).name;
      fs.writeFileSync(
        path.join(__dirname, `../../til/${filename}.html`),
        htmlCreator(
          readFile(path.join("../../", arg, filesArray[i])),
          filename,
          styleValue,
          langValue
        )
      );
    }
  }
}
