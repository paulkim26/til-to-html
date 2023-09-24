import parseArguments from "~/parseArguments";

const args = Bun.argv.slice(2);
try {
  await parseArguments(args);
} catch (e: any) {
  console.error(e.message);
}
