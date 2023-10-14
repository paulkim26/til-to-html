import version from "~/options/version";
import help from "~/options/help";
import parseTarget from "~/parseTarget.ts";
import parseConfig from "~/options/parseConfig";

const OUTPUT_DIR_DEFAULT = "til";

export default async function parseArguments(args: string[]) {
  let options: any = {};
  let configProvided = false;

  if (args.length === 0) {
    throw new Error(`Add option -h for help.`);
  }

  for (let i = 0; i < args.length && !configProvided; i++) {
    const arg = args[i];
    const isFinalArg = i === args.length - 1;

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
        if (isFinalArg) {
          throw new Error(`Option ${arg} is missing an operand.`);
        }
        options.output = args[++i];
        break;
      case "--config":
      case "-c":
        if (isFinalArg) {
          throw new Error(`Option ${arg} is missing an operand.`);
        }

        configProvided = true;
        const configPath = args[++i];
        const config = await parseConfig(configPath);

        options = {};

        if ("target" in config) {
          options.target = config.target;
        }

        if ("output" in config) {
          options.output = config.output;
        }
        break;
      default:
        options.target = arg;
    }
  }

  if (!("target" in options)) {
    throw new Error("Missing target files.");
  }

  // Default output directory if missing
  if (!("output" in options)) {
    options.output = OUTPUT_DIR_DEFAULT;
  }

  await parseTarget(options.target, options.output);
}
