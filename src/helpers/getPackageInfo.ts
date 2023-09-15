// Retrieve package.json data
export default async function getPackageInfo() {
  const path = "./package.json";
  const file = Bun.file(path);
  const packageInfo = await file.json();

  return packageInfo;
}
