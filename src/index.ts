import parseArguments from "~/parseArguments";
import configuration from "./options/configuration";
import configurationParse from "./options/configurationParse";

var args = Bun.argv.slice(2);
try{
    if(args[0] === "-c" || args[0] === "--config"){
      const configurationPath = args[1];
      const configurationArgs = configuration(configurationPath);
      args = configurationParse(configurationArgs);  
    }
} catch (e: any) {
  console.error(e.message);
  process.exit(1);
}
try {
  await parseArguments(args);
  process.exit(0);
} catch (e: any) {
  console.error(e.message);
  process.exit(1);
}
