module.exports.htmlCreator = function (line: string[]) {
  var newLine = "";
  for (let i = 0; i < line.length; i++) {
    if (line[i] === "") continue;
    newLine = newLine + `<p>${line[i]}</p>` + "\n" + "\t\t";
  }
  const htmlString = `<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Filename</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    ${newLine}
  </body>
  </html>`;
  return htmlString;
};
