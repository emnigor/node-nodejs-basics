import { createReadStream } from 'node:fs';
import { createWriteStream } from 'node:fs';
import {join  } from 'node:path';
import zlib from 'node:zlib';
import {pipeline  } from 'node:stream';


import path   from 'node:path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const compress = async () => {
    const input = createReadStream(join(__dirname,'files', 'fileToCompress.txt'), 'utf-8');
    const output =createWriteStream(join(__dirname, 'archive.gz'));
    const gzip = zlib.createGzip();
    
    pipeline(
        input,
        gzip,
        output,
        err => {
            if (err) {
                throw err
            }
        }
    );
};

await compress();