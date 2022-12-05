import { cp} from 'node:fs';

import {join  } from 'node:path';
import path   from 'node:path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    function callback(err) {
      if (err) try {
       throw new Error('FS operation failed')
      }
     catch (e) {
      console.log(e.name + ': ' + e.message);
    }
        
      }
      cp(join(__dirname, 'files'), join(__dirname, 'files_copy'),{errorOnExist:true, recursive:true,force:false}, callback)
 
};

copy();