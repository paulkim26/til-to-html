import parseMarkdown from "@/parse-markdown";

// Parse a markdown file
export default async function parseFile(fpath: string, outputDir: string) {
  const fpathParts = fpath.split("/");
  const fname = fpathParts[fpathParts.length - 1];
  const fnameWithoutExt = fname.split(".")[0];
  let text = null;

  try {
    const file = Bun.file(fpath);
    text = await file.text();
  } catch (e: any) {
    throw new Error(`File '${fpath}' does not exist.`);
  }

  // Parse markdown
  const html = parseMarkdown(text, fnameWithoutExt);

  // Write to html file
  const htmlFname = fnameWithoutExt + ".html";
  await Bun.write(`./${outputDir}/${htmlFname}`, html);
}
