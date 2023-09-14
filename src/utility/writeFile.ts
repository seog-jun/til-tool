module.exports.htmlCreator = function (
  line: string[],
  title: string,
  stylesheetURL: string = ""
) {
  var newLine = "";
  for (let i = 0; i < line.length; i++) {
    if (line[i] === "") continue;
    newLine = newLine + `<p>${line[i]}</p>` + "\n" + "\t\t";
  }
  const htmlString = `<!doctype html>
  <html lang="en">
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
    <h1>${title}</h1>
    ${newLine}
  </body>
  </html>`;
  return htmlString;
};
