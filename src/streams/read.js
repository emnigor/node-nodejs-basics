import fs from 'node:fs'

import {join  } from 'node:path';
import path   from 'node:path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    let data = '';
    const readableStream = fs.createReadStream(join(__dirname, 'files', 'fileToRead.txt'),'utf-8');
    readableStream.on('data', chunk => data += chunk);
    readableStream.on('end', () => process.stdout.write(data));
    readableStream.on('error', error => console.log('Error', error.message));
};

await read();