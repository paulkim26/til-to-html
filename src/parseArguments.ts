import version from "~/options/version";
import help from "~/options/help";
import parseTarget from "~/parseTarget.ts";

const OUTPUT_DIR_DEFAULT = "til";

export default async function parseArguments(args: string[]) {
  let target: string | null = null;
  let exit = false;
  let outputDir = OUTPUT_DIR_DEFAULT;

  if (args.length === 0) {
    throw new Error(`Add option -h for help.`);
  }

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
          throw new Error(`Option ${arg} is missing an operand.`);
        } else {
          outputDir = args[i + 1];
          i++; // Skip over next argument
        }
        break;
      default:
        target = arg;
    }
  }

  if (!!target) {
    parseTarget(target, outputDir);
  } else {
    throw new Error("Missing target files.");
  }
}
