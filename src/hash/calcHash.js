
import {createHash  } from 'node:crypto';
import {readFile  } from 'node:fs';

import {join  } from 'node:path';
import path   from 'node:path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const calculateHash = async () => { 
    readFile(join(__dirname, 'files', 'fileToCalculateHashFor.txt'), 'utf8', function(err, data){
        if (err) throw err;  
        console.log( createHash('sha256').update(data).digest('hex'))
    });
};

await calculateHash();