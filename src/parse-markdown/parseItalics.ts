export default function parseItalics(text: string) {
  let html = text;

  const italicsPattern1 = /\*([^*]+)\*/g;
  html = html.replace(italicsPattern1, (match, italicsText) => {
    return `<i>${italicsText}</i>`;
  });

  const italicsPattern2 = /\_([^*]+)\_/g;
  html = html.replace(italicsPattern2, (match, italicsText) => {
    return `<i>${italicsText}</i>`;
  });

  return html;
}
