import * as fs from 'fs';
import toml from 'toml';
import parseArguments from '~/parseArguments';
export default async function configurationParse(tomlArgs: any) {
    try {
        // Check for version flag within the TOML config file
        if (tomlArgs.version === true) {
            parseArguments(tomlArgs.version);
        }

    } catch (err) {
        //console.error('Error reading or parsing TOML file');
        process.exit(-1);
    }
}
// var toml = require('toml');
// var data = toml.parse(configurationPath);
// console.dir(data);
    // Read the file asynchronously
    // fs.readFile(configurationPath, 'utf8', (err, data) => {
    //     if (err) {
    //     console.error(`Error reading file: ${err}`);
    //     return;
    //     }
    
    //     // Split the file content into words using whitespace as a delimiter
    //     const args = data.split(/\s+/);
    
    //     // Filter out empty strings (e.g., multiple spaces)
    //     const trimArgs= args.filter((args) => args.trim() !== '');
    
    //     // Now, you can use filteredWords as your command line arguments
    //     console.log('Command line arguments:');
    //     console.log(filteredWords);



    //const configuration = loadConfiguration(configurationPath)
    // try:
    //     with open(configurationPath, "rb") as f:
    //         config = tomllib.load(f)
    // except FileNotFoundError as e:
    //     raise Exception(f"Config file '{configPath}' could not be found.")


    // if "output" in config:
    //     outputPath = config["output"]
    // else:
    //     outputPath = f'{DEFAULTOUTPUT}'
