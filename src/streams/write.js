import fs from 'node:fs'

import {join  } from 'node:path';
import path   from 'node:path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const WriteStream = fs.createWriteStream(join(__dirname, 'files', 'fileToWrite.txt'));
    process.stdin.on('data', data => WriteStream.write(data));
};

await write();