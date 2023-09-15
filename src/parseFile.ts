import { rmdir, mkdir } from "node:fs";

const FOLDER_NAME = "til";

// Parse a markdown file
export default async function parseFile(fpath: string) {
  let text = null;

  try {
    const file = Bun.file(fpath);
    text = await file.text();
  } catch (e: any) {
    console.error(`File '${fpath}' does not exist.`);
    return false;
  }

  const fpathParts = fpath.split("/");
  const fname = fpathParts[fpathParts.length - 1];
  const fnameWithoutExt = fname.split(".")[0];

  // Parse markdown
  let html = "";
  html += "Output";
  //@todo

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
