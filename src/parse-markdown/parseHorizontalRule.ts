export default function parseHorizontalRule(text: string) {
    let html = text;
  
    const hrPattern1 = /^\*{3,}$/g;
    html = html.replace(hrPattern1, (match) => {
      return `<hr />`;
    });
  
    return html;
  }
  