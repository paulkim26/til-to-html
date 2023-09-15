import version from "./options/version";
import help from "./options/help";

const arg = Bun.argv[2];

// Read command line argument
switch (arg) {
  case "--version":
  case "-v":
    version();
    break;
  case "--help":
  case "-h":
    help();
    break;
  default:
  //@todo
}
