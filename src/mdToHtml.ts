// Convert markdown to html
export default function mdToHtml(md: string, fname: string) {
  let bodyContent = "";
  let lines = md.split(/\r?\n/);
  const hasTitle = lines[0].length > 0 && lines[1] === "" && lines[2] === "";

  // Clear empty lines
  lines = lines.filter((line) => line !== "");

  lines.forEach((line, i, arr) => {
    const firstLine = i === 0;
    let lineHtml = "\t";

    if (firstLine && hasTitle) {
      lineHtml += `<h1>${line}</h1>`;
    } else {
      lineHtml += `<p>${line}</p>`;
    }

    bodyContent += `${lineHtml}\n`;
  });

  let html = "";
  html += `<!doctype html>\n`;
  html += `<html lang="en">\n`;
  html += `<head>\n`;
  html += `\t<meta charset="utf-8">\n`;
  html += `\t<title>${fname}</title>\n`;
  html += `\t<meta name="viewport" content="width=device-width, initial-scale=1">\n`;
  html += `</head>\n`;
  html += `<body>\n`;
  html += `${bodyContent}`;
  html += `</body>\n`;
  html += `</html>\n`;

  return html;
}
