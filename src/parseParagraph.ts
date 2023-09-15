// Parse text within paragraph tag
export default function parseParagraph(text: string) {
  let html = text;

  // Replace links
  const linkPattern = /\[([^\]]+)\]\(([^\)]+)\)/g;
  html = html.replace(linkPattern, (match, label, url) => {
    return `<a href="${url}">${label}</a>`;
  });

  // Replace bold text
  const boldPattern1 = /\*\*([^*]+)\*\*/g;
  html = html.replace(boldPattern1, (match, boldText) => {
    return `<b>${boldText}</b>`;
  });

  const boldPattern2 = /\_\_([^*]+)\_\_/g;
  html = html.replace(boldPattern2, (match, boldText) => {
    return `<b>${boldText}</b>`;
  });

  // Replace italic text
  const italicPattern1 = /\*([^*]+)\*/g;
  html = html.replace(italicPattern1, (match, italicText) => {
    return `<i>${italicText}</i>`;
  });

  const italicPattern2 = /\_([^*]+)\_/g;
  html = html.replace(italicPattern2, (match, italicText) => {
    return `<i>${italicText}</i>`;
  });

  return html;
}
