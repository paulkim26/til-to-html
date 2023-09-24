import getPackageInfo from "~/helpers/getPackageInfo";

// Prints the tool and version number
export default async function version() {
  const packageInfo = await getPackageInfo();

  const tool = packageInfo.name;
  const versionNumber = packageInfo.version;
  console.log(`${tool} ${versionNumber}`);
}
