export default function parseHeadingTwo(text: string) {
  let html = text;

  const headingTwoPattern = /^( {0,3}##\s+.*)/;
  html = html.replace(headingTwoPattern, (match, headingTwoText) => {
    let headingTwo = headingTwoText.split(/##/).slice(1).join("##").trim();
    return `<h2>${headingTwo}</h2>`;
  });

  const headingTwoPattern2 = /^(.*\n {0,3}-+\s*)/;
  html = html.replace(headingTwoPattern2, (match, headingTwoText) => {
    let altHeadingTwo = headingTwoText.split(/\n/)[0].trim();
    return `<h2>${altHeadingTwo}</h2>`;
  });

  return html;
}
