import parseLink from "@/parse-markdown/parseLink";
import parseBold from "@/parse-markdown/parseBold";
import parseItalics from "@/parse-markdown/parseItalics";

// Parse text within paragraph tag
export default function parseBlock(text: string) {
  let html = text;

  html = parseLink(html);
  html = parseBold(html);
  html = parseItalics(html);

  return html;
}
