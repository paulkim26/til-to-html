import version from "~/options/version";
import help from "~/options/help";
import parseTarget from "~/parseTarget.ts";
import configuration from "./options/configuration";
import configurationParse from "./options/configurationParse";

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
      case "--config":
      case "-c":
        const configurationPath = args[i + 1];
        const configurationArgs = configuration(configurationPath);
        configurationParse(configurationArgs);
        return;
      case "--output":
      case "-o":

        const finalArg = i === args.length - 1;

        if (finalArg) {
          throw new Error(`Option ${arg} is missing an operand.`);
        } else {
          console.log("Output Directory: "+args[i+1]);
          outputDir = args[i + 1];
          i++; // Skip over next argument
        }
        break;
      default:
        target = arg;
    }
  }

  if (!!target) {
    await parseTarget(target, outputDir);
  } else {
    throw new Error("Missing target files.");
  }
}
