export default function parseBold(text: string) {
  let html = text;

  const boldPattern1 = /\*\*([^*]+)\*\*/g;
  html = html.replace(boldPattern1, (match, boldText) => {
    return `<b>${boldText}</b>`;
  });

  const boldPattern2 = /\_\_([^*]+)\_\_/g;
  html = html.replace(boldPattern2, (match, boldText) => {
    return `<b>${boldText}</b>`;
  });

  return html;
}
