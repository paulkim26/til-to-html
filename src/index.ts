import version from "@/options/version";
import help from "@/options/help";
import parseFile from "@/parseFile";

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
    const isFolder = !arg.endsWith(".txt");

    if (isFolder) {
      // Parse folder of text files
      //@todo
    } else {
      parseFile(arg);
    }
}
