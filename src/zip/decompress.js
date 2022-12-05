import { createReadStream } from 'node:fs';
import { createWriteStream } from 'node:fs';
import {join  } from 'node:path';
import zlib from 'node:zlib';
import {pipeline  } from 'node:stream';


import path   from 'node:path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const input = createReadStream(join(__dirname, 'archive.gz'));
    const output =createWriteStream(join(__dirname, 'fileToCompress.txt'));
    const uzip = zlib.createUnzip();
    pipeline(
        input,
        uzip,
        output,
        err => {
            if (err) {
                throw err
            }
        }
    );
};

await decompress();