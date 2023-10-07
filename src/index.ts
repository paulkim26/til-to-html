import parseArguments from "~/parseArguments";
import configuration from "./options/configuration";
import configurationParse from "./options/configurationParse";
var args = Bun.argv.slice(2);
try{
  // for (let i = 0; i < args.length; i++){
    if(args[0] === "-c" || args[0] === "--config"){
      const configurationPath = args[1];
      const configurationArgs = configuration(configurationPath);
      console.log(args[0]);
      console.log(args[1]);
      //args = configurationParse(configurationArgs);  
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
