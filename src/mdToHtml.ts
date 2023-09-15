// Convert markdown to html
export default function mdToHtml(md: string, fname: string) {
  let body = "";
  let lines = md.split(/\r?\n/);
  const hasTitle = lines[0].length > 0 && lines[1] === "" && lines[2] === "";

  // Clear empty lines
  lines = lines.filter((line) => line !== "");

  lines.forEach((line, i, arr) => {
    const firstLine = i === 0;
    const lastLine = i === arr.length - 1;

    let lineHtml = "\t";

    if (firstLine && hasTitle) {
      lineHtml += `<h1>${line}</h1>`;
    } else {
      lineHtml += `<p>${line}</p>`;
    }

    if (!lastLine) {
      lineHtml += `\n`;
    }

    body += lineHtml;
  });

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${fname}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
${body}
</body>
</html>`;

  return html;
}
