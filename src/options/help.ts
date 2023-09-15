import getPackageInfo from "@/helpers/getPackageInfo";

// Prints usage message
export default async function help() {
  const packageInfo = await getPackageInfo();

  const tool = packageInfo.name;
  console.log(
    `${tool} [-h | --help] [-v | --version] [-o | --output output] filename | directory`
  );
}
