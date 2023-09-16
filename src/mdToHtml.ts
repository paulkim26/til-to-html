import parseParagraph from "@/parseParagraph";

// Convert markdown to html
export default function mdToHtml(md: string, fname: string) {
  let bodyHtml = "";
  let paragraphs = md.split(/\r?\n/);
  let title = fname;

  const hasTitle =
    paragraphs[0].length > 0 && paragraphs[1] === "" && paragraphs[2] === "";

  // Clear empty paragraphs
  paragraphs = paragraphs.filter((paragraph) => paragraph !== "");

  paragraphs.forEach((paragraph, i) => {
    const firstLine = i === 0;
    let lineHtml = "\t\t";

    const parsedParagraph = parseParagraph(paragraph);

    if (firstLine && hasTitle) {
      lineHtml += `<h1>${parsedParagraph}</h1>`;
      title = parsedParagraph; // Set <title> tag
    } else {
      lineHtml += `<p>${parsedParagraph}</p>`;
    }

    bodyHtml += `${lineHtml}\n`;
  });

  let html = "";
  html += `<!doctype html>\n`;
  html += `<html lang="en">\n`;
  html += `<head>\n`;
  html += `\t<link rel="stylesheet" href="style.css">\n`;
  html += `\t<meta charset="utf-8">\n`;
  html += `\t<title>${title}</title>\n`;
  html += `\t<meta name="viewport" content="width=device-width, initial-scale=1">\n`;
  html += `</head>\n`;
  html += `<body>\n`;
  html += `\t<div class="post">\n`;
  html += bodyHtml;
  html += `\t</div>\n`;
  html += `</body>\n`;
  html += `</html>\n`;

  return html;
}
