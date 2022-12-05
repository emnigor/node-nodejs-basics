import { readFile } from 'node:fs';
import {join  } from 'node:path';

import path   from 'node:path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const read = async () => {
    readFile(join(__dirname, 'files','fileToRead.txt'),'utf8', (err, data) => {
      if (err) try {
        throw new Error('FS operation failed')
       }
      catch (e) {
       console.log(e.name + ': ' + e.message);
     } else {
        console.log(data)
     }
    });
};

await read();