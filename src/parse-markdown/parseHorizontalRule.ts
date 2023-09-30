export default function parseHorizontalRule(text: string) {
    let html = text;
  
    const hrPattern1 = /^\n*\*{3,}$/g;
    html = html.replace(hrPattern1, (match) => {
      return `<hr />`;
    });

    const hrPattern2 = /^\n*-{3,}$/g;
    html = html.replace(hrPattern2, (match) => {
      return `<hr />`;
    });

    const hrPattern3 = /^\n*_{3,}$/g;
    html = html.replace(hrPattern3, (match) => {
      return `<hr />`;
    });
  
    return html;
  }
  