import { rmdir, mkdir } from "node:fs";
import mdToHtml from "@/mdToHtml";

const FOLDER_NAME = "til";

// Parse a markdown file
export default async function parseFile(fpath: string) {
  const fpathParts = fpath.split("/");
  const fname = fpathParts[fpathParts.length - 1];
  const fnameWithoutExt = fname.split(".")[0];
  let text = null;

  try {
    const file = Bun.file(fpath);
    text = await file.text();
  } catch (e: any) {
    console.error(`File '${fpath}' does not exist.`);
    return false;
  }

  // Parse markdown
  const html = mdToHtml(text, fnameWithoutExt);

  // Clear existing output and create folder
  rmdir(`./${FOLDER_NAME}`, { recursive: true }, (err) => {
    if (err) throw err;
  });
  mkdir(`./${FOLDER_NAME}`, { recursive: true }, (err) => {
    if (err) throw err;
  });

  // Write to html file
  const htmlFname = fnameWithoutExt + ".html";
  await Bun.write(`./${FOLDER_NAME}/${htmlFname}`, html);
}
