import pkg from "@root/package.json";

// Prints the tool and version number
export default async function version() {
  const tool = pkg.name;
  const versionNumber = pkg.version;
  console.log(`${tool} ${versionNumber}`);
}
