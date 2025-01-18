import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, 'dist');

fs.rm(distPath, { recursive: true, force: true }, (err) => {
  if (err) {
    console.error(`Error while deleting ${distPath}.`, err);
  } else {
    console.log(`${distPath} is deleted.`);
  }
});
