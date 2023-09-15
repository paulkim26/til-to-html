import version from "@/options/version";
import help from "@/options/help";
import parseFile from "@/parseFile";
import { rmdirSync, mkdirSync, readdirSync } from "node:fs";

const OUTPUT_DIR_DEFAULT = "til";

const parseArguments = async (args: string[]) => {
  let foundTarget = false;
  let target = "";
  let exit = false;
  let outputDir = OUTPUT_DIR_DEFAULT;

  for (let i = 0; i < args.length && !exit; i++) {
    const arg = args[i];

    switch (arg) {
      case "--version":
      case "-v":
        version();
        return false;
      case "--help":
      case "-h":
        help();
        return false;
      case "--output":
      case "-o":
        const finalArg = i === args.length - 1;

        if (finalArg) {
          throw new Error(`Option ${arg} requires an operand.`);
        } else {
          outputDir = args[i + 1];
          i++; // Skip over next argument
        }
        break;
      default:
        foundTarget = true;
        target = arg;
    }
  }

  if (foundTarget) {
    const filesToProcess = [];
    const isFolder = !target.endsWith(".txt");

    console.log(`Reading files...`);

    if (isFolder) {
      // Parse folder of text files
      const dir = target;
      let files = readdirSync(dir).filter((file) => file.endsWith(".txt"));
      files = files.map((file) => `${dir}/${file}`);

      files.forEach((file) => filesToProcess.push(file));
    } else {
      filesToProcess.push(target);
    }

    // Clear existing output and create folder
    rmdirSync(`./${outputDir}`, { recursive: true });
    mkdirSync(`./${outputDir}`, { recursive: true });

    // Parse filesToProcess of files
    for (const file of filesToProcess) {
      await parseFile(file, outputDir);
    }

    console.log(
      `Successfully generated ${filesToProcess.length} HTML file(s) to directory '${outputDir}'.`
    );
  } else {
    throw new Error("Missing target files.");
  }
};

const args = Bun.argv.slice(2);
try {
  await parseArguments(args);
} catch (e: any) {
  console.error(e.message);
}
