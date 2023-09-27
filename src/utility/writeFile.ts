export function htmlCreator(
  line: string[],
  title: string,
  stylesheetURL: string = "",
  lang: string = ""
) {
  let newLine = "";
  for (let i = 0; i < line.length; i++) {
    if (line[i] === "") continue;
    newLine = newLine + `<p>${line[i]}</p>` + "\n" + "\t\t";
  }
  const htmlString = `<!doctype html>
  ${lang === "" ? `<html lang="en-ca">` : `<html lang="${lang}">`}
    <head>
    <meta charset="utf-8">
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${
      stylesheetURL === ""
        ? ""
        : `<link rel="stylesheet" href="${stylesheetURL}">`
    }
  </head>
  <body>
    ${newLine}
  </body>
  </html>`;
  return htmlString;
}
