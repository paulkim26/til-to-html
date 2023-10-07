import * as fs from 'fs';
import toml from 'toml';

export default async function configuration(configurationPath: string) {
    
    if (!fs.existsSync(configurationPath)) {
        console.error('Configuration file not found:', configurationPath);
        process.exit(-1);
    }
    
    try {
        console.log("GOt Here")
        const argString = fs.readFileSync(configurationPath, 'utf-8');
        return toml.parse(argString);
    } catch (err) {
        console.error('Error reading or parsing TOML file');
        process.exit(-1);
    }
}