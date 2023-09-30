import parseArguments from "~/parseArguments";

const args = Bun.argv.slice(2);
try {
  await parseArguments(args);
  process.exit(0);
} catch (e: any) {
  console.error(e.message);
  process.exit(1);
}
