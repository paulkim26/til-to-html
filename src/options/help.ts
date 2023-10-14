import pkg from "@root/package.json";

// Prints usage message
export default async function help() {
  const tool = pkg.name;

  let message = "";
  message += `Usage: ${tool} [OPTIONS] [ARGUMENT]\n\n`;
  message += `Description: ${tool} is a tool that converts TIL Markdown posts into static HTML pages.\n\n`;

  message += `Options:\n`;
  message += `\t-h, --help\t\tdisplay usage\n`;
  message += `\t-v, --version\t\tdisplay version\n`;
  message += `\t-o, --output DIRECTORY\tindicate custom output directory\n`;
  message += `\t-c, --config DIRECTORY\tindicate config TOML file to use\n`;
  message += `\n`;

  message += `Arguments:\n`;
  message += `\tTARGET\t\t\tEither a single .txt file or folder to convert.\n`;

  console.log(message);
}
