import parseArguments from '~/parseArguments';
export default function configurationParse(tomlArgs: any) {
    var i = 0;
    try {
        const args: string[] = [];

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
                i++;
            }
            if(tomlArgs.output){
                args[i]= "-o";
                i++;
                args[i] = tomlArgs.output;
                i++;
            }
            return args;
        }

    } catch (err) {
        console.error('Error reading or parsing TOML file');
        process.exit(-1);
    }
}
