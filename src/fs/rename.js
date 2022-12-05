import { fsPromises } from 'node:fs';
const rename = async () => {
    fsPromises.rename('./files/wrongFilename.txt', './files/properFilename.md', (err) => {
    if (err) throw err;
    console.log('Rename complete!');
  });
};

await rename();