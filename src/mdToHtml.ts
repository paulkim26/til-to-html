// Convert markdown to html
export default function mdToHtml(md: string, fname: string) {
  let body = "";
  let lines = md.split(/\r?\n/);
  lines = lines.filter((line) => line !== "");

  lines.forEach((line, i, arr) => {
    const lastLine = i === arr.length - 1;
    body += `\t<p>${line}</p>`;

    if (!lastLine) {
      body += `\n`;
    }
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
