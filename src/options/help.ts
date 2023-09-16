import getPackageInfo from "@/helpers/getPackageInfo";

// Prints usage message
export default async function help() {
  const packageInfo = await getPackageInfo();
  const tool = packageInfo.name;

  let message = "";
  message += `Usage: ${tool} [OPTIONS] [ARGUMENT]\n\n`;
  message += `Description: ${tool} is a tool that converts TIL Markdown posts into static HTML pages.\n\n`;

  message += `Options:\n`;
  message += `\t-h, --help\t\tDisplay usage.\n`;
  message += `\t-v, --version\t\tDisplay version.\n`;
  message += `\t-o, --output DIRECTORY\tIndicate a custom output directory.\n`;
  message += `\n`;

  message += `Arguments:\n`;
  message += `\tTARGET\t\t\tEither a single input text file or folder to convert.`;
  message += `\n\n`;

  console.log(message);
}
