import toml from "toml";

export default async function parseConfig(configPath: string) {
  const file = Bun.file(configPath);
  const fileExists = await file.exists();
  if (!fileExists) {
    throw new Error(`Configuration file not found at '${configPath}'.`);
  }

  try {
    const configString = await file.text();
    return toml.parse(configString);
  } catch (err) {
    throw new Error(`Error reading or parsing TOML file.`);
  }
}
