import fs from 'fs/promises';

const filename = 'test';
const rawFile = await fs.readFile(`./output/${filename}.txt`, 'utf-8');
const match = rawFile.match(/"(\[\[.*\]\])"/);
const data = match[1].replace(/\\"/g, '"');
const json = JSON.parse(data);
console.log(JSON.stringify(json, null, 2));
