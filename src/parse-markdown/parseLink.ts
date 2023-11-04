export default function parseLink(text: string) {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const html = text.replace(linkPattern, (match, label, url) => {
    return `<a href="${url}">${label}</a>`;
  });

  return html;
}
