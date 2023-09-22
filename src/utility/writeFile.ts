import fs from 'fs';
export function htmlCreator(
  line: string[],
  title: string,
  stylesheetURL: string = ""
) {
  let newLine = "";
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
    ${newLine}
  </body>
  </html>`;
  return htmlString;
}

// Function to convert Markdown to HTML
function markdownToHTML(markdownText: string): string {
  // Replace italic and bold markdown with HTML tags
  markdownText = markdownText.replace(/(\*{1,2})([^\*]+)\1/g, '<$1>$2</$1>');
  
  // You can add more Markdown to HTML conversions here as needed
  // For example, handling headings, links, etc.

  return markdownText;
}

// Function to create HTML from content
function createHTMLContent(content: string, title: string, stylesheetURL: string = ""): string {
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
      ${content}
    </body>
    </html>`;
  
  return htmlString;
}

// Function to create HTML from a file (supporting both .txt and .md)
export function htmlCreatorFromFile(
  filePath: string,
  title: string,
  stylesheetURL: string = ""
): string {
  const fileExtension = filePath.slice(((filePath.lastIndexOf(".") - 1) >>> 0) + 2);

  if (fileExtension === 'txt') {
    // Read and process .txt file
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return createHTMLContent(fileContent, title, stylesheetURL);
  } else if (fileExtension === 'md') {
    // Read and process .md file with Markdown to HTML conversion
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const htmlContent = markdownToHTML(fileContent);

    return createHTMLContent(htmlContent, title, stylesheetURL);
  } else {
    throw new Error(`Unsupported file extension: .${fileExtension}`);
  }
}
