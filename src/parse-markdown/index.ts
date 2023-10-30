import parseHeadingTwo from "./parseHeadingTwo";
import parseLink from "~/parse-markdown/parseLink";
import parseBold from "~/parse-markdown/parseBold";
import parseItalics from "~/parse-markdown/parseItalics";
import parseHorizontalRule from "~/parse-markdown/parseHorizontalRule";
import searchBarHtml from "~/search/searchBarHtml";

// Convert markdown to html
export default function parseMarkdown(md: string, fname: string) {
  let bodyHtml = "";
  let paragraphs = md.split(/\r?\n/);
  let title = fname;

  const hasTitle =
    paragraphs[0].length > 0 && paragraphs[1] === "" && paragraphs[2] === "";

  // Check for alternative Heading Two syntax
  for (let i = 0; i < paragraphs.length - 1; i++) {
    if (paragraphs[i + 1].match(/^( {0,3}-+\s*)$/) !== null) {
      paragraphs[i] = `${paragraphs[i]}\n${paragraphs[i + 1]}`;
      paragraphs[i + 1] = "";
    }
  }

  // Clear empty paragraphs
  paragraphs = paragraphs.filter((paragraph) => paragraph !== "");

  paragraphs.forEach((md, i) => {
    const firstLine = i === 0;
    let isBlock = false;
    let mdParsed = md;

    // Check if block element
    const headingTwo = parseHeadingTwo(mdParsed);
    if (headingTwo !== false) {
      mdParsed = headingTwo as string;
      isBlock = true;
    }

    const horizontalRule = parseHorizontalRule(mdParsed);
    if (horizontalRule !== false) {
      mdParsed = horizontalRule as string;
      isBlock = true;
    }

    // Check inline elements
    mdParsed = parseLink(mdParsed);
    mdParsed = parseBold(mdParsed);
    mdParsed = parseItalics(mdParsed);

    let html = "\t\t";
    if (firstLine && hasTitle) {
      html += `<h1>${mdParsed}</h1>`;
      title = mdParsed; // Set <title> tag
    } else {
      if (isBlock) {
        html += mdParsed;
      } else {
        html += `<p>${mdParsed}</p>`;
      }
    }

    bodyHtml += `${html}\n`;
  });

  const searchBar = searchBarHtml();

  let html = "";
  html += `<!doctype html>\n`;
  html += `<html lang="en">\n`;
  html += `<head>\n`;
  html += `\t<link rel="stylesheet" href="style.css">\n`;
  html += `\t<meta charset="utf-8">\n`;
  html += `\t<title>${title}</title>\n`;
  html += `\t<script src="index.js"></script>\n`;
  html += `\t<meta name="viewport" content="width=device-width, initial-scale=1">\n`;
  html += `</head>\n`;
  html += `<body>\n`;
  html += `\t${searchBar}`;
  html += `\t<div id="post-1" class="post">\n`;
  html += bodyHtml;
  html += `\t</div>\n`;
  html += `</body>\n`;
  html += `</html>\n`;

  return html;
}
