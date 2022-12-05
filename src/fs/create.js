
import { writeFile } from 'node:fs';
import { join } from 'node:path';
import { readdir } from 'node:fs';

import path   from 'node:path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    
    readdir(join(__dirname, 'files'), (err,files)=> { 

        if (err) throw err;  
        if (files.includes('fresh.txt')) try {
            throw new Error('FS operation failed')
           }
          catch (e) {
           console.log(e.name + ': ' + e.message);
         } else {
            writeFile(join(__dirname, 'files', 'fresh.txt'), 'Hello Node.js', 'utf8', (err) => {
                if (err) throw err;
                
              });    
        }
    })
};

await create();