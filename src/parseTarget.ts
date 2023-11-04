import parseFile from "~/parseFile";
import { rmdirSync, mkdirSync, readdirSync } from "node:fs";

export default async function parseTarget(target: string, outputDir: string) {
  const filesToProcess = [];
  const isFolder = !(target.endsWith(".txt") || target.endsWith(".md"));

  console.log(`Reading files...`);

  if (isFolder) {
    // Parse folder of text files
    const dir = target;
    let files = readdirSync(dir).filter(
      (file) => file.endsWith(".txt") || file.endsWith(".md"),
    );
    files = files.map((file) => `${dir}/${file}`);

    files.forEach((file) => filesToProcess.push(file));
  } else {
    filesToProcess.push(target);
  }

  // Clear existing output and create folder
  rmdirSync(`./${outputDir}`, { recursive: true });
  mkdirSync(`./${outputDir}`, { recursive: true });

  // Copy website files
  const stylesheet = Bun.file("src/website/style.css");
  const script = Bun.file("src/website/index.js");
  await Bun.write(`./${outputDir}/style.css`, stylesheet);
  await Bun.write(`./${outputDir}/index.js`, script);

  // Parse filesToProcess of files
  for (const file of filesToProcess) {
    await parseFile(file, outputDir);
  }

  console.log(
    `Successfully generated ${filesToProcess.length} HTML file(s) to directory '${outputDir}'.`,
  );
}
