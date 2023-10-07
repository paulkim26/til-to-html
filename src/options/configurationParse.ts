import * as fs from 'fs';
import toml from 'toml';
import parseArguments from '~/parseArguments';
export default function configurationParse(tomlArgs: any) {
    var i = 0;
    try {
        const args: string[] = [];
        // Check for version flag within the TOML config file
        if (tomlArgs.version === true) {
            args[i]="-v";
            parseArguments(args);
            return true;
        }
        else if (tomlArgs.help === true) {
            args[i]="-h";
            parseArguments(args);
            return true;
        }
        else {
            if(tomlArgs.input){
                args[i] = tomlArgs.input;
                console.log("Input: " + args[i])
                i++;
            }
            if(tomlArgs.output){
                args[i]= "-o";
                console.log("Output: " + args[i]);
                i++;
                args[i] = tomlArgs.output;
                console.log("Output: " + args[i]);
                i++;
            }
            return args;
        }

    } catch (err) {
        //console.error('Error reading or parsing TOML file');
        process.exit(-1);
    }
}
