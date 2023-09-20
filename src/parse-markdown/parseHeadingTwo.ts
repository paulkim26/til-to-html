export default function parseHeadingTwo(text: string) {
  let html = text;

  const headingTwoPattern = /^( {0,3}##\s+.*)/;
  html = html.replace(headingTwoPattern, (match, headingTwoText) => {
    let headingTwo = headingTwoText.split(/##/).slice(1).join('##').trim();
    return `<h2>${headingTwo}</h2>`;
  });

  return html;
}
