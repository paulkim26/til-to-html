export default function parseHorizontalRule(text: string): string | boolean {
  let changed = false;
  let html = text;

  const hrPattern1 = /^\n*\*{3,}$/g;
  html = html.replace(hrPattern1, () => {
    changed = true;
    return `<hr />`;
  });

  const hrPattern2 = /^\n*-{3,}$/g;
  html = html.replace(hrPattern2, () => {
    changed = true;
    return `<hr />`;
  });

  const hrPattern3 = /^\n*_{3,}$/g;
  html = html.replace(hrPattern3, () => {
    changed = true;
    return `<hr />`;
  });

  return changed ? html : false;
}
